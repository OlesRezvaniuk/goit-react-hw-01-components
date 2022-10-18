// import Statistics from './statistics';
import TransactionsItem from './Item/TransactionsItem';
import { Table, TableHead, TableR, TableH, TBody } from './transactions.styled';

export const Transactions = ({ transData }) => {
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
        {transData.map(trans => (
          <TransactionsItem
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
