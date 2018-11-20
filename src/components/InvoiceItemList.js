import React from 'react';
import { connect } from 'react-redux';
import InvoiceItem from './InvoiceItem';
import AddInvoiceItem from './AddInvoiceItem';
import { getLineItems } from '../redux/selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import '../css/InvoiceItemList.css';

export const InvoiceItemList = ({ lineItems }) => {
  const invoiceItems = lineItems && lineItems.length ? lineItems.map((item, index) => {
    return (
      <CSSTransition
        classNames="InvoiceItemList-fade"
        timeout={400}
        key={item.id}>
        <InvoiceItem item={item} />
      </CSSTransition>
    );
  }) : null;

  return (

    <TransitionGroup
      className="InvoiceItemList-group"
      component="tbody">

      {invoiceItems}

      <CSSTransition classNames="InvoiceItemList-fade" timeout={400}>
        <tr>
          <td><AddInvoiceItem /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </CSSTransition>
    </TransitionGroup>
  );
}

const mapStateToProps = state => {
  const lineItems = getLineItems(state);
  return {lineItems};
}

export default connect(mapStateToProps)(InvoiceItemList);