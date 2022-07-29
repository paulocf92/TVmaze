import {rest} from 'msw';
import {showMocks} from 'test/mocks/showMocks';

export const handlers = [
  rest.get('shows/:showId/episodes', (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(showMocks.episodeList));
  }),
];
