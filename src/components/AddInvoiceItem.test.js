import React from 'react';
import { AddInvoiceItem } from './AddInvoiceItem';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('InvoiceItem component', () => {

  it('AddInvoiceItem should render correctly', () => {
    const component = renderer.create(
      <AddInvoiceItem />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('AddInvoiceItem add calls addLineItemFn', () => {

    //addLineItem
    const mockAddLineItemFn = jest.fn();
    const component = shallow(
      <AddInvoiceItem addLineItem={mockAddLineItemFn}/>,
    );

    component.find('button').simulate('click');
    expect(mockAddLineItemFn.mock.calls.length).toBe(1);
    expect(mockAddLineItemFn.mock.calls[0][0].name).toBe('');
    expect(mockAddLineItemFn.mock.calls[0][0].quantity).toBe(1);
    expect(mockAddLineItemFn.mock.calls[0][0].price).toBe(0.00);
  });
});