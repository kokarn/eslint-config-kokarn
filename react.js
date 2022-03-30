module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'kokarn',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'max-lines-per-function': [
            'off',
        ],
        'no-extra-parens': [
            'off',
        ],
        'react/default-props-match-prop-types': [
            'error',
        ],
        'react/display-name': [
            'error',
        ],
        'react/forbid-component-props': [
            'error',
        ],
        'react/forbid-foreign-prop-types': [
            'error',
        ],
        'react/forbid-prop-types': [
            'error',
        ],
        'react/jsx-boolean-value': [
            'error',
        ],
        'react/jsx-closing-bracket-location': [
            'error',
        ],
        'react/jsx-closing-tag-location': [
            'error',
        ],
        'react/jsx-curly-spacing': [
            'error',
            'never',
        ],
        'react/jsx-equals-spacing': [
            'error',
            'always',
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                ],
            },
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'always',
        ],
        'react/jsx-handler-names': [
            'error',
        ],
        'react/jsx-indent': [
            'error',
        ],
        'react/jsx-indent-props': [
            'error',
        ],
        'react/jsx-key': [
            'error',
        ],
        'react/jsx-max-props-per-line': [
            'error',
        ],
        'react/jsx-no-bind': [
            'error',
        ],
        'react/jsx-no-comment-textnodes': [
            'error',
        ],
        'react/jsx-no-duplicate-props': [
            'error',
        ],
        'react/jsx-no-literals': [
            'error',
        ],
        'react/jsx-no-target-blank': [
            'error',
        ],
        'react/jsx-no-undef': [
            'error',
        ],
        'react/jsx-pascal-case': [
            'error',
        ],
        'react/jsx-sort-props': [
            'error',
        ],
        'react/jsx-tag-spacing': [
            'error',
        ],
        'react/jsx-uses-react': [
            'error',
        ],
        'react/jsx-uses-vars': [
            'error',
        ],
        'react/jsx-wrap-multilines': [
            'error',
        ],
        'react/no-array-index-key': [
            'error',
        ],
        'react/no-children-prop': [
            'error',
        ],
        'react/no-danger': [
            'error',
        ],
        'react/no-danger-with-children': [
            'error',
        ],
        'react/no-deprecated': [
            'error',
        ],
        'react/no-did-mount-set-state': [
            'error',
        ],
        'react/no-did-update-set-state': [
            'error',
        ],
        'react/no-direct-mutation-state': [
            'error',
        ],
        'react/no-find-dom-node': [
            'error',
        ],
        'react/no-is-mounted': [
            'error',
        ],
        'react/no-multi-comp': [
            'error',
        ],
        'react/no-redundant-should-component-update': [
            'error',
        ],
        'react/no-render-return-value': [
            'error',
        ],
        'react/no-string-refs': [
            'error',
        ],
        'react/no-unescaped-entities': [
            'error',
        ],
        'react/no-unknown-property': [
            'error',
        ],
        'react/no-unused-prop-types': [
            'error',
        ],
        'react/prefer-es6-class': [
            'error',
        ],
        'react/require-default-props': [
            'error',
        ],
        'react/require-render-return': [
            'error',
        ],
        'react/self-closing-comp': [
            'error',
        ],
        'react/sort-comp': [
            'error',
        ],
        'react/sort-prop-types': [
            'error',
        ],
        'react/style-prop-object': [
            'error',
        ],
        'react/void-dom-elements-no-children': [
            'error',
        ],
    },
};
