import PropTypes from 'prop-types';
import css from 'components/transaction/transaction.module.css'

function TransactionHistoryList({ transactions }) {    
    return (
        <tbody className={css.table}>
            {transactions.map(transaction =>
            (<tr key={transaction.id} >
                <td className={css.table_data}>{transaction.type}</td>
                <td className={css.table_data}>{transaction.amount}</td>
                <td className={css.table_data}>{transaction.currency}</td>
            </tr>))}
        </tbody>
    )
}
TransactionHistoryList.propTypes = {
  type: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.string,  
  }
export default TransactionHistoryList;
