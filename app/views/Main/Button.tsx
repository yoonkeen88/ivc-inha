import styled from "styled-components";

const FirstStyledSweetPotato = styled.button`
    background-color: purple;
    border: none;
    padding: 0;
    cursor: pointer;
`

const CustomButton = () => {
    return (
        <FirstStyledSweetPotato>
            Custom Button
        </FirstStyledSweetPotato>
    );
};

export default CustomButton;
