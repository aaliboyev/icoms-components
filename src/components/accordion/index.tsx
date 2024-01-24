import React, {HTMLAttributes} from 'react';
import {
    Root,
    Content,
    Trigger,
    Header,
    Item,
    AccordionTriggerProps,
    AccordionContentProps, AccordionItemProps
} from '@radix-ui/react-accordion';
import {AccordionSingleProps, AccordionMultipleProps} from "@radix-ui/react-accordion";
import { styled, keyframes, CSSProperties } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {CSSProps} from "../../types";


// Accordion Root
const StyledAccordionRoot = styled(Root, {});
type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement> & CSSProps
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((
    { children, css, ...rest },
    forwardedRef
) => (
    <StyledAccordionRoot ref={forwardedRef} css={{css}} {...rest}>
        {children}
    </StyledAccordionRoot>
));


// Accordion Item
const StyledItem = styled(Item, {
    overflow: 'hidden',
    marginTop: 1,

    '&:first-child': {
        marginTop: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    '&:last-child': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },

    '&:focus-within': {
        position: 'relative',
        zIndex: 1,
        boxShadow: `0 0 0 2px ${mauve.mauve12}`,
    },
});
type ItemProps = AccordionItemProps & CSSProps

const AccordionItem = React.forwardRef<HTMLDivElement, ItemProps>((
    {children, css, ...rest},
    forwardedRef
) => (
    <StyledItem css={css} ref={forwardedRef} {...rest}>
        {children}
    </StyledItem>
))

// Accordion Trigger
const StyledHeader = styled(Header, {
    all: 'unset',
    display: 'flex',
});

const AccordionItemHeader = React.forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement> & CSSProps>(
    ({children, css, ...props}, ref)=>{

    return <StyledHeader ref={ref} css={css} {...props}>
        {children}
    </StyledHeader>
})


const StyledTrigger = styled(Trigger, {
    all: 'unset',
    fontFamily: 'inherit',
    padding: '0 20px',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 1px 0 ${mauve.mauve6}`,
    backgroundColor: 'white',
    '&:hover': { backgroundColor: mauve.mauve2 },
});

type TriggerProps = AccordionTriggerProps & CSSProps

const AccordionItemTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>((
    { children, css, ...rest },
    forwardedRef
) => (
    <StyledTrigger css={css} {...rest} ref={forwardedRef}>
        {children}
    </StyledTrigger>
));

// Accordion Content
const slideDown = keyframes({
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
});
const slideUp = keyframes({
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
});
const StyledContent = styled(Content, {
    overflow: 'hidden',
    fontSize: 15,
    color: mauve.mauve11,
    backgroundColor: mauve.mauve2,

    '&[data-state="open"]': {
        animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
        animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
});
type ContentProps = AccordionContentProps & CSSProps

const AccordionItemContent = React.forwardRef<HTMLDivElement, ContentProps>((
    { children, css, ...rest },
    forwardedRef
) => (
    <StyledContent css={css} {...rest} ref={forwardedRef}>
        {children}
    </StyledContent>
));

export {
    Accordion,
    AccordionItem,
    AccordionItemHeader,
    AccordionItemTrigger,
    AccordionItemContent
}