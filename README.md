# blockchain-rates

[![Build Status](https://img.shields.io/travis/colcodev/blockchain-rates.svg?style=flat-square)](https://travis-ci.org/colcodev/blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/min/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/minzip/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)

A tiny (and zero-deps) wrapper for the [Blockchain](https://blockchain.info/ticker) Exchange Rates (ticker) API. Written in TypeScript.

This module returns a `Promise` but can be used with a `Callback` as well. ✨

## Requirements

- nodejs >= 10.x

## Installing

Using yarn:

```bash
yarn add blockchain-rates
```

Using npm:

```bash
npm i blockchain-rates --save
```

## Example

Getting a rate

```js
import blockchainRates from 'blockchain-rates';

const code = 'BRL'; // see list of codes bellow

// Using promise
const ratePromise = blockchainRates.get(code);
ratePromise
  .then(rate => console.log('Promise Rate:', rate)) // i.e { "15m" : 33997.0, "last" : 33997.0, "buy" : 33997.0, "sell" : 33997.0, "symbol" : "R$" }
  .catch(err => console.log('Promise Error:', err));

// Using callback
blockchainRates.get(code, (err, res) => {
  console.log('Callback Error:', err);
  console.log('Callback Rate:', res); // i.e { "15m" : 33997.0, "last" : 33997.0, "buy" : 33997.0, "sell" : 33997.0, "symbol" : "R$" }
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
  .then(rates => console.log('Promise Rates:', rates)) // i.e { "BRL" : {"15m" : 33997.0, "last" : 33997.0, "buy" : 33997.0, "sell" : 33997.0, "symbol" : "R$"}, "USD": {...}, ... }
  .catch(err => console.log('Promise Error:', err));

// Using callback
blockchainRates.get((err, res) => {
  console.log('Callback Error:', err);
  console.log('Callback Rates:', res); // i.e { "BRL" : {"15m" : 33997.0, "last" : 33997.0, "buy" : 33997.0, "sell" : 33997.0, "symbol" : "R$"}, "USD": {...}, ... }
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

## Available Codes (updated: 2020-04-16)

The complete list of 23 codes:

- USD (US Dollar)
- AUD (Australian Dollar)
- BRL (Brazilian Real)
- CAD (Canadian Dollar)
- CHF (Swiss Franc)
- CLP (Chilean Peso)
- CNY (Chinese Yuan)
- DKK (Danish Krone)
- EUR (Eurozone Euro)
- GBP (Pound Sterling)
- HKD (Hong Kong Dollar)
- INR (Indian Rupee)
- ISK (Icelandic Króna)
- JPY (Japanese Yen)
- KRW (South Korean Won)
- NZD (New Zealand Dollar)
- PLN (Polish Zloty)
- RUB (Russian Ruble)
- SEK (Swedish Krona)
- SGD (Singapore Dollar)
- THB (Thai Baht)
- TRY (Turkish Lira)
- TWD (New Taiwan Dollar)

## Related Packages

- [BitPay Rates API](https://npmjs.com/bitpay-rates)
