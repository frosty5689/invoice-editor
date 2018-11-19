import React from 'react';

import '../css/InvoiceSummary.css';

function InvoiceSummary(props) {
  const items = props.items;
  const subtotal = getSubtotal(items);
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
  const subtotal = items.reduce((sum, item) => { return sum + item.price * item.quantity }, 0);
  return subtotal;
}

function getTax(amount) {
  return amount * 0.05;
}

function toCurrency(number) {
  return number.toFixed(2);
}

export default InvoiceSummary;