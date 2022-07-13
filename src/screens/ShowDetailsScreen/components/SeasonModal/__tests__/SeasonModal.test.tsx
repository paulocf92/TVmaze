import React, {createRef} from 'react';
import {render, act} from '@testing-library/react-native';
import {Modalize} from 'react-native-modalize';

import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  test('the component rendered', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={season => console.log(season)}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i).length).toBe(3);
  });
});
