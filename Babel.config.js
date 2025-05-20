module.exports = {
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }], // React Native preset for mobile and web
      '@babel/preset-env', //Browser compatibility for web
    ],
    plugins: [
      'nativewind/babel', //Required for NativeWind (Tailwind)
      ['@babel/plugin-transform-runtime', { regenerator: true }], // Support for async/await
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components', //For BookCard, Header, etc.
            '@screens': './src/screens', //Updated to match your folder structure
          },
        },
      ],
    ],
  };