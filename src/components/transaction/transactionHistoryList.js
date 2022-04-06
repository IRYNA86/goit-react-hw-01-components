import PropTypes from 'prop-types';
import css from 'components/transaction/transaction.module.css'

function TransactionHistoryList({ transactions }) {    
    return (
        <table className={css.transaction_history}>
        <thead className={css.table}>
                <tr>
                    <th className={css.table_header}>Type </th>
                    <th className={css.table_header}>Amount </th>
                    <th className={css.table_header}>Currency</th>
                </tr>
            </thead>
        <tbody className={css.table}>
            {transactions.map(transaction =>
            (<tr key={transaction.id} >
                <td className={css.table_data}>{transaction.type}</td>
                <td className={css.table_data}>{transaction.amount}</td>
                <td className={css.table_data}>{transaction.currency}</td>
            </tr>))}
            </tbody>
            </table>
    )
}
TransactionHistoryList.propTypes = {
    transactions: PropTypes.array
    }

export default TransactionHistoryList;
