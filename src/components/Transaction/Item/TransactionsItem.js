import PropTypes from 'prop-types';

import { Tr, Td } from '../Transactions.styled';

const Transactions = ({ id, type, amount, currency }) => {
  return (
    <Tr id={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

export default Transactions;

Transactions.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
