import https, { RequestOptions } from 'https';

export type RateObj = {
  '15m': number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
};

export type RateResponse = RateObj | Record<string, RateObj>;

export type Callback = (error: Error | null, data?: RateResponse) => void;

const DEFAULT_CODE = 'all';

const defaultOptions: RequestOptions = {
  host: 'blockchain.info',
  path: '/ticker?cors=true',
  headers: {},
  agent: false,
};

const returnPromise = (code: string, options: RequestOptions): Promise<RateResponse> => {
  return new Promise((resolve, reject) => {
    returnCallback(code, options, (err, data) => {
      if (err) return reject(err);
      return resolve(data as RateResponse);
    });
  });
};

const returnCallback = (code: string, options: RequestOptions, callback: Callback): void => {
  https
    .get(options, (res) => {
      let dataBuffer = '';

      res.on('data', (chunk: Buffer) => {
        dataBuffer += chunk.toString('utf8');
      });

      res.on('end', () => {
        try {
          let data = JSON.parse(dataBuffer);
          if (code !== DEFAULT_CODE) {
            data = data[code.toUpperCase()];
            if (!data) throw new Error(`code "${code}" not found.`);
          }

          return callback(null, data);
        } catch (err) {
          return callback(err as Error);
        }
      });
    })
    .on('error', (err) => {
      return callback(err as Error);
    });
};

export const get = (
  code?: string | Callback,
  callback?: Callback,
): Promise<RateResponse> | void => {
  const options = { ...defaultOptions };
  if (typeof code === 'function') {
    return returnCallback(DEFAULT_CODE, options, code);
  } else if (typeof code === 'string') {
    if (callback) return returnCallback(code, options, callback);
    return returnPromise(code, options);
  } else {
    return returnPromise(DEFAULT_CODE, options);
  }
};

export default { get };
