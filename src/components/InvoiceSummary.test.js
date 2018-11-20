import React from 'react';
import { InvoiceSummary } from './InvoiceSummary';
import renderer from 'react-test-renderer';

describe('InvoiceSummary component', () => {

  it('InvoiceSummary should render correctly', () => {
    const lineItems = [{
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }, {
      id: 2,
      content: {
        name: 'Cogs',
        quantity: 4,
        price: 2.22
      }
    }];

    const component = renderer.create(
      <InvoiceSummary lineItems={lineItems} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('InvoiceSummary getSubTotal should return correct subtotal', () => {
    const lineItems = [{
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }, {
      id: 2,
      content: {
        name: 'Cogs',
        quantity: 4,
        price: 2.22
      }
    }];
    const subtotal = InvoiceSummary.prototype.getSubtotal(lineItems);
    expect(subtotal).toBe(29.32);
  });

  it('InvoiceSummary getTax should return correct tax', () => {
    const tax = InvoiceSummary.prototype.getTax(100.00);
    expect(tax).toBe(5);
  });

  it('InvoiceSummary toCurrency should return two decimal places', () => {
    const currency = InvoiceSummary.prototype.toCurrency(100);
    expect(currency).toBe('100.00');
  });
});