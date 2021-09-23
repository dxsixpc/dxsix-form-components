const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.(less)$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'custom'
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|TTF|woff|woff2|svg|png|jpg|gif)$/i,
        use: ['url-loader']
      },
      {
        test: /\.js/,
        enforce: 'pre',
        include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
        use: MonacoWebpackPlugin.loader
      }
    );

    config.plugins.push(new MonacoWebpackPlugin());

    // Return the altered config
    return config;
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  }
};
