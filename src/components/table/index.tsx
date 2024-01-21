import * as React from "react"
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";

const StyledTable = styled("table", {
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: "0",
    captionSide: "bottom",
})

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement> & {css: CSSProps}
>(({ css, ...props }, ref) => (
    <StyledTable
        ref={ref}
        css={css}
        {...props}
    />
))
Table.displayName = "Table"


const StyledTableHeader = styled("thead", {
    borderBottom: "1px solid #E5E7EB",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
        backgroundColor: "rgba(229, 231, 235, 0.5)",
    },
})
const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement> & {css: CSSProps}
>(({ css, ...props }, ref) => (
    <StyledTableHeader ref={ref} css={css} {...props} />
))
TableHeader.displayName = "TableHeader"

const StyledTableBody = styled("tbody", {
    "&>tr": {
        borderBottom: "1px solid #E5E7EB",
        transition: "background-color 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "rgba(229, 231, 235, 0.5)",
        },
    },
})

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement> & {css: CSSProps}
>(({ css, ...props }, ref) => (
    <StyledTableBody
        ref={ref}
        css={css}
        {...props}
    />
))
TableBody.displayName = "TableBody"

const StyledTableFooter = styled("tfoot", {
    borderTop: "1px solid #E5E7EB",
    transition: "background-color 0.2s ease-in-out",
    fontWeight: "500",
    "&:hover": {
        backgroundColor: "rgba(229, 231, 235, 0.5)",
    },
})
const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement> & {css: CSSProps}
>(({ css, ...props }, ref) => (
    <StyledTableFooter
        ref={ref}
        css={css}
        {...props}
    />
))
TableFooter.displayName = "TableFooter"

const StyledTableRow = styled("tr", {
    borderBottom: "1px solid #E5E7EB",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
        backgroundColor: "rgba(229, 231, 235, 0.5)",
    },
})

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement> & {css: CSSProps}
>(({ css, ...props }, ref) => (
    <StyledTableRow
        ref={ref}
        css={css}
        {...props}
    />
))
TableRow.displayName = "TableRow"

const StyledTableHeaderCell = styled("th", {
    height: "3rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "500",
    color: "#9CA3AF",
})
const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement> & {css: CSSProps}
>(({ css, ...props }, ref) => (
    <StyledTableHeaderCell
        ref={ref}
        css={css}
        {...props}
    />
))
TableHead.displayName = "TableHead"

const StyledTableCell = styled("td", {
    padding: "1rem",
    textAlign: "left",
    verticalAlign: "middle"
})

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement> & {css: CSSProps}
>((props, ref) => (
    <td
        ref={ref}
        {...props}
    />
))

TableCell.displayName = "TableCell"

const StyledTableCaption = styled("caption", {
    marginTop: "2rem",
    fontSize: "0.875rem",
    color: "#9CA3AF",
})

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement> & CSSProps
>(({ ...props }, ref) => (
    <StyledTableCaption
        ref={ref}
        {...props}
    />
))
TableCaption.displayName = "TableCaption"

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
