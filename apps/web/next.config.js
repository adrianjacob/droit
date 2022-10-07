const withTM = require("next-transpile-modules")(["@droit/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
