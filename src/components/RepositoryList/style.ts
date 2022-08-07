import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.li`
  background: #2f3640;
  border: 2px solid #2f3640;
  border-radius: 3px;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: blue;
  font-size: larger;
`;
export const CommitsLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
