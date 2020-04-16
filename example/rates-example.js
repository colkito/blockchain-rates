const blockchainRates = require("../dist");

const code = "BRL";

// Using Promises
const ratesPromise = blockchainRates.get();
ratesPromise
  .then(rates => console.log("[Promise][All] Rates:", rates))
  .catch(err => console.log("[Promise][All] Error:", err));

const ratePromise = blockchainRates.get(code);
ratePromise
  .then(rate => console.log("[Promise][Code] Rate:", rate))
  .catch(err => console.log("[Promise][Code] Error:", err));

// Using Callbacks
blockchainRates.get((err, res) => {
  console.log("[Callback][All] Error:", err);
  console.log("[Callback][All] Rates:", res);
});

blockchainRates.get(code, (err, res) => {
  console.log("[Callback][Code] Error:", err);
  console.log("[Callback][Code] Rate:", res);
});
