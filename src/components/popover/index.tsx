import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";

const StyledTrigger = styled(PopoverPrimitive.Trigger, {
    borderRadius: "0.375rem",
    cursor: "pointer",
    display: "inline-block",
    padding: "0.5rem",
    "&:focus": {
        outline: "none",
        boxShadow: "0 0 0 1px $colors$popoverBorder, 0 0 0 3px $colors$popoverBorderFocus",
    },
})

const StyledContent = styled(PopoverPrimitive.Content, {
    borderRadius: "0.375rem",
    boxShadow: "0 0 0 1px $colors$popoverBorder",
    padding: "0.5rem",
    zIndex: 50,
    "&:focus": {
        outline: "none",
        boxShadow: "0 0 0 1px $colors$popoverBorder, 0 0 0 3px $colors$popoverBorderFocus",
    },
})

const Popover = PopoverPrimitive.Root
const PopoverPortal = PopoverPrimitive.Portal
const PopoverTrigger = React.forwardRef<HTMLDivElement, PopoverPrimitive.PopoverTriggerProps & CSSProps>(
    ({ children, css, ...props }, ref) => (
        <StyledTrigger css={css} {...props}>{children}</StyledTrigger>
    )
)


const PopoverContent = React.forwardRef<HTMLDivElement, PopoverPrimitive.PopoverContentProps & CSSProps>(
    ({ children, css, ...props }, ref) => (
        <StyledContent
            ref={ref}
            css={css}
            {...props}
        >
            {children}
        </StyledContent>
    )
)

export {
    PopoverTrigger,
    PopoverContent,
    PopoverPortal,
    Popover
}
