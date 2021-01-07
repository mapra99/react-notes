import reducer from '../../reducers';
import ProductMock from '../../__mocks__/productMock';
import initialState from '../../initialState';
import Product from '../../components/Product';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducer(initialState, '')).toEqual(initialState);
  });

  test('ADD_TO_CART', () => {
    const payload = {
      type: 'ADD_TO_CART',
      payload: ProductMock,
    };

    const expectedCart = [
      ProductMock,
    ];

    expect(reducer(initialState, payload).cart).toEqual(expectedCart);
  });
});
