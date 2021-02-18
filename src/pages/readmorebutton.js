import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    width: 1220px;
    height: 108px;
    background: black;
    color: white;
    font-size: 24px;
    border-radius: 6px;
    border: none;
    text-decoration-line: underline;
`;

const ReadMore = () =>(
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
    <StyledButton>See all 4 projects</StyledButton>
    </div>
)

export default ReadMore