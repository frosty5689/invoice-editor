import React from 'react';
import { connect } from 'react-redux';
import { getLineItems } from '../redux/selectors';
import { CURRENCY_DECIMAL_PLACES, TAX_PERCENTAGE } from '../constants';
import '../css/InvoiceSummary.css';

export class InvoiceSummary extends React.Component  {
  getSubtotal(items) {
    const subtotal = items.reduce((sum, item) => { return sum + item.content.price * item.content.quantity }, 0);
    return subtotal;
  }
  getTax(amount) {
    return amount * TAX_PERCENTAGE;
  }
  toCurrency(number) {
    return number.toFixed(CURRENCY_DECIMAL_PLACES);
  }
  render() {
    const lineItems = this.props.lineItems
    const subtotal = this.getSubtotal(lineItems);
    const tax = this.getTax(subtotal);
    const total = subtotal + tax;

    return (
      <div className="Invoice-summary">
        <div>
          <div className="Invoice-summary-detail">
            <span>Subtotal</span>
            <span>&emsp;&emsp;</span>
            <span>${this.toCurrency(subtotal)}</span>
          </div>
          <div className="Invoice-summary-detail">
            <span>Tax (5%)</span>
            <span>&emsp;&emsp;</span>
            <span>${this.toCurrency(tax)}</span>
          </div>
          <div className="Invoice-summary-detail Invoice-summary-detail-total">
            <span>Total</span>
            <span>&emsp;&emsp;</span>
            <span>${this.toCurrency(total)}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const lineItems = getLineItems(state);
  return { lineItems };
}

export default connect(mapStateToProps)(InvoiceSummary);