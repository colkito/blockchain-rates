import nock from 'nock';

import { get } from '../src';

describe('Get all rates', () => {
  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker?cors=true')
      .reply(200, {
        BRL: {
          symbol: 'R$'
        },
        USD: {
          symbol: '$'
        }
      });
  });

  test('using promises', async () => {
    const rates: any = await get();
    expect(typeof rates).toEqual('object');
    expect(typeof rates.BRL).toEqual('object');
    expect(typeof rates.BRL.symbol).toEqual('string');
    expect(typeof rates.USD).toEqual('object');
    expect(typeof rates.USD.symbol).toEqual('string');
  });

  test('using callback', () => {
    get((err: any, rates) => {
      expect(typeof rates).toEqual('object');
      expect(typeof rates.BRL).toEqual('object');
      expect(typeof rates.BRL.symbol).toEqual('string');
      expect(typeof rates.USD).toEqual('object');
      expect(typeof rates.USD.symbol).toEqual('string');
    });
  });

});

describe('Get a rate by code', () => {
  const code = 'BRL';
  const symbol = 'R$';

  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker?cors=true')
      .reply(200, {
        BRL: {
          symbol: 'R$'
        },
        USD: {
          symbol: '$'
        }
      });
  });

  test('using promises', async () => {
    const rate: any = await get(code);
    expect(typeof rate).toEqual('object');
    expect(rate.symbol).toEqual(symbol);
  });

  test('using callback', () => {
    get(code, (err: any, rate) => {
      expect(typeof rate).toEqual('object');
      expect(rate.symbol).toEqual(symbol);
    });
  });
});
