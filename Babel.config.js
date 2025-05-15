module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['nativewind/babel'], // remova essa linha se não estiver usando Tailwind
    };
  };