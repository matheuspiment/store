import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Header itemsAmount={1} onClickOnCart={jest.fn()}/>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should trigger onClickOnCart', () => {
    const handleClickOnCart = jest.fn();

    const { getByTestId } = render(
      <Header itemsAmount={1} onClickOnCart={handleClickOnCart}/>,
    );

    fireEvent.click(getByTestId('btn-cart'));

    expect(handleClickOnCart).toHaveBeenCalledTimes(1);
  });
})


