import React from 'react';
import { InvoiceItem } from './InvoiceItem';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('InvoiceItem component', () => {

  it('InvoiceItem should render correctly', () => {
    const item = {
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }
    const component = renderer.create(
      <InvoiceItem key={item.id} item={item} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('InvoiceItem delete calls deleteLineItemFn', () => {
    const item = {
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }

    const mockDeleteLineItemFn = jest.fn();
    const component = shallow(
      <InvoiceItem key={item.id} item={item} deleteLineItem={mockDeleteLineItemFn} />,
    );

    component.find('button').simulate('click');
    expect(mockDeleteLineItemFn.mock.calls.length).toBe(1);
    expect(mockDeleteLineItemFn.mock.calls[0][0]).toBe(item.id);
  });

  it('InvoiceItem changing name calls updateLineItemFn', () => {
    const item = {
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }

    const event = { target: { name: 'name', value: 'Cogs' } };

    const mockUpdateLineItemFn = jest.fn();
    const component = shallow(
      <InvoiceItem key={item.id} item={item} updateLineItem={mockUpdateLineItemFn} />,
    );

    component.find('[name="name"]').simulate('change', event);

    expect(mockUpdateLineItemFn.mock.calls.length).toBe(1);
    expect(mockUpdateLineItemFn.mock.calls[0][0]).toBe(item.id);
    expect(mockUpdateLineItemFn.mock.calls[0][1].name).toBe(event.target.value);
  });

  it('InvoiceItem changing quantity calls updateLineItemFn', () => {
    const item = {
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }

    const event = { target: { name: 'quantity', value: 4 } };

    const mockUpdateLineItemFn = jest.fn();
    const component = shallow(
      <InvoiceItem key={item.id} item={item} updateLineItem={mockUpdateLineItemFn} />,
    );

    component.find('[name="quantity"]').simulate('change', event);

    expect(mockUpdateLineItemFn.mock.calls.length).toBe(1);
    expect(mockUpdateLineItemFn.mock.calls[0][0]).toBe(item.id);
    expect(mockUpdateLineItemFn.mock.calls[0][1].quantity).toBe(event.target.value);
  });

  it('InvoiceItem changing price calls updateLineItemFn', () => {
    const item = {
      id: 1,
      content: {
        name: 'Widget',
        quantity: 2,
        price: 10.22
      }
    }

    const event = { target: { name: 'price', value: 6.22 } };

    const mockUpdateLineItemFn = jest.fn();
    const component = shallow(
      <InvoiceItem key={item.id} item={item} updateLineItem={mockUpdateLineItemFn} />,
    );

    component.find('[name="price"]').simulate('change', event);

    expect(mockUpdateLineItemFn.mock.calls.length).toBe(1);
    expect(mockUpdateLineItemFn.mock.calls[0][0]).toBe(item.id);
    expect(mockUpdateLineItemFn.mock.calls[0][1].price).toBe(event.target.value);
  });

  it('InvoiceItem toCurrency should return two decimal places', () => {
    const currency = InvoiceItem.prototype.toCurrency(100);
    expect(currency).toBe('100.00');
  });
});