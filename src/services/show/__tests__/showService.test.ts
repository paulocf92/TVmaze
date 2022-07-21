import {api} from '../../api';
import {showService} from '../showService';
import {episodeList} from './mocks';

describe('showService', () => {
  describe('getEpisodes', () => {
    test('when API return episode list, return a list of episodes grouped by season', async () => {
      const spyFn = jest.spyOn(api, 'get').mockImplementation(() =>
        Promise.resolve({
          data: episodeList,
        }),
      );
      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();

      expect(groupedEpisodes.seasonNames.length).toBe(2);

      expect(spyFn).toBeCalledTimes(1);
    });
  });
});
