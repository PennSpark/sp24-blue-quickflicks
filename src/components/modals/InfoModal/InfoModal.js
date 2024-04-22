/** @format */

import React from "react";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";
import Fiona from "../../../../public/Fiona.png";
import Xue from "../../../../public/Xue.jpeg";
import Raphael from "../../../../public/Raphael.jpg";

function InfoModal({ trigger, className }) {
	return (
		<BaseModal
			title=''
			trigger={trigger}
			initiallyOpen={false}
			actionButtonText='Got It!'>
			<Tabs defaultValue='how-to-play'>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='how-to-play'>How To Play</TabsTrigger>
					<TabsTrigger value='about-us'>About Us</TabsTrigger>
				</TabsList>
				<TabsContent value='how-to-play'>
					<Accordion
						type='single'
						collapsible
						className='w-full text-[#a70100]'>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								<b>
									<i>What is Bookends?</i>
								</b>
							</AccordionTrigger>
							<AccordionContent>
								Bookends is a film-making term that denotes the
								scenes at the beginning and end of a film
								complementing each other. <br />
								<br />
								Therefore, the goal of this game is to
								accurately place the sixteen words into groups
								of four based on their shared characteristics
								from four movies into their own little Bookends.
								<br />
								<br />
								While you attempt to do so, we hope you learn a
								little more about our favorite movies along the
								way!
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</TabsContent>
				<TabsContent value='about-us'>
					<Accordion
						type='single'
						collapsible
						className='w-full text-[#a70100] text-left'>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								<b>
									<i>Fiona Herzog</i>
								</b>
							</AccordionTrigger>
							<AccordionContent>
								<img
									className='w-[160px] h-[160px] m-auto rounded-lg'
									alt='Fiona.png'
									src={Fiona}
								/>
								<br />
								<b>Meet the Movie Fiends behind Bookends!</b>
								<br />
								<br />
								<b>Role:</b> Designer
								<br />
								<b>Favorite Movie: </b>
								<i>Everything Everywhere All at Once</i>
								<br />
								<b>Fun Fact:</b> Once ate an entire habanero
								pepper for a friend's comedy sketch project.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>
								<b>
									<i>Raphael Renzo Martinez</i>
								</b>
							</AccordionTrigger>
							<AccordionContent>
								<img
									className='w-[160px] h-[160px] m-auto rounded-lg'
									alt='Raphael.jpg'
									src={Raphael}
								/>
								<br />
								<b>Meet the Movie Fiends behind Bookends!</b>
								<br />
								<br />
								<b>Role:</b> Developer
								<br />
								<b>Favorite Movie: </b>
								<i>Whiplash</i>
								<br />
								<b>Fun Fact:</b> I have my own IMDb page
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>
								<b>
									<i>Xue Jiang</i>
								</b>
							</AccordionTrigger>
							<AccordionContent>
								<img
									className='w-[160px] h-[160px] object-scale-down m-auto rounded-lg'
									alt='Xue.jpeg'
									src={Xue}
								/>
								<br />
								<b>Meet the Movie Fiends behind Bookends!</b>
								<br />
								<br />
								<b>Role:</b> Developer
								<br />
								<b>Favorite Movie: </b>
								<i>Amélie</i>
								<br />
								<b>Fun Fact:</b> I made a short film with my
								friends over summer competing in a 48-hr movie
								marathon challenge!
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-4'>
							<AccordionTrigger>
								<b>
									<i>Penn Spark</i>
								</b>
							</AccordionTrigger>
							<AccordionContent>
								Check us out!{" "}
								<a
									href='https://pennspark.org/'
									target='_blank'
									className='hover:italic underline'>
									https://pennspark.org/
								</a>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</TabsContent>
			</Tabs>
		</BaseModal>
	);
}

export default InfoModal;
