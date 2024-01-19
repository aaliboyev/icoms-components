import * as React from "react"
import {styled} from "@stitches/react";

type link = {
    "action": "link"
    "href": string
    "target"?: "_blank" | "_self" | "_parent" | "_top"
}

type email = {
    "action": "email"
    "email": string
}

type phone = {
    "action": "phone"
    "phone": string
}

export type StyleProps = {
    styles?: {
        root: React.CSSProperties
    }
}

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps & (link | email | phone)

const StyledAnchor = styled('a', {});

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
    ({styles, action, ...rest}, ref) => {
        let anchor = {href: rest.href, target: rest.target}
        if (action === "email" && "email" in rest) anchor.href = `mailto:${rest.email}`
        if (action === "phone" && "phone" in rest) anchor.href = `tel:${rest.phone}`

        return (
            <StyledAnchor
                ref={ref as React.Ref<HTMLAnchorElement>}
                css={{...styles?.root}}
                {...rest}
                {...anchor}
            />
        )
    }
)

Anchor.displayName = "Anchor"
export default Anchor
