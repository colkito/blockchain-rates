import nock from 'nock';

import { get } from '../src';

const code = 'USD';
const symbol = 'R$';

describe('Get a rate', () => {
  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker?cors=true')
      .reply(200, {
        data: {
          USD: {
            symbol
          }
        }
      });
  });

  test('Get a rate by code using Callback', () => {
    get(code, (err: any, rate) => {
      expect(typeof rate).toEqual('object');
    });
  });

  test('Get a rate by code using Promises', async () => {
    const rate: any = await get(code);
    expect(typeof rate).toEqual('object');
  });
});
