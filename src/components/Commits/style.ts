import { Link } from "react-router-dom";
import styled from "styled-components";

export const CommitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-width: 450px;
  margin-left: auto;
  margin-right: auto;
  background-color: #2d3748;
`;

export const CommitH1 = styled.h1`
  color: #fdfdfd;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BackLink = styled(Link)`
  background: #07d962;
  border: 2px solid #2f3640;
  border-radius: 10px;
  color: #4a5568;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0rem 1.5rem;
  text-decoration: none;
`;

export const HeaderPage = styled.h1`
  margin-top: 10px;
  color: #ffffff;
  font-size: 50px;
`;

export const UserName = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 25px;
  color: #07d962;
`;

export const List = styled.li`
  background: #555;
  border: 2px solid #333;
  border-radius: 5px;
  color: #fdfdfd;
  font-size: 30px;
  width: 80%;
  min-width: 440px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
