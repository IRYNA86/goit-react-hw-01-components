import PropTypes from 'prop-types';

export default function TransactionHistory(items) {
    const { type, amount, currency } = items
    return (
        <table class="transaction-history">
            {/* <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead> */}

            <tbody>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                {/* <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr> */}
            </tbody>
        </table>);
    
}
TransactionHistory.propTypes = {
  type: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.string,
  
  }