import * as React from "react"
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";

export type StyleProps = {
    "action"?: "link" | "email" | "phone"
    "href"?: string
    "target"?: "_blank" | "_self" | "_parent" | "_top"
    "email"?: string
    "phone"?: string
} & CSSProps

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps

const StyledAnchor = styled('a', {});

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
    ({children, css, action="link", href="#", ...rest}, ref) => {
        let anchor = {href, target: rest.target}
        if (action === "email" && "email" in rest) anchor.href = `mailto:${rest.email}`
        if (action === "phone" && "phone" in rest) anchor.href = `tel:${rest.phone}`

        return (
            <StyledAnchor
                ref={ref as React.Ref<HTMLAnchorElement>}
                css={css}
                {...rest}
                {...anchor}
            >{children}</StyledAnchor>
        )
    }
)

Anchor.displayName = "Anchor"
export default Anchor
