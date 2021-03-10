module.exports = {
    env: {
        browser: false,
        es6: true,
    },
    plugins: ['eslint-plugin-prettier'],
    extends: ['eslint:recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        indent: ['error', 'tab'],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'prettier/prettier': 'error',
    },
};
