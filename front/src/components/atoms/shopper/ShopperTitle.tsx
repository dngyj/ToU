// ShopperTitle Component
import React from 'react';
import { styled } from 'styled-components';

// Define a type for the component's props
type ShopperTitleProps = {
  title: string; // Declare that a title prop of type string is expected
};

// Use the type in your component definition
const ShopperTitle: React.FC<ShopperTitleProps> = ({ title }) => {
    return (
        <StyledContainer>
            {title}
        </StyledContainer>
    );
};

export default ShopperTitle;

const StyledContainer = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 20px;
`;
