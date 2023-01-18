import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.h3`
  text-align: center;
`;

export const TwoColumn = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 25px auto;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
  align-content: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  width: 100%;
  max-width: 250px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: lightgray;
  cursor: pointer;
  margin: auto;

  &:hover {
    background-color: #333;
    color: white;
  }

  & svg {
    height: 25px;
    width: 25px;
    margin-right: 10px;
  }
`;
