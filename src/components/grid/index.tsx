import React from 'react';
import styled from 'styled-components';

// Types
interface GridRowProps {
    children: React.ReactNode;
}

interface GridColumnProps {
    children: React.ReactNode;
}

interface GridItemProps {
    children: React.ReactNode;
}

// Styled Components
const StyledGridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledGridColumn = styled.div`
  flex: 1;
  min-width: 0; /* Allow columns to shrink beyond their content width */
`;

const StyledGridItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0; /* Allow items to shrink beyond their content width */
`;

// Components
const GridRow: React.FC<GridRowProps> = ({ children }) => (
    <StyledGridRow>{children}</StyledGridRow>
);

const GridColumn: React.FC<GridColumnProps> = ({ children }) => (
    <StyledGridColumn>{children}</StyledGridColumn>
);

const GridItem: React.FC<GridItemProps> = ({ children }) => (
    <StyledGridItem>{children}</StyledGridItem>
);

export { GridRow, GridColumn, GridItem };