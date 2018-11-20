import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('./Invoice', () => {
  const Invoice = () => <div />;
  return Invoice;
});

describe('App component', () => {

  it('App should render correctly', () => {
    const component = renderer.create(
      <App />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});