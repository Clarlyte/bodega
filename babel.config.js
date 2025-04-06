module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel', { mode: 'transformOnly' }],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ],
  };
}; 