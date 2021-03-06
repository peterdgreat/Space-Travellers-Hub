import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configurestore';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
