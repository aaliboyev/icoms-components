import * as React from "react"
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";

export type StyleProps = CSSProps

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & StyleProps

const StyledButton = styled('button', {});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, css, ...rest }, ref) => {
        return (
            <StyledButton
                ref={ref}
                css={css}
                {...rest}
            >{children}</StyledButton>
        )
    }
)

Button.displayName = "Button"
export default Button
