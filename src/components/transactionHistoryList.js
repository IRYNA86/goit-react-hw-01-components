import TransactionHistory from './transactionHistory';

function TransactionHistoryList({ transactions }) {
    return (
        <tbody>

{transactions.map(
                transaction => (
        <tr
 key={transaction.id} >
<td><TransactionHistory
type={transaction.type}
amount={transaction.amount}
currency={transaction.currency}
/>
            </td>
            </tr>
)
)
}
            
            </tbody>
)
    
}
export default TransactionHistoryList;
