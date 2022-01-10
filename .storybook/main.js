const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-postcss",
    {
      name: `@storybook/preset-scss`,
      options: {
        rule: {
          test: /\.module\.s[ca]ss$/,
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          vue: "vue/dist/vue.esm-bundler.js",
          "@": path.resolve(__dirname, "../src"),
        },
      },
    });
    return config;
  },
};
