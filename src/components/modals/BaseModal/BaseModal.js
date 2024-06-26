/** @format */

import React from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../../ui/alert-dialog";

function BaseModal({
	title = "Bookends",
	trigger = undefined,
	initiallyOpen = true,
	footerElements,
	children,
	actionButtonText = "Continue",
	showActionButton = true,
}) {
	const [isOpen, setIsOpen] = React.useState(initiallyOpen);

	React.useEffect(() => {
		setIsOpen(initiallyOpen);
	}, [initiallyOpen]);

	function handleCloseEvent() {
		setIsOpen(false);
	}

	return (
		<AlertDialog
			open={isOpen}
			onOpenChange={setIsOpen}
			className='w-[200px]'>
			{!!trigger && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}
			<AlertDialogContent
				handleMouseDownOnOverlay={handleCloseEvent}
				onEscapeKeyDown={handleCloseEvent}
				onCloseAutoFocus={(e) => {
					e.preventDefault();
				}}>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					{children}
				</AlertDialogHeader>
				<AlertDialogFooter>
					{footerElements}
					{showActionButton && (
						<AlertDialogAction onClick={() => setIsOpen(false)}>
							{actionButtonText}
						</AlertDialogAction>
					)}
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default BaseModal;
