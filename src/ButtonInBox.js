import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledBox = styled.div`
  align-items: center;
  background-color: ${props => props.theme.palette.background.default};
  border-radius: 4px;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 400px;
`;

export default function ButtonInBox() {
  return (
    <StyledBox>
      <Button variant="contained" color="primary">
        Material Button
      </Button>
    </StyledBox>
  );
}
