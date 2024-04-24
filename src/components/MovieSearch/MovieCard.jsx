/** @format */

import React from "react";
import Card from "@mui/material/Card";
import { CardMedia, CardActionArea, CardContent } from "@mui/material";
import { Badge } from "../ui/badge";
import Sparkles from "../Sparkles";

const MovieCard = ({ imagePath, imdbLink, title, year, imdbRating }) => {
	return (
		<div className='m-auto'>
			{imagePath && (
				<Card
					className='mx-auto mt-[20px]'
					variant='outlined'
					sx={{
						height: 370,
						width: 330,
						backgroundColor: "#fff7e9",
						border: 2,
						borderColor: "#a60000",
						textAlign: "center",
					}}>
					<CardActionArea href={imdbLink} target='_blank'>
						<Badge className='animate-pulse absolute top-0 right-0 mr-2 mt-[-2]'>
							Learn More
						</Badge>
						{imagePath === "N/A" ? (
							<CardMedia
								style={{
									height: 296,
									width: 310,
									margin: "auto",
									marginTop: 10,
									marginBottom: 0,
									border: 2,
									borderRadius: "0.3rem",
								}}
								image={
									"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
								}
								alt={
									"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
								}
							/>
						) : (
							<CardMedia
								style={{
									height: 296,
									width: 200,
									margin: "auto",
									marginTop: 10,
									marginBottom: 0,
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
									marginTop: -10,
									marginBottom: 0,
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
