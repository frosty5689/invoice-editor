import React from 'react';
import Invoice from './Invoice';
import renderer from 'react-test-renderer';

jest.mock('./InvoiceItemList', () => {
  const InvoiceItemList = () => <div />;
  return InvoiceItemList;
});

jest.mock('./InvoiceSummary', () => {
  const InvoiceSummary = () => <div />;
  return InvoiceSummary;
});

describe('Invoice component', () => {

  it('Invoice should render correctly', () => {
    const component = renderer.create(
      <Invoice />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});