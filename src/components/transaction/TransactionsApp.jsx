// import Statistics from './statistics';
import Transactions from './transactions';
import trans from './transactions.json';
import { Table, TableHead, TableR, TableH, TBody } from './transactions.styled';

export const TransactionsApp = () => {
  return (
    <Table>
      <TableHead>
        <TableR>
          <TableH style={{ borderTopLeftRadius: '4px' }}>Type</TableH>
          <TableH>Amount</TableH>
          <TableH style={{ borderTopRightRadius: '4px' }}>Currency</TableH>
        </TableR>
      </TableHead>

      <TBody>
        {trans.map(trans => (
          <Transactions
            key={trans.id}
            type={trans.type}
            amount={trans.amount}
            currency={trans.currency}
          />
        ))}
      </TBody>
    </Table>
  );
};
