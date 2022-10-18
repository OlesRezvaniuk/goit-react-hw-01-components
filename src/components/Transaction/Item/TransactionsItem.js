import PropTypes from 'prop-types';

import { Tr, Td } from '../Transactions.styled';

const Transactions = ({ type, amount, currency }) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

export default Transactions;

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
