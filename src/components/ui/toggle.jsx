/** @format */

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const toggleVariants = cva(
	"inline-flex items-center justify-center rounded-[17px] text-sm ring-offset-background transition-colors lg:hover:bg-muted lg:hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[#dd7c7c] data-[state=on]:text-amber-950",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				outline:
					"border-solid border-amber-900 border bg-[#A70000] lg:hover:bg-accent lg:hover:text-accent-foreground",
			},
			size: {
				default: "h-[70px] w-[70px] px-3",
				sm: "h-9 px-2.5",
				lg: "h-11 px-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

const Toggle = React.forwardRef(
	({ className, variant, size, ...props }, ref) => (
		<TogglePrimitive.Root
			ref={ref}
			className={cn(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	)
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
