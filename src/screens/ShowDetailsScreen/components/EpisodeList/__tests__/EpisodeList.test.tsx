import React from 'react';
import {render} from '@testing-library/react-native';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {NavigationContainer} from '@react-navigation/native';

describe('EpisodeList', () => {
  test('the component rendered', () => {
    render(
      <NavigationContainer>
        <EpisodeList show={mocks.show} />
      </NavigationContainer>,
    );

    expect(true).toBeTruthy();
  });
});
