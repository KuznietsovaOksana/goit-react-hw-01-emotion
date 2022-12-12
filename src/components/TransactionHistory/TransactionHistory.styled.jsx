import styled from '@emotion/styled';

export const Table = styled.table`
  color: black;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const TableHeader = styled.th`
  text-transform: uppercase;
  background-color: #164f56;
  color: #ffffff;
  text-align: left;
  padding: 5px 15px;
`;

export const TableData = styled.td`
  padding: 5px 15px;
`;

const setBgColor = props => {
  if (props.paymentType === 'payment') {
    return '#4dbcbc';
  }
  if (props.paymentType === 'invoice') {
    return '#a7c888';
  }
  if (props.paymentType === 'deposit') {
    return '#42e6af';
  }
  if (props.paymentType === 'withdrawal') {
    return '#deb179';
  }
};

export const Payment = styled.tr`
  background-color: ${setBgColor};
`;

// (type === 'payment' && css.payment) ||
// (type === 'invoice' && css.invoice) ||
//  (type === 'deposit' && css.deposit) ||
//  (type === 'withdrawal' && css.withdrawal)
