import {
    Root,
    Menu,
    Trigger,
    Portal,
    Content,
    Item,
    Separator,
    Sub,
    SubContent,
    SubTrigger,
    Group,
    MenubarProps,
    MenubarGroupProps,
    MenubarTriggerProps, MenubarSubTriggerProps, MenubarSubContentProps
} from '@radix-ui/react-menubar';
import { styled } from '@stitches/react';
import { blackA, violet, mauve } from '@radix-ui/colors';
import {CSSProps} from "../../types";
import React from "react";
import {MenubarContentProps, MenubarItemProps} from "@radix-ui/react-menubar/dist";
// import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

const itemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 10px',
    position: 'relative',
    userSelect: 'none',

    '&[data-disabled]': {
        color: mauve.mauve8,
        pointerEvents: 'none',
    },

    '&[data-highlighted]': {
        backgroundImage: `linear-gradient(135deg, ${violet.violet9} 0%, ${violet.violet10} 100%)`,
        color: violet.violet1,
    },

    variants: {
        variant: {
            inset: {
                paddingLeft: 20,
            },
        },
    },
};
const contentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
};

const StyledRoot = styled(Root, {
    display: 'flex',
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 6,
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const Menubar = React.forwardRef<HTMLDivElement, MenubarProps & React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, ref) => {
        return <StyledRoot css={css} {...props} ref={ref}>
            {children}
        </StyledRoot>
})


const StyledGroup = styled(Group, {});
const MenubarGroup = React.forwardRef<HTMLDivElement, MenubarGroupProps & React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({css, children, ...rest}, ref) => {
        return <StyledGroup css={css} {...rest} ref={ref}>{children}</StyledGroup>
});

const StyledTrigger = styled(Trigger, {
    all: 'unset',
    padding: '8px 12px',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 13,
    color: violet.violet11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,

    '&[data-highlighted], &[data-state="open"]': {
        backgroundColor: violet.violet4,
    },
});
const MenubarTrigger = React.forwardRef<HTMLButtonElement, React.RefAttributes<HTMLButtonElement> & MenubarTriggerProps & CSSProps>(
    ({children, css, ...props}, forwardedRef) => {
        return <StyledTrigger css={css} {...props} ref={forwardedRef}>
            {children}
        </StyledTrigger>
    }
);

const StyledContent = styled(Content, contentStyles);

const MenubarContent = React.forwardRef<HTMLDivElement, MenubarContentProps & React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, forwardedRef) => {
        return <StyledContent css={css} {...props} ref={forwardedRef}>
            {children}
        </StyledContent>
    }
);

const StyledItem = styled(Item, itemStyles);

const MenubarItem = React.forwardRef<HTMLDivElement, MenubarItemProps & React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, forwardedRef) => {
        return <StyledItem css={css} {...props} ref={forwardedRef}>
            {children}
        </StyledItem>
    }
);

const StyledSeparator = styled(Separator, {
    height: 1,
    backgroundColor: violet.violet6,
    margin: 5,
});
const MenubarSeparator = React.forwardRef<HTMLDivElement, React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({css, ...props}, forwardedRef) => {
        return <StyledSeparator css={css} {...props} ref={forwardedRef} />
    }
);

const StyledSubTrigger = styled(SubTrigger, {
    '&[data-state="open"]': {
        backgroundColor: violet.violet4,
        color: violet.violet11,
    },
    ...itemStyles,
});
const MenubarSubTrigger = React.forwardRef<HTMLDivElement, MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, forwardedRef) => {
        return <StyledSubTrigger css={css} {...props} ref={forwardedRef}>{children}</StyledSubTrigger>
    }
);

const StyledSubContent = styled(SubContent, contentStyles);
const MenubarSubContent = React.forwardRef<HTMLDivElement, MenubarSubContentProps & React.RefAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, forwardedRef) => {
        return <StyledSubContent css={css} {...props} ref={forwardedRef}>{children}</StyledSubContent>
    }
);

const MenubarPortal = Portal;
const MenubarSub = Sub;
const MenubarMenu = Menu;

export {
    Menubar,
    MenubarPortal,
    MenubarGroup,
    MenubarTrigger,
    MenubarContent,
    MenubarSub,
    MenubarSubTrigger,
    MenubarSubContent,
    MenubarItem,
    MenubarSeparator,
    MenubarMenu
}
