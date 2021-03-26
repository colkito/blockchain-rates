# blockchain-rates

[![Build Status](https://img.shields.io/travis/bycolco/blockchain-rates.svg?style=flat-square)](https://travis-ci.org/bycolco/blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/min/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/minzip/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)

A tiny (and zero-deps) wrapper for the [Blockchain](https://blockchain.info/ticker) Exchange Rates (ticker) API. Written in TypeScript.

This module returns a `Promise` but can be used with a `Callback` as well. ✨

## Requirements

- nodejs >= 10.x

## Examples

Getting a rate by code

```js
import blockchainRates from 'blockchain-rates';

const code = 'BRL'; // see list of codes bellow

// Using promise
const ratePromise = blockchainRates.get(code);
ratePromise
  .then((rate) => console.log('Promise Rate:', rate))
  .catch((err) => console.log('Promise Error:', err));

// Using callback
blockchainRates.get(code, (err, res) => {
  console.log('Callback Error:', err);
  console.log('Callback Rate:', res);
});
```

Successful response

```json
{
  "15m": 33997.0,
  "last": 33997.0,
  "buy": 33997.0,
  "sell": 33997.0,
  "symbol": "R$"
}
```

Getting all the rates

```js
import blockchainRates from 'blockchain-rates';

// Using promise
const ratesPromise = blockchainRates.get();
ratesPromise
  .then((rates) => console.log('Promise Rates:', rates))
  .catch((err) => console.log('Promise Error:', err));

// Using callback
blockchainRates.get((err, res) => {
  console.log('Callback Error:', err);
  console.log('Callback Rates:', res);
});
```

Successful response

```json
{
  "BRL": {
    "15m": 33997.0,
    "last": 33997.0,
    "buy": 33997.0,
    "sell": 33997.0,
    "symbol": "R$"
  },
  "USD": {
    "15m": 7046.5,
    "last": 7046.5,
    "buy": 7046.5,
    "sell": 7046.5,
    "symbol": "$"
  },
  ...
}
```

## Available Codes (updated: 2021-03-26)

[Follow this link](CODES.md#available-codes-updated-2021-03-26) to see the complete list of 23 codes.

## Related Packages

- [BitPay Rates API](https://npmjs.com/bitpay-rates)
