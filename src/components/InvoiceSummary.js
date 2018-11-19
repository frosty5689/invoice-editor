import React from 'react';
import { connect } from 'react-redux';
import { getLineItems } from '../redux/selectors';

import '../css/InvoiceSummary.css';

const InvoiceSummary = ({ lineItems }) => {
  const subtotal = getSubtotal(lineItems);
  const tax = getTax(subtotal);
  const total = subtotal + tax;

  return (
    <div className="Invoice-summary">
      <div>
        <div className="Invoice-summary-detail">
          <span>Subtotal</span>
          <span>&emsp;&emsp;</span>
          <span>${toCurrency(subtotal)}</span>
        </div>
        <div className="Invoice-summary-detail">
          <span>Tax (5%)</span>
          <span>&emsp;&emsp;</span>
          <span>${toCurrency(tax)}</span>
        </div>
        <div className="Invoice-summary-detail Invoice-summary-detail-total">
          <span>Total</span>
          <span>&emsp;&emsp;</span>
          <span>${toCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}

function getSubtotal(items) {
  const subtotal = items.reduce((sum, item) => { return sum + item.content.price * item.content.quantity }, 0);
  return subtotal;
}

function getTax(amount) {
  return amount * 0.05;
}

function toCurrency(number) {
  return number.toFixed(2);
}

const mapStateToProps = state => {
  const lineItems = getLineItems(state);
  return { lineItems };
}

export default connect(mapStateToProps)(InvoiceSummary);