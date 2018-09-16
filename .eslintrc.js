module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4,
        ],
        'keyword-spacing': [
            2,
            {
                before: true,
                overrides: {
                    if: {
                        after: false,
                    },
                    for: {
                        after: false,
                    },
                    while: {
                        after: false,
                    },
                },
            },
        ],
        'space-before-function-paren': [
            2,
            'never',
        ],
        'space-in-parens': [
            2,
            'never',
        ],
        'no-nested-ternary': [
            0,
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                enforceInMethodNames: true,
                allowAfterThis: true,
            },
        ],
        'max-len': [
            'error',
            140,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'import/prefer-default-export': false,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
