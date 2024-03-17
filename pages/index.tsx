"use client";
import Image from "next/image";
import React from "react";
import Login from "./Login";
import Link from "next/link";
import "../app/globals.css";

export default function Home() {
	const handleClick = async () => {
		try {
			const response = await fetch("/api/hello");
			const data = await response.json();
			console.log(data.message); // Print "hello" to the console
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<div>
			<h1>Hello Next.js!</h1>
			<button onClick={handleClick}>Click me to say hello!</button>

			<Link href="/Login">
				Login Page
			</Link>
		</div>
	);
}