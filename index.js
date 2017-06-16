module.exports = {
    extends: [
        'eslint:recommended',
    ],
    rules: {
        'accessor-pairs': [
            'error',
        ],
        'array-bracket-spacing': [
            'error',
            'always',
        ],
        'array-callback-return': [
            'error',
        ],
        'arrow-body-style': [
            'error',
            'always',
        ],
        'arrow-parens': [
            'error',
        ],
        'arrow-spacing': [
            'error',
        ],
        'block-scoped-var': [
            'error',
        ],
        'block-spacing': [
            'error',
        ],
        'brace-style': [
            'error',
        ],
        'callback-return': [
            'error',
        ],
        camelcase: [
            'error',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': [
            'error',
        ],
        'comma-style': [
            'error',
        ],
        complexity: [
            'error',
        ],
        'computed-property-spacing': [
            'error',
            'always',
        ],
        'consistent-return': [
            'error',
        ],
        'consistent-this': [
            'error',
            '_this',
        ],
        curly: [
            'error',
        ],
        'dot-location': [
            'error',
            'property',
        ],
        'dot-notation': [
            'error',
        ],
        'eol-last': [
            'error',
        ],
        eqeqeq: [
            'error',
        ],
        'func-call-spacing': [
            'error',
        ],
        'func-name-matching': [
            'error',
        ],
        'func-names': [
            'error',
        ],
        'func-style': [
            'error',
        ],
        'generator-star-spacing': [
            'error',
        ],
        'global-require': [
            'error',
        ],
        'guard-for-in': [
            'error',
        ],
        'handle-callback-err': [
            'error',
        ],
        'id-blacklist': [
            'error',
            'data',
            'err',
            'e',
            'cb',
            'callback',
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
        'key-spacing': [
            'error',
        ],
        'keyword-spacing': [
            'error',
        ],
        'lines-around-comment': [
            'error',
            {
                allowBlockStart: true,
            },
        ],
        'max-depth': [
            'error',
        ],
        'max-len': [
            'warn',
            120,
        ],
        'max-nested-callbacks': [
            'error',
        ],
        'max-params': [
            'error',
        ],
        'max-statements-per-line': [
            'error',
        ],
        'multiline-ternary': [
            'error',
        ],
        'new-cap': [
            'error',
        ],
        'new-parens': [
            'error',
        ],
        'newline-after-var': [
            'error',
        ],
        'newline-before-return': [
            'error',
        ],
        'newline-per-chained-call': [
            'error',
        ],
        'no-alert': [
            'error',
        ],
        'no-array-constructor': [
            'error',
        ],
        'no-bitwise': [
            'error',
        ],
        'no-caller': [
            'error',
        ],
        'no-confusing-arrow': [
            'error',
        ],
        'no-div-regex': [
            'error',
        ],
        'no-duplicate-imports': [
            'error',
        ],
        'no-else-return': [
            'error',
        ],
        'no-empty-function': [
            'error',
        ],
        'no-eq-null': [
            'error',
        ],
        'no-eval': [
            'error',
        ],
        'no-extend-native': [
            'error',
        ],
        'no-extra-bind': [
            'error',
        ],
        'no-extra-label': [
            'error',
        ],
        'no-extra-parens': [
            'error',
            'all',
        ],
        'no-floating-decimal': [
            'error',
        ],
        'no-global-assign': [
            'error',
        ],
        'no-implicit-coercion': [
            'error',
        ],
        'no-implicit-globals': [
            'error',
        ],
        'no-implied-eval': [
            'error',
        ],
        'no-invalid-this': [
            'error',
        ],
        'no-iterator': [
            'error',
        ],
        'no-label-var': [
            'error',
        ],
        'no-labels': [
            'error',
        ],
        'no-lone-blocks': [
            'error',
        ],
        'no-lonely-if': [
            'error',
        ],
        'no-loop-func': [
            'error',
        ],
        'no-magic-numbers': [
            'error',
            {
                ignore: [ -1, 0, 1 ],
                ignoreArrayIndexes: true,
            },
        ],
        'no-mixed-operators': [
            'error',
        ],
        'no-multi-assign': [
            'error',
        ],
        'no-multi-str': [
            'error',
        ],
        'no-multiple-empty-lines': [
            'error',
        ],
        'no-negated-condition': [
            'error',
        ],
        'no-nested-ternary': [
            'error',
        ],
        'no-new': [
            'error',
        ],
        'no-new-func': [
            'error',
        ],
        'no-new-object': [
            'error',
        ],
        'no-new-require': [
            'error',
        ],
        'no-new-wrappers': [
            'error',
        ],
        'no-octal-escape': [
            'error',
        ],
        'no-param-reassign': [
            'error',
        ],
        'no-path-concat': [
            'error',
        ],
        'no-plusplus': [
            'error',
        ],
        'no-process-env': [
            'error',
        ],
        'no-process-exit': [
            'error',
        ],
        'no-proto': [
            'error',
        ],
        'no-prototype-builtins': [
            'error',
        ],
        'no-return-assign': [
            'error',
        ],
        'no-script-url': [
            'error',
        ],
        'no-self-compare': [
            'error',
        ],
        'no-sequences': [
            'error',
        ],
        'no-shadow': [
            'error',
        ],
        'no-shadow-restricted-names': [
            'error',
        ],
        'no-sync': [
            'warn',
        ],
        'no-tabs': [
            'error',
        ],
        'no-template-curly-in-string': [
            'error',
        ],
        'no-throw-literal': [
            'error',
        ],
        'no-trailing-spaces': [
            'warn',
        ],
        'no-undef-init': [
            'error',
        ],
        'no-undefined': [
            'error',
        ],
        'no-unmodified-loop-condition': [
            'error',
        ],
        'no-unneeded-ternary': [
            'error',
        ],
        'no-unsafe-negation': [
            'error',
        ],
        'no-unused-expressions': [
            'error',
        ],
        'no-use-before-define': [
            'error',
            {
                variables: false,
            },
        ],
        'no-useless-call': [
            'error',
        ],
        'no-useless-computed-key': [
            'error',
        ],
        'no-useless-concat': [
            'error',
        ],
        'no-useless-constructor': [
            'error',
        ],
        'no-useless-escape': [
            'error',
        ],
        'no-useless-rename': [
            'error',
        ],
        'no-useless-return': [
            'error',
        ],
        'no-var': [
            'error',
        ],
        'no-void': [
            'error',
        ],
        'no-warning-comments': [
            'warn',
        ],
        'no-whitespace-before-property': [
            'error',
        ],
        'no-with': [
            'error',
        ],
        'object-curly-newline': [
            'error',
            {
                minProperties: 1,
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'object-property-newline': [
            'error',
        ],
        'one-var': [
            'error',
            'never',
        ],
        'operator-assignment': [
            'error',
            'never',
        ],
        'padded-blocks': [
            'error',
            'never',
        ],
        'prefer-arrow-callback': [
            'error',
        ],
        'prefer-const': [
            'warn',
        ],
        'prefer-promise-reject-errors': [
            'error',
        ],
        'prefer-reflect': [
            'error',
        ],
        'prefer-rest-params': [
            'error',
        ],
        'prefer-spread': [
            'error',
        ],
        'prefer-template': [
            'error',
        ],
        'quote-props': [
            'error',
            'as-needed',
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        radix: [
            'error',
        ],
        'rest-spread-spacing': [
            'error',
        ],
        semi: [
            'error',
            'always',
        ],
        'semi-spacing': [
            'error',
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: true,
            },
        ],
        'space-before-blocks': [
            'error',
        ],
        'space-before-function-paren': [
            'error',
        ],
        'space-in-parens': [
            'error',
            'always',
        ],
        'space-infix-ops': [
            'error',
        ],
        'space-unary-ops': [
            'error',
        ],
        'spaced-comment': [
            'error',
        ],
        'symbol-description': [
            'error',
        ],
        'template-curly-spacing': [
            'error',
            'always',
        ],
        'template-tag-spacing': [
            'error',
            'always',
        ],
        'unicode-bom': [
            'error',
        ],
        'vars-on-top': [
            'error',
        ],
        'wrap-iife': [
            'error',
        ],
        'yield-star-spacing': [
            'error',
        ],
        yoda: [
            'error',
        ],
    },
};
