import nock from 'nock';

import { get } from './index';

describe('Get all rates', () => {
  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker?cors=true')
      .reply(200, {
        USD: {
          '15m': 57527.96,
          last: 57527.96,
          buy: 57527.96,
          sell: 57527.96,
          symbol: '$',
        },
        AUD: {
          '15m': 74266.92,
          last: 74266.92,
          buy: 74266.92,
          sell: 74266.92,
          symbol: '$',
        },
        BRL: {
          '15m': 308021.94,
          last: 308021.94,
          buy: 308021.94,
          sell: 308021.94,
          symbol: 'R$',
        },
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
    get((_err, rates: any) => {
      expect(typeof rates).toEqual('object');
      expect(typeof rates.BRL).toEqual('object');
      expect(typeof rates.BRL.symbol).toEqual('string');
      expect(typeof rates.USD).toEqual('object');
      expect(typeof rates.USD.symbol).toEqual('string');
    });
  });
});

describe('Get a rate by code', () => {
  const codeMock = 'BRL';
  const symbolMock = 'R$';

  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker?cors=true')
      .reply(200, {
        BRL: {
          symbol: 'R$',
        },
        USD: {
          symbol: '$',
        },
      });
  });

  test('using promises', async () => {
    const rate: any = await get(codeMock);
    expect(typeof rate).toEqual('object');
    expect(rate.symbol).toEqual(symbolMock);
  });

  test('using callback', () => {
    get(codeMock, (_err, rate: any) => {
      expect(typeof rate).toEqual('object');
      expect(rate.symbol).toEqual(symbolMock);
    });
  });
});
