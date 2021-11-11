import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/configurestore';

describe('Rockets', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(getByRole('list')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
