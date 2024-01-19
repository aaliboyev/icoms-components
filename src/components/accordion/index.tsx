import React from 'react';
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


// Accordion Root
const StyledAccordionRoot = styled(Root, {});
export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement> & {
    styles?: {
        root: CSSProperties;
    };
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((
    { children, styles, ...rest },
    forwardedRef
) => (
    <StyledAccordionRoot ref={forwardedRef} css={{...styles?.root}} {...rest}>
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
export type ItemProps = AccordionItemProps & {
    styles?: {
        root: CSSProperties;
    };
}

export const AccordionItem = React.forwardRef<HTMLDivElement, ItemProps>((
    {children, styles, ...rest},
    forwardedRef
) => (
    <StyledItem css={{...styles?.root}} ref={forwardedRef} {...rest}>
        {children}
    </StyledItem>
))

// Accordion Trigger
const StyledHeader = styled(Header, {
    all: 'unset',
    display: 'flex',
});
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
const StyledChevron = styled(ChevronDownIcon, {
    color: violet.violet10,
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    '[data-state=open] &': { transform: 'rotate(180deg)' },
});

export type TriggerProps = AccordionTriggerProps & {
    styles?: {
        root: CSSProperties;
        trigger: CSSProperties;
        header: CSSProperties;
    }
}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>((
    { children, styles, ...rest },
    forwardedRef
) => (
    <StyledHeader css={{...styles?.header}}>
        <StyledTrigger css={{...styles?.root}} {...rest} ref={forwardedRef}>
            {children}
            <StyledChevron css={{...styles?.trigger}} aria-hidden />
        </StyledTrigger>
    </StyledHeader>
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
export type ContentProps = AccordionContentProps & {
    styles?: {
        root: CSSProperties;
    };
}

export const AccordionContent = React.forwardRef<HTMLDivElement, ContentProps>((
    { children, styles, ...rest },
    forwardedRef
) => (
    <StyledContent css={{...styles?.root}} {...rest} ref={forwardedRef}>
        {children}
    </StyledContent>
));
