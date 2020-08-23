module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("tailwindcss"),
  ],
  whitelist: ["mode-dark"],
};
