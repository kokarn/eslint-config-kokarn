module.exports = {
    extends: [
        'plugin:react/recommended',
        'kokarn'
    ],
    env: {
        'browser': true,
        'es6': true
    },
    parserOptions: {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/forbid-prop-types': [
            'error'
        ],
        'react/no-danger': [
            'error'
        ],
        'react/no-danger-with-children': [
            'error'
        ],
        'react/no-did-mount-set-state': [
            'error'
        ],
        'react/no-did-update-set-state': [
            'error'
        ],
        'react/no-multi-comp': [
            'error'
        ],
        'react/no-render-return-value': [
            'error'
        ],
        'react/no-string-refs': [
            'error'
        ],
        'react/no-unused-prop-types': [
            'error'
        ],
        'react/prefer-es6-class': [
            'error'
        ],
        'react/self-closing-comp': [
            'error'
        ],
        'react/sort-comp': [
            'error'
        ],
        'react/sort-prop-types': [
            'error'
        ],
        'react/style-prop-object': [
            'error'
        ],
        'react/jsx-boolean-value': [
            'error'
        ],
        'react/jsx-closing-bracket-location': [
            'error'
        ],
        'react/jsx-curly-spacing': [
            'error',
            'always'
        ],
        'react/jsx-equals-spacing': [
            'error',
            'always'
        ],
        'react/jsx-filename-extension': [
            'error'
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'always'
        ],
        'react/jsx-handler-names': [
            'error'
        ],
        'react/jsx-indent': [
            'error'
        ],
        'react/jsx-indent-props': [
            'error'
        ],
        'react/jsx-key': [
            'error'
        ],
        'react/jsx-max-props-per-line': [
            'error'
        ],
        'react/jsx-no-bind': [
            'error'
        ],
        'react/jsx-no-comment-textnodes': [
            'error'
        ],
        'react/jsx-no-literals': [
            'error'
        ],
        'react/jsx-no-target-blank': [
            'error'
        ],
        'react/jsx-pascal-case': [
            'error'
        ],
        'react/jsx-sort-props': [
            'error'
        ],
        'react/jsx-space-before-closing': [
            'error'
        ],
        'react/jsx-wrap-multilines': [
            'error'
        ]
    }
};
