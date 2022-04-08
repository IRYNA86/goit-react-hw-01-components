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
            {transactions.map(({id, type, amount, currency}) =>
            (<tr key={id} >
                <td className={css.table_data}>{type}</td>
                <td className={css.table_data}>{amount}</td>
                <td className={css.table_data}>{currency}</td>
            </tr>))}
            </tbody>
            </table>
    )
}
TransactionHistoryList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
  }))
    }

export default TransactionHistoryList;
