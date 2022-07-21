import {api} from '../../api';
import {showService} from '../showService';
import {episode1, episode2, episode22, episode23, episodeList} from './mocks';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    });
    test('when API return episode list, return all season names', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();

      expect(groupedEpisodes.seasonNames.length).toBe(2);
    });
    test('when API return episode list, return episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      const season1 = groupedEpisodes.seasons[1];
      const season2 = groupedEpisodes.seasons[2];

      expect(season1.includes(episode1)).toBeTruthy();
      expect(season1.includes(episode2)).toBeTruthy();

      expect(season2.includes(episode22)).toBeTruthy();
      expect(season2.includes(episode23)).toBeTruthy();
    });
  });
});
