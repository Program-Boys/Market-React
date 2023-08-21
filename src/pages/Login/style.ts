import { Box } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h3 {
    color: var(--default-white);
  }
`;

export const MuiBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 30px;
  width: 500px;
  border-radius: 10px;
  background-color: var(--default-blue);
`;
