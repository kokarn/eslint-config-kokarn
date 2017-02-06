module.exports = {
    extends: [
        'eslint:recommended'
    ],
    rules: {
        'indent': [
            'error',
            4,
            {
                "SwitchCase": 1
            }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-extra-parens': [
            'error',
            'all'
        ],
        'no-prototype-builtins': [
            'error'
        ],
        'no-template-curly-in-string': [
            'error'
        ],
        'no-unsafe-negation': [
            'error'
        ],
        'accessor-pairs': [
            'error'
        ],
        'array-callback-return': [
            'error'
        ],
        'block-scoped-var': [
            'error'
        ],
        'complexity': [
            'error'
        ],
        'consistent-return': [
            'error'
        ],
        'curly': [
            'error'
        ],
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': [
            'error'
        ],
        'eqeqeq': [
            'error'
        ],
        'guard-for-in': [
            'error'
        ],
        'no-alert': [
            'error'
        ],
        'no-caller': [
            'error'
        ],
        'no-div-regex': [
            'error'
        ],
        'no-else-return': [
            'error'
        ],
        'no-empty-function': [
            'error'
        ],
        'no-eq-null': [
            'error'
        ],
        'no-eval': [
            'error'
        ],
        'no-extend-native': [
            'error'
        ],
        'no-extra-bind': [
            'error'
        ],
        'no-extra-label': [
            'error'
        ],
        'no-floating-decimal': [
            'error'
        ],
        'no-global-assign': [
            'error'
        ],
        'no-implicit-coercion': [
            'error'
        ],
        'no-implicit-globals': [
            'error'
        ],
        'no-implied-eval': [
            'error'
        ],
        'no-invalid-this': [
            'error'
        ],
        'no-iterator': [
            'error'
        ],
        'no-labels': [
            'error'
        ],
        'no-lone-blocks': [
            'error'
        ],
        'no-loop-func': [
            'error'
        ],
        'no-magic-numbers': [
            'error',
            {
                "ignore": [ -1, 0, 1 ]
            }
        ],
        'no-multi-str': [
            'error'
        ],
        'no-new-func': [
            'error'
        ],
        'no-new-wrappers': [
            'error'
        ],
        'no-new': [
            'error'
        ],
        'no-octal-escape': [
            'error'
        ],
        'no-param-reassign': [
            'error'
        ],
        'no-proto': [
            'error'
        ],
        'no-return-assign': [
            'error'
        ],
        'no-script-url': [
            'error'
        ],
        'no-self-compare': [
            'error'
        ],
        'no-sequences': [
            'error'
        ],
        'no-throw-literal': [
            'error'
        ],
        'no-unmodified-loop-condition': [
            'error'
        ],
        'no-unused-expressions': [
            'error'
        ],
        'no-useless-call': [
            'error'
        ],
        'no-useless-concat': [
            'error'
        ],
        'no-useless-escape': [
            'error'
        ],
        'no-void': [
            'error'
        ],
        'no-warning-comments': [
            'warn'
        ],
        'no-with': [
            'error'
        ],
        'radix': [
            'error'
        ],
        'vars-on-top': [
            'error'
        ],
        'wrap-iife': [
            'error'
        ],
        'yoda': [
            'error'
        ],
        'no-label-var': [
            'error'
        ],
        'no-shadow-restricted-names': [
            'error'
        ],
        'no-shadow': [
            'error'
        ],
        'no-undef-init': [
            'error'
        ],
        'no-undefined': [
            'error'
        ],
        'no-use-before-define': [
            'error',
            {
                'variables': false
            }
        ],
        'callback-return': [
            'error'
        ],
        'global-require': [
            'error'
        ],
        'handle-callback-err': [
            'error'
        ],
        'no-new-require': [
            'error'
        ],
        'no-path-concat': [
            'error'
        ],
        'no-process-env': [
            'error'
        ],
        'no-process-exit': [
            'error'
        ],
        'no-sync': [
            'warn'
        ],
        'array-bracket-spacing': [
            'error',
            'always'
        ],
        'block-spacing': [
            'error'
        ],
        'brace-style': [
            'error'
        ],
        'camelcase': [
            'error'
        ],
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'comma-spacing': [
            'error'
        ],
        'comma-style': [
            'error'
        ],
        'computed-property-spacing': [
            'error',
            'always'
        ],
        'consistent-this': [
            'error',
            '_this'
        ],
        'eol-last': [
            'error'
        ],
        'func-call-spacing': [
            'error'
        ],
        'func-names': [
            'error'
        ],
        'func-style': [
            'error'
        ],
        'id-blacklist': [
            'error',
            'data',
            'err',
            'e',
            'cb',
            'callback'
        ],
        'jsx-quotes': [
            'error',
            'prefer-single'
        ],
        'key-spacing': [
            'error'
        ],
        'keyword-spacing': [
            'error'
        ],
        'lines-around-comment': [
            'error',
            {
                'allowBlockStart': true
            }
        ],
        'max-depth': [
            'error'
        ],
        'max-len': [
            'warn',
            120
        ],
        'max-nested-callbacks': [
            'error'
        ],
        'max-params': [
            'error'
        ],
        'max-statements-per-line': [
            'error'
        ],
        'multiline-ternary': [
            'error'
        ],
        'new-cap': [
            'error'
        ],
        'new-parens': [
            'error'
        ],
        'newline-after-var': [
            'error'
        ],
        'newline-before-return': [
            'error'
        ],
        'newline-per-chained-call': [
            'error'
        ],
        'no-array-constructor': [
            'error'
        ],
        'no-bitwise': [
            'error'
        ],
        'no-lonely-if': [
            'error'
        ],
        'no-mixed-operators': [
            'error'
        ],
        'no-multiple-empty-lines': [
            'error'
        ],
        'no-negated-condition': [
            'error'
        ],
        'no-nested-ternary': [
            'error'
        ],
        'no-new-object': [
            'error'
        ],
        'no-plusplus': [
            'error'
        ],
        'no-tabs': [
            'error'
        ],
        'no-trailing-spaces': [
            'warn'
        ],
        'no-unneeded-ternary': [
            'error'
        ],
        'no-whitespace-before-property': [
            'error'
        ],
        'object-curly-newline': [
            'error',
            {
                'minProperties': 1
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-property-newline': [
            'error'
        ],
        'one-var': [
            'error',
            'never'
        ],
        'operator-assignment': [
            'error',
            'never'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true
            }
        ],
        'semi-spacing': [
            'error'
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                'caseSensitive': false,
                'natural': true
            }
        ],
        'space-before-blocks': [
            'error'
        ],
        'space-before-function-paren': [
            'error'
        ],
        'space-in-parens': [
            'error',
            'always'
        ],
        'space-infix-ops': [
            'error'
        ],
        'space-unary-ops': [
            'error'
        ],
        'spaced-comment': [
            'error'
        ],
        'unicode-bom': [
            'error'
        ],
        'arrow-body-style': [
            'error',
            'always'
        ],
        'arrow-parens': [
            'error'
        ],
        'arrow-spacing': [
            'error'
        ],
        'generator-star-spacing': [
            'error'
        ],
        'no-confusing-arrow': [
            'error'
        ],
        'no-duplicate-imports': [
            'error'
        ],
        'no-useless-computed-key': [
            'error'
        ],
        'no-useless-constructor': [
            'error'
        ],
        'no-useless-rename': [
            'error'
        ],
        'no-useless-return': [
            'error'
        ],
        'no-var': [
            'error'
        ],
        'prefer-arrow-callback': [
            'error'
        ],
        'prefer-const': [
            'warn'
        ],
        'prefer-reflect': [
            'error'
        ],
        'prefer-rest-params': [
            'error'
        ],
        'prefer-spread': [
            'error'
        ],
        'prefer-template': [
            'error'
        ],
        'rest-spread-spacing': [
            'error'
        ],
        'symbol-description': [
            'error'
        ],
        'template-curly-spacing': [
            'error',
            'always'
        ],
        'yield-star-spacing': [
            'error'
        ],
        'func-name-matching': [
            'error'
        ],
        'no-multi-assign': [
            'error'
        ],
        'prefer-promise-reject-errors': [
            'error'
        ],
        'template-tag-spacing': [
            'error',
            'always'
        ]
    }
};
