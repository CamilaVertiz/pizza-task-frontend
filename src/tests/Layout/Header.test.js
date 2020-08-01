import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/Layout/Header';
import { Context, InitialState } from '../../context/Provider'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Header component', () => {
    const state = { ...InitialState };
    const setCurrency = jest.fn();
    const total = 0;
    const quantity = 0;
  it('Snapshot', () => {
    const tree = renderer
    .create(<Context.Provider value={{ state, setCurrency, total, quantity }}><Router><Header/></Router></Context.Provider>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
