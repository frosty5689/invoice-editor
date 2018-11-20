import React from 'react';
import { connect } from 'react-redux';
import { addLineItem } from '../redux/actions';

export class AddInvoiceItem extends React.Component {
  handleAddInvoiceItem() {
    this.props.addLineItem({name: '', quantity: 1, price: 0.00});
  };

  render() {
    return (
      <button onClick={() => this.handleAddInvoiceItem()}>New Item</button>
    );
  }
}

export default connect(
  null,
  { addLineItem }
)(AddInvoiceItem);