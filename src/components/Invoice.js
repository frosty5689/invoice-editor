import React from 'react';
import '../css/Invoice.css';

class Invoice extends React.Component {
  constructor(props) {
    super(props);

    const items = [{
      name: 'Widget',
      quantity: 2,
      price: 10.00,
    }, {
      name: 'Cog',
      quantity: 3,
      price: 21.00,
    }];

    this.state = {
      items: items,
    }
  }

  handleItemChange(event, index) {
    const target = event.target;
    const name = target.name;
    const items = this.state.items.slice();
    let item = items[index];
    const newValue = target.type === "number" ? Number(target.value) : target.value;
    item[name] = newValue;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(index) {
    const items = this.state.items.slice();
    items.splice(index, 1);

    this.setState({
      items: items
    });
  }

  handleItemAdded() {
    const items = this.state.items.slice().concat([{name: '', quantity: 1, price: 0.00}]);
    this.setState({
      items: items
    });
  }
  render() {
    const items = this.state.items;
    const lineItems = items.map((item, index) => {
      return (
        <tr key={index} className="Invoice-item">
          <td><input name="name" type="text" value={item.name} onChange={(e) => this.handleItemChange(e, index)}></input></td>
          <td><input name="quantity" type="number" min="1" value={item.quantity} onChange={(e) => this.handleItemChange(e, index)}></input></td>
          <td>$<input name="price" type="number" min="0.01" step="0.01" value={toCurrency(item.price)} onChange={(e) => this.handleItemChange(e, index)}></input></td>
          <td>${toCurrency(item.price * item.quantity)}</td>
          <td><button onClick={() => this.handleItemDeleted(index)}>x</button></td>
        </tr>
      );
    });
    const subtotal = getSubtotal(items);
    const tax = getTax(subtotal);
    const total = subtotal + tax;
    return (
      <div className="Invoice">
        <table>
          <thead>
            <tr className="Invoice-head">
              <td>Item</td>
              <td>Qty</td>
              <td>Price</td>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {lineItems}
            <tr>
              <td><button onClick={() => this.handleItemAdded()}>New Item</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
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
      </div>
    );
  }
}

function getSubtotal(items) {
  const subtotal = items.reduce((sum, item) => {return sum + item.price * item.quantity}, 0);
  return subtotal;
}

function getTax(amount) {
  return amount * 0.05;
}

function toCurrency(number) {
  return number.toFixed(2);
}


export default Invoice;