import { Table,TableRow,TableData, } from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) =>{
    return (
        <Table>
  <thead>
    <TableRow>
      <TableData>Type</TableData>
      <TableData>Amount</TableData>
      <TableData>Currency</TableData>
    </TableRow>
  </thead>
{items.map(item => (
  <tbody key = {item.id}>
    <TableRow>
      <TableData>{item.type}</TableData>
      <TableData>{item.amount}</TableData>
      <TableData>{item.currency}</TableData>
    </TableRow>
  </tbody>
  ))}

</Table>
    )
}


 