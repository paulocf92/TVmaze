import {showMocks} from 'test/mocks/showMocks';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
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

      expect(season1[0]).toEqual(showMocks.episode1);
      expect(season1[1]).toEqual(showMocks.episode2);

      expect(season2[0]).toEqual(showMocks.episode22);
      expect(season2[1]).toEqual(showMocks.episode23);
    });
  });
});
