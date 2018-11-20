import React from 'react';
import { connect } from 'react-redux';
import InvoiceItem from './InvoiceItem';
import AddInvoiceItem from './AddInvoiceItem';
import { getLineItems } from '../redux/selectors';

export const InvoiceItemList = ({ lineItems }) => {
  const invoiceItems = lineItems && lineItems.length ? lineItems.map((item, index) => {
    return <InvoiceItem key={item.id} item={item} />;
  }) : null;

  return (
    <tbody>
      {invoiceItems}
      <tr>
        <td><AddInvoiceItem /></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const mapStateToProps = state => {
  const lineItems = getLineItems(state);
  return {lineItems};
}

export default connect(mapStateToProps)(InvoiceItemList);