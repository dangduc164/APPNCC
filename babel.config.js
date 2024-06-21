module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        ['nativewind/babel'],
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: [
                    { '~components': ['./src/components'] },
                    { '~assets': ['./src/assets'] },
                    { '~apis': ['./src/apis'] },
                    { '~navigations': ['./src/navigations'] },
                    { '~constants': ['./src/constants'] },
                    { '~utils': ['./src/utils'] },
                    { '~views': ['./src/views'] },
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg', '.svg'],
            },
        ],
    ],
};
