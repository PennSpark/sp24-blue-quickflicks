import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal() {
    const { submittedGuesses } = React.useContext(GameStatusContext);
    const { gameData } = React.useContext(PuzzleDataContext);
    const navigate = useNavigate();
    const location = useLocation();

    const currentGameIndex = location.pathname.split("/").pop();

    let currentGameIndexInt;
    switch (currentGameIndex) {
        case "one":
            currentGameIndexInt = 1;
            break;
        case "two":
            currentGameIndexInt = 2;
            break;
        case "three":
            currentGameIndexInt = 3;
            break;
        case "four":
            currentGameIndexInt = 4;
            break;
        case "five":
            currentGameIndexInt = 5;
            break;
        case "six":
            currentGameIndexInt = 6;
            break;
        default:
            currentGameIndexInt = 1;
    }

    const goToNextGame = () => {
        const nextGameIndex = currentGameIndexInt + 1;
        let nextGameIndexStr;
        switch (nextGameIndex) {
            case 1:
                nextGameIndexStr = "one";
                break;
            case 2:
                nextGameIndexStr = "two";
                break;
            case 3:
                nextGameIndexStr = "three";
                break;
            case 4:
                nextGameIndexStr = "four";
                break;
            case 5:
                nextGameIndexStr = "five";
                break;
            case 6:
                nextGameIndexStr = "six";
                break;
            default:
                nextGameIndexStr = "one";
        }
        navigate(`/play/${nextGameIndexStr}`);
    };

    return (
        <BaseModal
            title='You Won!'
            trigger={
                <>
                    <div className="flex justify-between">
                        <Button
                            variant='submit'
                            className='w-full bg-[#a70100] mr-2'
                            children={"View Results"}
                        />
                        <Button
                            variant='submit'
                            className='w-full bg-[#a70100] ml-2'
                            onClick={goToNextGame}
                            children={"Next Game"}
                        />
                    </div>
                </>
            }			
            initiallyOpen={false}
            showActionButton={false}
            footerElements={<ShareScoreButton buttonText={"Share My Score!"} />}
        >
            <div className='flex flex-col place-content-center'>
                <p className='text-center font-[600]'>
                    Click on each movie to learn more :{`)`}
                </p>
                <span className='text-center whitespace-pre mb-2'>
                    {"\n"}
                    {generateEmojiGrid(gameData, submittedGuesses)}
                </span>
            </div>
        </BaseModal>
    );
}

export default ViewResultsModal;
