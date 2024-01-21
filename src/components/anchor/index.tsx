import * as React from "react"
import {styled} from "@stitches/react";

export type StyleProps = {
    styles?: {
        root: React.CSSProperties
    }
    "action"?: "link" | "email" | "phone"
    "href"?: string
    "target"?: "_blank" | "_self" | "_parent" | "_top"
    "email"?: string
    "phone"?: string
}

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps

const StyledAnchor = styled('a', {});

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
    ({children, styles, action="link", href="#", ...rest}, ref) => {
        let anchor = {href, target: rest.target}
        if (action === "email" && "email" in rest) anchor.href = `mailto:${rest.email}`
        if (action === "phone" && "phone" in rest) anchor.href = `tel:${rest.phone}`

        return (
            <StyledAnchor
                ref={ref as React.Ref<HTMLAnchorElement>}
                css={{...styles?.root}}
                {...rest}
                {...anchor}
            >{children}</StyledAnchor>
        )
    }
)

Anchor.displayName = "Anchor"
export default Anchor
