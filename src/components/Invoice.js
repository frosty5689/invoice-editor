import React from 'react';

import InvoiceItem from './InvoiceItem';
import InvoiceSummary from './InvoiceSummary';

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

  handleItemDelete(index) {
    const items = this.state.items.slice();
    items.splice(index, 1);

    this.setState({
      items: items
    });
  }

  handleItemAdd() {
    const items = this.state.items.slice().concat([{name: '', quantity: 1, price: 0.00}]);
    this.setState({
      items: items
    });
  }

  render() {
    const items = this.state.items;
    const lineItems = items.map((item, index) => {
      return (
        <InvoiceItem key={index} item={item} onItemChange={(e) => this.handleItemChange(e, index)} onItemDelete={() => this.handleItemDelete(index)} />
      );
    });

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
              <td><button onClick={() => this.handleItemAdd()}>New Item</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <InvoiceSummary items={items} />
      </div>
    );
  }
}

export default Invoice;