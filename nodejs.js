module.exports = {
    env: {
        node: true,
    },
    extends: [
        'plugin:node/recommended',
        'kokarn',
    ],
    plugins: [
        'node',
    ],
    rules: {
        'no-console': [
            'off',
        ],
        'node/exports-style': [
            'error',
            'module.exports',
        ],
        'node/no-deprecated-api': [
            'error',
        ],
        'node/no-extraneous-import': [
            'error',
        ],
        'node/no-extraneous-require': [
            'error',
        ],
        'node/no-missing-import': [
            'error',
        ],
        'node/no-missing-require': [
            'error',
        ],
        'node/no-unpublished-bin': [
            'error',
        ],
        'node/no-unpublished-import': [
            'error',
        ],
        'node/no-unpublished-require': [
            'error',
        ],
        'node/no-unsupported-features/es-builtins': [
            'error',
        ],
        'node/no-unsupported-features/es-syntax': [
            'error',
        ],
        'node/no-unsupported-features/node-builtins': [
            'error',
        ],
        'node/prefer-global/buffer': [
            'error',
        ],
        'node/prefer-global/console': [
            'error',
        ],
        'node/prefer-global/process': [
            'error',
        ],
        'node/prefer-global/url': [
            'error',
            'never',
        ],
        'node/prefer-global/url-search-params': [
            'error',
            'never',
        ],
        'node/process-exit-as-throw': [
            'error',
        ],
        'node/shebang': [
            'error',
        ],
    },
};
