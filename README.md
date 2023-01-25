# blockchain-rates

[![BundlePhobia](https://img.shields.io/bundlephobia/min/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/minzip/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)

A lightweight Node.js wrapper for [Blockchain's](https://blockchain.info/ticker) Exchange Rates API (ticker), now in TypeScript.

Zero-dependency, `promise` and `callback` support for easy integration into your project. ✨

## Requirements

- nodejs >= 12.x

## Examples

Getting a rate by `code`:

```js
import blockchainRates from 'blockchain-rates';

const code = 'BRL'; // see list of codes bellow

// Using promise
blockchainRates
  .get(code)
  .then((rate) => console.log('Promise Rate:', rate))
  .catch((err) => console.error('Promise Error:', err));
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

Getting `all` the rates:

```js
import blockchainRates from 'blockchain-rates';

// Using callback
blockchainRates.get((err, res) => {
  console.error('Callback Error:', err);
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
  {...}
}
```

More examples [here](example/rates-example.js).

## Available Codes (updated: 2023-01-25)

[Follow this link](CODES.md) to see the complete list of codes.

## Related Packages

- [BitPay Rates API](https://npmjs.com/bitpay-rates)
