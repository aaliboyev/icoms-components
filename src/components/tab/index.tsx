import React from 'react';
import {
    Trigger,
    Content,
    Root,
    List,
    TabsProps,
    TabsListProps,
    TabsTriggerProps,
    TabsContentProps
} from '@radix-ui/react-tabs';
import { styled } from '@stitches/react';
import { violet, mauve } from '@radix-ui/colors';
import {CSSProps} from "../../types";

const StyledTabs = styled(Root, {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
});

const Tabs = React.forwardRef<HTMLDivElement, TabsProps & CSSProps>(
    ({css, children, ...rest}, forwardedRef) => (
    <StyledTabs
        css={css}
        ref={forwardedRef}
        {...rest}
    >
        {children}
    </StyledTabs>
));


const StyledTabsList = styled(List, {
    flexShrink: 0,
    display: 'flex',
    // borderBottom: `1px solid ${mauve.mauve6}`,
});

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps & CSSProps>(
    ({children, css, ...props}, forwardedRef) => (
    <StyledTabsList
        css={css}
        ref={forwardedRef}
        {...props}
    >
        {children}
    </StyledTabsList>
));

const StyledTabsTrigger = styled(Trigger, {
    fontFamily: 'inherit',
    padding: '0 20px',
    height: 45,
    flex: 1,
    fontSize: 15,
    lineHeight: 1,
    '&:first-child': { borderTopLeftRadius: 6 },
    '&:last-child': { borderTopRightRadius: 6 },
    '&:hover': { color: violet.violet11 },
    '&[data-state="active"]': {
        color: violet.violet11,
        boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
    '&:focus': {position: "relative"},
});

const TabsTrigger = React.forwardRef<HTMLButtonElement, React.RefAttributes<HTMLButtonElement> & TabsTriggerProps & CSSProps>(
    ({children, css, ...props}, forwardedRef) => (
    <StyledTabsTrigger
        css={css}
        ref={forwardedRef}
        {...props}
    >
        {children}
    </StyledTabsTrigger>
));

const StyledTabsContent = styled(Content, {
    flexGrow: 1,
    padding: 20,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
});

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps & CSSProps>(
    ({children, css, ...props}, forwardedRef) => (
    <StyledTabsContent
        css={css}
        ref={forwardedRef}
        {...props}
    >
        {children}
    </StyledTabsContent>
));


export {
    Tabs, TabsContent, TabsTrigger, TabsList
};
