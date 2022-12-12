import styled from '@emotion/styled';

export const Box = styled.section`
  outline: 3px solid #130c98;
  border-radius: 5px;
  max-width: 500px;
  background: #e5e6dd;
  color: #130c98;
  margin: 0 auto 50px;
  transition: all 300ms ease 0s;

  &:hover,
  &:focus {
    background: #9ccfe0;
    color: #3b3b3b;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  padding: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  background-color: #868585;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 20%;
  padding: 10px;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Percentage = styled.span`
  font-weight: 700;
`;
