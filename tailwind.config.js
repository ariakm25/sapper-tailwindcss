module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: [
      "hover",
      "responsive",
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: [
      "hover",
      "responsive",
      "dark",
      "dark-disabled",
      "dark-focus",
      "dark-focus-within",
    ],
    textColor: [
      "hover",
      "responsive",
      "dark",
      "dark-hover",
      "dark-active",
      "dark-placeholder",
    ],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
