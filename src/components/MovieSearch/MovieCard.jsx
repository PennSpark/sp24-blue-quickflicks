/** @format */

import React from "react";
import Card from "@mui/material/Card";
import { CardMedia, CardActionArea } from "@mui/material";

const MovieCard = ({ imagePath, imdbLink }) => {
	// const cleanedPath = imagePath.replace("imdb_crop/", "");
	// const finalPath = "https://nets2120-images.s3.amazonaws.com/" + cleanedPath;
	return (
		<div className='m-auto'>
			{imagePath && (
				<Card
					className='mx-auto mt-[100px]'
					variant='outlined'
					style={{ height: 410, width: 270 }}>
					<CardActionArea href={imdbLink} target='_blank'>
						<CardMedia
							style={{ height: 410, width: 270 }}
							image={imagePath}
							alt={imagePath}
						/>
					</CardActionArea>
				</Card>
			)}
		</div>
	);
};

export default MovieCard;
