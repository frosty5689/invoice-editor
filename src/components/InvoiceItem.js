import React from 'react';
import { connect } from 'react-redux';
import { deleteLineItem, updateLineItem } from '../redux/actions';

class InvoiceItem extends React.Component {
  render() {
    const item = this.props.item;
    const content = item.content;

    return (
      <tr className="Invoice-item">
        <td><input name="name" type="text" value={content.name} onChange={(e) => this.handleItemChange(e, item)}></input></td>
        <td><input name="quantity" type="number" min="1" value={content.quantity} onChange={(e) => this.handleItemChange(e, item)}></input></td>
        <td>$<input name="price" type="number" min="0.01" step="0.01" value={toCurrency(content.price)} onChange={(e) => this.handleItemChange(e, item)}></input></td>
        <td>${toCurrency(content.price * content.quantity)}</td>
        <td><button onClick={() => this.props.deleteLineItem(item.id)}>x</button></td>
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
}



function toCurrency(number) {
  return number.toFixed(2);
}

export default connect(
  null,
  { deleteLineItem, updateLineItem }
)(InvoiceItem);