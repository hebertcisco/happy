require("dotenv").config();

module.exports = {
  env: {
    REACT_APP_MAPOBOX_TOKEN: process.env.REACT_APP_MAPOBOX_TOKEN,
    FONTAWELSOME: process.env.FONTAWELSOME,
    GOOGLE_TAG: process.env.GOOGLE_TAG,
  },
};
