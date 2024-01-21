import * as React from "react"
import {styled} from "@stitches/react";

export type StyleProps = {
    styles?: {
        root: Record<string, any>
    }
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & StyleProps

const StyledButton = styled('button', {});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, styles, ...rest }, ref) => {
        return (
            <StyledButton
                ref={ref}
                css={{...styles?.root}}
                {...rest}
            >{children}</StyledButton>
        )
    }
)

Button.displayName = "Button"
export default Button
