import React from 'react';
import {Trigger, Content, Root, List, TabsProps as TabsPropsOriginal, TabsListProps} from '@radix-ui/react-tabs';
import { styled } from '@stitches/react';
import { violet, mauve, blackA, green } from '@radix-ui/colors';

const StyledTabs = styled(Root, {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    boxShadow: `0 2px 10px ${blackA.blackA2}`,
});

type TabsProps = TabsPropsOriginal & {
    styles: {
        root?: React.CSSProperties;
        list?: React.CSSProperties;
        trigger?: React.CSSProperties;
        content?: React.CSSProperties;
    }
};

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({styles, children}, forwardedRef) => (
    <StyledTabs
        css={{...styles.root}}
        ref={forwardedRef}
    >
        {children}
    </StyledTabs>
));


const StyledTabsList = styled(List, {
    flexShrink: 0,
    display: 'flex',
    borderBottom: `1px solid ${mauve.mauve6}`,
});

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({children, style, ...props}, forwardedRef) => (
    <StyledTabsList
        css={{...style}}
        ref={forwardedRef}
        {...props}
    >
        {children}
    </StyledTabsList>
));

const StyledTabsTrigger = styled(Trigger, {
    all: 'unset',
    fontFamily: 'inherit',
    backgroundColor: 'white',
    padding: '0 20px',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    lineHeight: 1,
    color: mauve.mauve11,
    userSelect: 'none',
    '&:first-child': { borderTopLeftRadius: 6 },
    '&:last-child': { borderTopRightRadius: 6 },
    '&:hover': { color: violet.violet11 },
    '&[data-state="active"]': {
        color: violet.violet11,
        boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
    '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});

const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof StyledTabsTrigger>>(
    ({children, style, ...props}, forwardedRef) => (
    <StyledTabsTrigger
        css={{...style}}
        ref={forwardedRef}
        {...props}
    >
        {children}
    </StyledTabsTrigger>
));

const StyledTabsContent = styled(Content, {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: 'none',
    '&:focus': { boxShadow: `0 0 0 2px black` },
});

const TabsContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof StyledTabsContent>>(
    ({children, style, ...props}, forwardedRef) => (
    <StyledTabsContent
        css={{...style}}
        ref={forwardedRef}
        {...props}
    >
        {children}
    </StyledTabsContent>
));


export {
    Tabs, TabsContent, TabsTrigger, TabsList
};
