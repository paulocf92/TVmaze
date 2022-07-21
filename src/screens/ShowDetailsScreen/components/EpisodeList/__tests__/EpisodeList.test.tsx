import React from 'react';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
const wrapper = ({children}: {children: React.ReactNode}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  test('show all season one episodes first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    });
    const {findByText, getByText} = render(<EpisodeList show={mocks.show} />, {
      wrapper,
    });

    const episode1 = await findByText(mocks.episode1.name);
    const episode2 = getByText(mocks.episode2.name);

    expect(episode1).toBeTruthy();
    expect(episode2).toBeTruthy();
  });
});
