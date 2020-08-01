import React from 'react';
import { render } from '@testing-library/react'
import Cart from '../../components/Cart/Cart'
import { Context, InitialState } from '../../context/Provider'


describe('Cart', () => {
    const cart = [{"id":1,"title":"Muzzarella","description":"Tomato sauce, mozzarella, olives, oregano.","price":"15.50","image":"img\/pizza-1.jpg","created_at":"2020-07-26T00:23:01.000000Z","updated_at":"2020-07-26T00:23:01.000000Z"},{"id":2,"title":"Pepperoni","description":"Tomato sauce, mozzarella, slices of Pepperoni sausage, olives, chili, oregano.","price":"17.20","image":"img\/pizza-2.jpg","created_at":"2020-07-26T00:23:01.000000Z","updated_at":"2020-07-26T00:23:01.000000Z"}]
    const state = { ...InitialState, cart };
    const setCart = jest.fn();
    const total = 0;
  it('Exist at least 1 record', () => {
    const { getByTestId } = render(<Context.Provider value={{state, setCart, total}}><Cart/></Context.Provider>);
    const removeButton0 = getByTestId('removeButton0')
    const cart0 = getByTestId('cart0')
    expect(removeButton0).toBeTruthy();
    expect(cart0).toBeTruthy();   
  });
});