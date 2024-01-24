import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";


const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: "#444",
    height: "1px",
    width: "100%",
})
const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & CSSProps
>(
    (
        { css, orientation = "horizontal", decorative = true, ...props },
        ref
    ) => (
        <StyledSeparator
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            css={{
                "&[data-orientation='horizontal']": {
                    margin: "0 0 10px 0",
                },
                "&[data-orientation='vertical']": {
                    margin: "0 10px 0 0",
                },
                ...css
            }}
            {...props}
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export default Separator

