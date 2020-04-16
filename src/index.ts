/* tslint:disable:no-empty */

import https from 'https';

export type Callback = (...args: any[]) => void;

export type RateType = {
  '15m': number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
};

export const get = (code: string, callback?: Callback) => {
  let cb = callback || ((): void => {});

  if (code && typeof code === 'function') {
    cb = code;
  }

  return new Promise((resolve, reject) => {
    const options = {
      host: 'blockchain.info',
      path: '/ticker?cors=true',
      headers: {},
      agent: false,
    };

    return https
      .get(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk.toString('utf8');
        });

        res.on('end', () => {
          try {
            let response: any = JSON.parse(data);

            if (code && typeof code === 'string') {
              response = response[code.toUpperCase()] || { error: `code "${code}" not found` };
            }

            resolve(response);
            return cb(null, response);
          } catch (err) {
            reject(err);
            return cb(err);
          }
        });
      })
      .on('error', (err) => {
        reject(err);
        return cb(err);
      });
  });
};

export default { get };
