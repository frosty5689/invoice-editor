import React from 'react';
import { InvoiceItemList } from './InvoiceItemList';
import renderer from 'react-test-renderer';

jest.mock('./AddInvoiceItem', () => {
  const AddInvoiceItemMock = () => <div />;
  return AddInvoiceItemMock;
});

describe('InvoiceItemList component', () => {

  it('InvoiceItemList should render correctly', () => {
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
      <InvoiceItemList lineItemss={lineItems} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});