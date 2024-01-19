import * as React from "react"
import {styled} from "@stitches/react";

export type StyleProps = {
    styles?: {
        root: Record<string, any>
    }
    "action": "button" | "submit" | "reset"
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & StyleProps

const StyledButton = styled('button', {});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ styles, action, ...rest }, ref) => {
        return (
            <StyledButton
                ref={ref as React.Ref<HTMLButtonElement>}
                css={{...styles?.root}}
                {...rest}
            />
        )
    }
)

Button.displayName = "Button"
export default Button
