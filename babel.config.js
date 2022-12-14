module.exports =   {
    presets: ["@expo/next-adapter/babel"],
    plugins: [
    [
        '@babel/plugin-proposal-class-properties', 
        { loose: true }
    ], 
    [
        '@babel/plugin-proposal-private-methods', 
        { loose: true }
    ],
    [
        '@babel/plugin-proposal-private-property-in-object',
        { loose: true }
    ],
    [
        'nativewind/babel',
        { mode: 'transformOnly' }
    ]
    ],
};
  
 