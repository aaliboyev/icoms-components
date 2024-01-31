import {
    Root,
    Trigger,
    Sub,
    Item,
    List,
    Content,
    Link,
    Indicator,
    Viewport,
    NavigationMenuItemProps,
    NavigationMenuTriggerProps,
    NavigationMenuLinkProps,
    NavigationMenuContentProps,
    NavigationMenuIndicatorProps, NavigationMenuViewportProps, NavigationMenuSubProps
} from '@radix-ui/react-navigation-menu';
import {keyframes, styled} from "@stitches/react";
import {blackA, violet} from "@radix-ui/colors";
import React from "react";
import {NavigationMenuListProps, NavigationMenuProps} from "@radix-ui/react-navigation-menu/dist";
import {CSSProps} from "../../types";


const enterFromRight = keyframes({
    from: { transform: 'translateX(200px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
    from: { transform: 'translateX(-200px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
    from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
    to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
    from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
    to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});

const fadeOut = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
});

const StyledRoot = styled(Root, {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
});

const Nav = React.forwardRef<HTMLElement, NavigationMenuProps & React.HTMLAttributes<HTMLElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return <StyledRoot ref={ref} css={css} {...rest}>
        {children}
    </StyledRoot>
})

const StyledList = styled(List, {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 6,
    listStyle: 'none',
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    margin: 0,
});

const NavList = React.forwardRef<HTMLUListElement, NavigationMenuListProps & React.HTMLAttributes<HTMLUListElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {

    return <StyledList css={css} ref={ref} {...rest}>
        {children}
    </StyledList>
})

const itemStyles = {
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 15,
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
    '&:hover': { backgroundColor: violet.violet3 },
};

const StyledItem = styled(Item, {})
const NavItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps & React.HTMLAttributes<HTMLLIElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return (<StyledItem css={css} ref={ref} {...rest}>{children}</StyledItem>)
})

const StyledTrigger = styled(Trigger, {
    all: 'unset',
    ...itemStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});
const NavTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps & React.HTMLAttributes<HTMLButtonElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return <StyledTrigger css={css} ref={ref} {...rest}>{children}</StyledTrigger>
})

const StyledLink = styled(Link, {
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    fontSize: 15,
    lineHeight: 1,
});
const NavLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps & React.HTMLAttributes<HTMLAnchorElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return <StyledLink css={css} ref={ref} {...rest}>{children}</StyledLink>
})

const StyledContent = styled(Content, {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    width: '100%',
    '@media only screen and (min-width: 600px)': { width: 'auto' },
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
});
const NavContent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps & React.HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return <StyledContent css={css} ref={ref} {...rest}>{children}</StyledContent>
})

const StyledIndicator = styled(Indicator, {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 10,
    top: '100%',
    overflow: 'hidden',
    zIndex: 1,
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

const NavIndicator = React.forwardRef<HTMLDivElement, NavigationMenuIndicatorProps & React.HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return <StyledIndicator css={css} ref={ref} {...rest}>{children}</StyledIndicator>
})

const StyledViewport = styled(Viewport, {
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: 10,
    width: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 'var(--radix-navigation-menu-viewport-height)',
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
    '@media only screen and (min-width: 600px)': {
        width: 'var(--radix-navigation-menu-viewport-width)',
    },
});
const NavViewport = React.forwardRef<HTMLDivElement, NavigationMenuViewportProps & React.HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({css, ...rest}, ref) => {
    return <StyledViewport css={css} ref={ref} {...rest} />
})

const StyledNavSubmenu = styled(Sub, {})
const NavSubmenu = React.forwardRef<HTMLDivElement, NavigationMenuSubProps & React.HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
    return <StyledNavSubmenu css={css} ref={ref} {...rest}>{children}</StyledNavSubmenu>
})

export {
    Nav, NavLink, NavContent, NavViewport, NavList, NavItem, NavTrigger, NavIndicator, NavSubmenu
}
