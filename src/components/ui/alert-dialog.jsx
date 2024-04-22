/** @format */

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<AlertDialogPrimitive.Overlay
			className={cn(
				"fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				className
			)}
			{...props}
			ref={ref}
		/>
	)
);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef(
	({ className, handleMouseDownOnOverlay, ...props }, ref) => (
		<AlertDialogPortal>
			<AlertDialogOverlay onMouseDown={handleMouseDownOnOverlay} />
			<AlertDialogPrimitive.Content
				ref={ref}
				className={cn(
					"fixed  w-[300px] left-[50%] top-[44%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#fff8eb] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
					className
				)}
				{...props}
			/>
		</AlertDialogPortal>
	)
);
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }) => (
	<div
		className={cn(
			"flex flex-col space-y-2 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }) => (
	<div
		className={cn("flex flex-row gap-x-4 justify-center", className)}
		{...props}
	/>
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cn("text-lg font-semibold", className)}
		{...props}
	/>
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef(
	({ className, ...props }, ref) => (
		<AlertDialogPrimitive.Description
			ref={ref}
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	)
);
AlertDialogDescription.displayName =
	AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={cn(buttonVariants({ variant: "submit" }), className)}
		{...props}
	/>
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Cancel
		ref={ref}
		className={cn(
			buttonVariants({ variant: "outline" }),
			"mt-2 sm:mt-0",
			className
		)}
		{...props}
	/>
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
};
