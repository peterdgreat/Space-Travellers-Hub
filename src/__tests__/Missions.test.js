import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/configurestore';

describe('Rockets', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(getByRole('table')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
