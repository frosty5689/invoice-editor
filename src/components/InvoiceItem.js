import React from 'react';

function InvoiceItem(props) {
  const item = props.item;

  return (
    <tr className="Invoice-item">
      <td><input name="name" type="text" value={item.name} onChange={props.onItemChange}></input></td>
      <td><input name="quantity" type="number" min="1" value={item.quantity} onChange={props.onItemChange}></input></td>
      <td>$<input name="price" type="number" min="0.01" step="0.01" value={toCurrency(item.price)} onChange={props.onItemChange}></input></td>
      <td>${toCurrency(item.price * item.quantity)}</td>
      <td><button onClick={props.onItemDelete}>x</button></td>
    </tr>

  );
}

function toCurrency(number) {
  return number.toFixed(2);
}

export default InvoiceItem;