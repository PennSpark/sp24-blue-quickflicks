/** @format */

import React from "react";

import WordButton from "../WordButton";

import * as styles from "./GameGrid.module.css";

import { useSpring, animated } from "react-spring";
import { getSolution } from "../../lib/time-utils";
import { GameStatusContext } from "../../providers/GameStatusProvider";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";

function WordRow({ words }) {
	return (
		<div className={`grid grid-cols-4 gap-4`}>
			{words.map((word) => (
				<WordButton
					key={word}
					word={word}
					fullCandidateSize={words.length}
				/>
			))}
		</div>
	);
}

export function SolvedWordRow({ ...props }) {
	const DIFFICULTY_COLOR_MAP = {
		1: "#d90404",
		2: "#cf3c3d",
		3: "#fa5e5e",
		4: "#F87F7F",
	};

	const color = `${DIFFICULTY_COLOR_MAP[props.difficulty]}`;

	const [hasBeenClicked, setHasBeenClicked] = React.useState(false);

	const springProps = useSpring({
		from: {
			opacity: 0,
			transform: "translateY(100%)",
		},
		to: {
			opacity: 1,
			transform: "translateY(0%)",
		},
		delay: 250,
	});
	// if there is an image available render it as a popover
	const isImageAvailable = props.imageSrc != null;
	return (
		<animated.div style={springProps}>
			{!isImageAvailable ? (
				<div
					style={{
						backgroundColor: color,
						borderRadius: 8,
						color: "#fff7e9",
					}}>
					<p className='font-rosario font-bold pt-2 pl-4 text-white'>
						{props.category}
					</p>
					<p className='font-rosario font-thin pb-2 pl-4 text-white'>
						{props.words.join(", ")}
					</p>
				</div>
			) : (
				<Popover>
					<PopoverTrigger asChild>
						<div
							className='cursor-pointer hover:animate-pulse shadow-md'
							style={{
								backgroundColor: color,
								borderRadius: 8,
								color: "#fff7e9",
							}}
							onClick={() => setHasBeenClicked(true)}>
							{!hasBeenClicked && (
								<Badge className='animate-pulse absolute top-0 right-0 mr-2 mt-2'>
									View More
								</Badge>
							)}
							<p className='font-rosario font-bold pt-2 pl-4 text-white'>
								{props.category}
							</p>
							<p className='font-rosario font-thin pb-2 pl-4 text-white'>
								{props.words.join(", ")}
							</p>
						</div>
					</PopoverTrigger>
					<PopoverContent>
						<div className='text-center'>
							<img
								src={props.imageSrc}
								className='mb-[15px] h-[200px] m-auto rounded-sm'
							/>
							<a
								href={props.link}
								target='_blank'
								className='text-white bg-[#a70100] font-medium rounded-lg text-sm px-5 py-2.5'>
								Learn More
							</a>
						</div>
					</PopoverContent>
				</Popover>
			)}
		</animated.div>
	);
}

function GameGrid({ gameRows, shouldGridShake, setShouldGridShake, index }) {
	const { submittedGuesses, isGameOver, isGameWon, solvedGameData } =
		React.useContext(GameStatusContext);

	const gameData = getSolution(index).puzzleAnswers;

	React.useEffect(() => {
		const shakeEffect = window.setTimeout(() => {
			setShouldGridShake(false);
			// this timeout should probably be calculated since it depends on animation values for the grid shake
		}, 2000);

		// cleanup timeout
		return () => window.clearTimeout(shakeEffect);
	}, [submittedGuesses]);

	const isGameOverAndLost = isGameOver && !isGameWon;
	const isGameOverAndWon = isGameOver && isGameWon;
	const isGameActive = !isGameOver;
	const isGameActiveWithAnySolvedRows =
		isGameActive && solvedGameData.length > 0;

	return (
		<div>
			{(isGameOverAndWon || isGameActiveWithAnySolvedRows) && (
				<div className='grid gap-y-2 pb-2'>
					{solvedGameData.map((solvedRowObj) => (
						<SolvedWordRow
							key={solvedRowObj.category}
							{...solvedRowObj}
						/>
					))}
				</div>
			)}
			{isGameActive && (
				<div
					className={`grid gap-y-2 ${
						shouldGridShake ? styles.shake : ""
					}`}>
					{gameRows.map((row, idx) => (
						<WordRow key={idx} words={row} />
					))}
				</div>
			)}
			{/* Show correct answers here after the game is over if they lost */}
			{isGameOverAndLost && (
				<div className='grid gap-y-2 pb-2'>
					{gameData.map((obj) => (
						<SolvedWordRow key={obj.category} {...obj} />
					))}
				</div>
			)}
		</div>
	);
}

export default GameGrid;
