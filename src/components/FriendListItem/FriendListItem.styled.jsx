import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex: 1 1 33.333%;
  align-items: center;
  gap: 30px;
  overflow: hidden;
  border: 3px solid #130c98;
  background-color: #e5e6dd;
  color: #130c98;
  border-radius: 5px;
  padding: 10px;
  transition: all 300ms ease 0s;

  &:hover,
  &:focus {
    background-color: #9ccfe0;
    color: #3b3b3b;
  }
`;

export const Avatar = styled.img`
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 900;
  font-size: 24px;
`;

const setBgColor = props => (props.isOnline ? 'green' : 'red');

export const Online = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;
