import React from 'react';
import { connect } from 'react-redux';
import { deleteLineItem, updateLineItem } from '../redux/actions';
import { CURRENCY_DECIMAL_PLACES } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import '../css/InvoiceItem.css';

export class InvoiceItem extends React.Component {
  render() {
    const item = this.props.item;
    const content = item.content;

    return (
      <tr className="Invoice-item">
        <td><FormControl name="name" type="text" value={content.name} onChange={(e) => this.handleItemChange(e, item)} /></td>
        <td><FormControl name="quantity" type="number" min="1" value={content.quantity} onChange={(e) => this.handleItemChange(e, item)} /></td>
        <td>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormControl name="price" type="number" min="0.01" step="0.01" value={this.toCurrency(content.price)} onChange={(e) => this.handleItemChange(e, item)} />
          </InputGroup>
        </td>
        <td>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormControl readOnly type="number" min="0.01" step="0.01" value={ this.toCurrency(content.price * content.quantity) } />
          </InputGroup>
        </td>
        <td><button className="Invoice-delete-item" onClick={() => this.props.deleteLineItem(item.id)}><FontAwesomeIcon icon={faTrash} size="2x" /></button></td>
      </tr>
    );
  }

  handleItemChange(event, item) {
    const target = event.target;
    const name = target.name;
    const newValue = target.type === "number" ? Number(target.value) : target.value;
    const id = item.id;
    const content = Object.assign({}, item.content);
    content[name] = newValue;
    this.props.updateLineItem(id, content);
  }

  toCurrency(number) {
    return number.toFixed(CURRENCY_DECIMAL_PLACES);
  }
}

export default connect(
  null,
  { deleteLineItem, updateLineItem }
)(InvoiceItem);