import React from 'react';


import InvoiceItemList from './InvoiceItemList';
import InvoiceSummary from './InvoiceSummary';

import '../css/Invoice.css';

class Invoice extends React.Component {
  render() {
    return (
      <div className="Invoice">
        <table>
          <thead>
            <tr className="Invoice-head">
              <td>Item</td>
              <td>Qty</td>
              <td>Price</td>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <InvoiceItemList />
        </table>

        <InvoiceSummary />
      </div>
    );
  }
}

export default Invoice;