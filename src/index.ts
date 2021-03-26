import * as https from 'https';

export type Callback = (...args: any[]) => void;

export type RateType = {
  '15m': number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
};

const DEFAULT_CODE = 'all';

const returnPromise = (code: string, options: any): Promise<RateType> => {
  return new Promise((resolve, reject) => {
    returnCallback(code, options, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const returnCallback = (code: string, options: any, callback: Callback): void => {
  https
    .get(options, (res: any) => {
      let dataBuffer = '';
      res.on('data', (chunk: any) => {
        dataBuffer += chunk.toString('utf8');
      });
      res.on('end', () => {
        try {
          let data = JSON.parse(dataBuffer);
          if (code !== DEFAULT_CODE) {
            data = data[code.toUpperCase()];
            if (!data) return new Error(`code "${code}" not found.`);
          }
          return callback(null, data);
        } catch (err) {
          return callback(err);
        }
      });
    })
    .on('error', (err: any) => {
      return callback(err);
    });
};

export const get = (
  code?: string | Callback,
  callback?: Callback,
): Promise<RateType> | Promise<[RateType]> | void => {
  const options = {
    host: 'blockchain.info',
    path: '/ticker?cors=true',
    headers: {},
    agent: false,
  };
  if (typeof code === 'function') {
    return returnCallback(DEFAULT_CODE, options, code);
  } else if (typeof code === 'string') {
    if (callback) return returnCallback(code, options, callback);
    return returnPromise(code, options);
  } else if (typeof code === 'undefined') {
    return returnPromise(DEFAULT_CODE, options);
  }
};

export default { get };
