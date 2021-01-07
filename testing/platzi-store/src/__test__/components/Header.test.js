import React from 'react';
import { create} from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render del headaer', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.length).toEqual(1);
  });

  test('Render del titulo del header', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  })

  describe('Header Snapshot', () => {
    test('Comprobar el snapshot del Header', () => {
      const header = create(
        <ProviderMock>
          <Header />
        </ProviderMock>
      )

      expect(header.toJSON()).toMatchSnapshot();
    })
  })
});
