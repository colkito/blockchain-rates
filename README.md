# blockchain-rates

[![Build Status](https://img.shields.io/travis/colcodev/blockchain-rates.svg?style=flat-square)](https://travis-ci.org/colcodev/blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/min/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)
[![BundlePhobia](https://img.shields.io/bundlephobia/minzip/blockchain-rates.svg?style=flat-square)](https://bundlephobia.com/result?p=blockchain-rates)

A tiny (and zero-deps) wrapper for the [Blockchain](https://blockchain.info/ticker) Exchange Rates API. Written in TypeScript.

This module returns a `Promise` but can be used with `Callback` as well. ✨

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
import bitpayRates from 'blockchain-rates';

const code = 'ARS'; // see list of codes bellow

// Using Promises
const ratePromise = bitpayRates.get(code);
ratePromise
  .then(rate => console.log('Promise Rate:', rate)) // i.e { code: 'ARS', name: 'Argentine Peso', rate: 440369.72 }
  .catch(err => console.log('Promise Error:', err));

// Using Callback
bitpayRates.get(code, (err, res) => {
  console.log('Callback Error:', err);
  console.log('Callback Rate:', res); // i.e { code: 'ARS', name: 'Argentine Peso', rate: 440369.72 }
});
```

Getting all the rates

```js
import bitpayRates from 'blockchain-rates';

// Using Promises
const ratesPromise = bitpayRates.get();
ratesPromise
  .then(rates => console.log('Promise Rates:', rates)) // i.e [{ code: 'ARS', name: 'Argentine Peso', rate: 440369.72 }, {...}]
  .catch(err => console.log('Promise Error:', err));

// Using Callback
bitpayRates.get((err, res) => {
  console.log('Callback Error:', err);
  console.log('Callback Rates:', res); // i.e [{ code: 'ARS', name: 'Argentine Peso', rate: 440369.72 }, {...}]
});
```

## Available Codes (updated: 2019-12-15)

The complete list of 22 codes:

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
- TWD (New Taiwan Dollar)
