import React from 'react';
import { connect } from 'react-redux';
import { addLineItem } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import '../css/AddInvoiceItem.css';

export class AddInvoiceItem extends React.Component {
  handleAddInvoiceItem() {
    this.props.addLineItem({name: '', quantity: 1, price: 0.00});
  };

  render() {
    return (
      <button className="Invoice-add-item" onClick={() => this.handleAddInvoiceItem()}><FontAwesomeIcon icon={faPlusSquare} size="2x" /></button>
    );
  }
}

export default connect(
  null,
  { addLineItem }
)(AddInvoiceItem);