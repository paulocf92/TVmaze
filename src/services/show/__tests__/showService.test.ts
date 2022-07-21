import {api} from '../../api';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    test('when API return episode list, return a list of episodes grouped by season', async () => {
      const spyFn = jest.spyOn(api, 'get');
      const groupedEpisodes = await showService.getEpisodes('250');

      console.log('episode:', groupedEpisodes.seasons[1][0]);

      expect(spyFn).toBeCalledTimes(1);
    });
  });
});
