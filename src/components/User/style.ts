import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.green};
  border: 2px solid #2f3640;
  border-radius: 10px;
  color: #4a5568;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0rem 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const Image = styled.img`
  margin-top: 50px;
  width: 30%;
  border-radius: 50%;
  margin: auto;
`;
export const Input = styled.input`
  background-color: #dcdde1;
  border: 2px solid #2f3640;
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-width: 450px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.colors.gray};
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
  color: ${(props) => props.theme.colors.green};
`;

export const Followers = styled.p`
  color: #fdfdfd;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
