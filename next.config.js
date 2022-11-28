// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

// const { withExpo } = require("@expo/next-adapter");
// const withPlugins = require("next-compose-plugins");
// const withTM = require("next-transpile-modules")(["react-native-web", 'solito']);

// module.exports = withPlugins([withTM, withExpo], {});


const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
    "react-native-web",
    "nativewind",
    "solito",
    "expo-linking",
    "next-images",
    "next-fonts",
  ])

module.exports = withPlugins(
    [withTM, [withExpo, { projectRoot: __dirname, webpack5: true }]],
    {}
)