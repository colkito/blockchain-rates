import nock from 'nock';

import { get } from '../src';
const code = 'BRL';

describe('Get User tests', () => {
  beforeEach(() => {
    nock('https://blockchain.info')
      .persist()
      .get('/ticker')
      .reply(200, {
        data: {
          code
        }
      });
  });

  it('Get a rate by code using Promises', async () => {
    const rate: any = await get(code);
    expect(typeof rate).toEqual('object');
    expect(rate.code).toEqual(code);
  });

  it('Get a rate by code using Callback', () => {
    get(code, (err: any, rate: any) => {
      expect(typeof rate).toEqual('object');
      expect(rate.code).toEqual(code);
    });
  });
});
