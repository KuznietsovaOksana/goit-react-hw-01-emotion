import styled from '@emotion/styled';

export const Avatar = styled.img`
  max-width: 300px;
  max-height: 300px;
  transition: transform 300ms ease 0s;
  border-radius: 50%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const Name = styled.p`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 24px;
`;

export const Box = styled.div`
  border: 3px solid #130c98;
  border-radius: 5px;
  max-width: 300px;
  overflow: hidden;
  background-color: #e5e6dd;
  color: #130c98;
  margin: 0 auto 50px;
  transition: all 300ms ease 0s;

  &:hover,
  &:focus {
    background-color: #9ccfe0;
    color: #3b3b3b;
    {Decription} img {
      transform: scale(1.05);
    }
  }
`;

export const Tag = styled.p`
  cursor: pointer;
  font-weight: 700;
  color: #645ece;
  transition: color 300ms ease 0s;

  &:hover,
  &:focus {
    color: #241a1a;
  }
`;

export const Location = styled.p`
  font-weight: 700;
  color: #645ece;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex: 1 1 33.333%;
  padding: 10px;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
