import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableData,
  Payment,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Payment key={id} paymentType={type}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </Payment>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
