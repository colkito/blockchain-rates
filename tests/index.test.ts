import nock from 'nock';

import { get } from '../src';

// const code = 'BRL';
const symbol = 'R$';

describe('Get all rates', () => {
  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker?cors=true')
      .reply(200, {
        data: {
          BRL: {
            symbol
          }
        }
      });
  });

  test('using callback', () => {
    get((err: any, rate) => {
      expect(typeof rate).toEqual('object');
      expect(typeof rate.data).toEqual('object');
      expect(typeof rate.data.BRL).toEqual('object');
      expect(typeof rate.data.BRL.symbol).toEqual('string');
    });
  });

  test('using promises', async () => {
    const rate: any = await get();
    expect(typeof rate).toEqual('object');
    expect(typeof rate.data).toEqual('object');
    expect(typeof rate.data.BRL).toEqual('object');
    expect(typeof rate.data.BRL.symbol).toEqual('string');
  });
});
