import React from 'react';
import { Content, Close, Root, Trigger, Overlay, Portal,
    DialogTriggerProps, DialogOverlayProps, DialogContentProps, DialogCloseProps } from '@radix-ui/react-dialog';
import {styled, keyframes} from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';
import {CSSProps} from "../../types";

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});
const StyledDialogOverlay = styled(Overlay, {
    backgroundColor: blackA.blackA6,
    position: 'fixed',
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const StyledDialogTrigger = styled(Trigger, {
    all: 'unset',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    width: 30,
    height: 30,
    color: violet.violet11,
    '&:hover': { backgroundColor: violet.violet3 },
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});
const StyledDialogContent = styled(Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: 25,
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' },
});

const StyledDialogClose = styled(Close, {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    position: 'absolute',
    top: 10,
    right: 10,

    '&:hover': { backgroundColor: violet.violet4 },
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps & CSSProps>(
    ({css, ...props}, forwardedRef) => (
        <StyledDialogOverlay css={css} ref={forwardedRef} {...props} />
    )
);

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps & CSSProps>(
    ({children, css, asChild, ...props}, forwardedRef) => (
        <StyledDialogTrigger asChild={asChild} css={css} ref={forwardedRef} {...props}>
            {asChild && children ? children : "Open"}
        </StyledDialogTrigger>
    )
);

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps & CSSProps>(
    ({children, css, ...props}, forwardedRef) => (
        <StyledDialogContent ref={forwardedRef} css={css} {...props}>
            {children}
        </StyledDialogContent>
    )
);

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps & CSSProps>(
    ({children, css, asChild, ...props}, forwardedRef) => (
        <StyledDialogClose asChild={asChild} css={css} ref={forwardedRef} {...props}>
            {asChild && children ? children : <Cross2Icon />}
        </StyledDialogClose>
    )
);

const Dialog = Root
const DialogPortal = Portal

export { Dialog, DialogPortal, DialogTrigger, DialogOverlay, DialogContent, DialogClose }
