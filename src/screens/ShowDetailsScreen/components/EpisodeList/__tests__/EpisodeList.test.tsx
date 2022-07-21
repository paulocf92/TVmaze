import React from 'react';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';

const queryClient = new QueryClient();
const wrapper = ({children}: {children: React.ReactNode}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  test('the component rendered', () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: [],
      seasons: {
        1: [],
      },
    });
    render(<EpisodeList show={mocks.show} />, {wrapper});

    expect(true).toBeTruthy();
  });
});
