module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: {
                    version: 2,
                },
            },
        ],
    ],
    plugins: [
        ['babel-plugin-emotion', { sourceMap: true, autoLabel: true }],
        'react-hot-loader/babel',
        '@babel/plugin-proposal-export-default-from',
        ['@babel/plugin-proposal-optional-chaining', { loose: false }],
        '@babel/plugin-proposal-do-expressions',
    ]
}