import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.li`
  background: #555;
  border: 2px solid #333;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  width: 80%;
  min-width: 440px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
`;

export const CommitsLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.green};
  }
  &:active {
    color: ${(props) => props.theme.colors.green};
  }
`;
