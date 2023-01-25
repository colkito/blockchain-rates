const blockchainRates = require('../dist');

const code = 'BRL';

// Using Promises
blockchainRates
  .get()
  .then((rates) => console.log('[Promise][All] Rates:', rates))
  .catch((err) => console.error('[Promise][All] Error:', err));

blockchainRates
  .get(code)
  .then((rate) => console.log(`[Promise][${code}] Rate:`, rate))
  .catch((err) => console.error(`[Promise][${code}] Error:`, err));

// Using Callbacks
blockchainRates.get((err, res) => {
  console.error('[Callback][All] Error:', err);
  console.log('[Callback][All] Rates:', res);
});

blockchainRates.get(code, (err, res) => {
  console.error(`[Callback][${code}] Error:`, err);
  console.log(`[Callback][${code}] Rate:`, res);
});
