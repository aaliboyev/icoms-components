import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import {styled} from "@stitches/react";

type PopoverProps = {
    styles: {
        root?: React.CSSProperties
        trigger?: React.CSSProperties
    },
    trigger: PopoverPrimitive.PopoverTriggerProps
    content: PopoverPrimitive.PopperContentProps
    children: React.ReactNode
}

const StyledTrigger = styled(PopoverPrimitive.Trigger, {
    backgroundColor: "#444",
    borderRadius: "0.375rem",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    padding: "0.5rem",
    "&:focus": {
        outline: "none",
        boxShadow: "0 0 0 1px $colors$popoverBorder, 0 0 0 3px $colors$popoverBorderFocus",
    },
})

const StyledContent = styled(PopoverPrimitive.Content, {
    backgroundColor: "#444",
    borderRadius: "0.375rem",
    boxShadow: "0 0 0 1px $colors$popoverBorder",
    color: "#fff",
    padding: "0.5rem",
    width: "20rem",
    zIndex: 50,
    "&:focus": {
        outline: "none",
        boxShadow: "0 0 0 1px $colors$popoverBorder, 0 0 0 3px $colors$popoverBorderFocus",
    },
})

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
    ({ children, styles, content, trigger }, ref) => (
        <PopoverPrimitive.Root>
            <StyledTrigger css={{...styles.trigger}} {...trigger} />
            <PopoverPrimitive.Portal>
                <StyledContent
                    ref={ref}
                    align={content.align}
                    sideOffset={content.sideOffset}
                    css={{...styles.root}}
                >
                    {children}
                </StyledContent>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    )
)

export default Popover
