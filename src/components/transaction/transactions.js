import PropTypes from 'prop-types';

import { Tr, Td } from './transactions.styled';

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
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
