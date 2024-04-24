/** @format */

import React from "react";
import Card from "@mui/material/Card";
import { CardMedia, CardActionArea, CardContent } from "@mui/material";
import { Badge } from "../ui/badge";
import PosterNA from "../../../public/PosterNA.png";

const MovieCard = ({ imagePath, imdbLink, title, year, imdbRating }) => {
	return (
		<div className='m-auto'>
			{imagePath && (
				<Card
					className='mx-auto mt-[20px]'
					variant='outlined'
					sx={{
						height: "45vh",
						width: "20vw",
						minWidth: "200px",
						maxWidth: "280px",
						backgroundColor: "#fff7e9",
						border: 2,
						borderColor: "#a60000",
						textAlign: "center",
						position: "relative",
					}}>
					<CardActionArea
						href={imdbLink}
						target='_blank'
						sx={{
							height: "45vh",
							width: "20vw",
							minWidth: "200px",
							maxWidth: "280px",
							paddingTop: "10px",
						}}>
						<Badge className='animate-pulse absolute top-2 right-0 mr-2 mt-[-2]'>
							Learn More
						</Badge>
						{imagePath === "N/A" ? (
							<CardMedia
								style={{
									height: 105,
									width: 140,
									objectFit: "stretch",
									margin: "auto",

									border: 2,
									borderRadius: "0.3rem",
								}}
								image={PosterNA}
								alt={PosterNA}
							/>
						) : (
							<CardMedia
								style={{
									height: 222,
									width: 150,
									margin: "auto",
									border: 2,
									borderRadius: "0.3rem",
								}}
								image={imagePath}
								alt={imagePath}
							/>
						)}
						<CardContent>
							<p
								style={{
									position: "absolute",
									bottom: 20,
									left: 0,
									right: 0,
								}}>
								<b>
									{title.includes("(")
										? title.substring(0, title.indexOf("("))
										: title}
								</b>{" "}
								({year}) <br />
								{imdbRating}/10 ⭐️{" "}
							</p>
						</CardContent>
					</CardActionArea>
				</Card>
			)}
		</div>
	);
};

export default MovieCard;
