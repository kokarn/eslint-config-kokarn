module.exports = {
    extends: [
        'plugin:node/recommended',
        'kokarn'
    ],
    env: {
        'node': true
    },
    plugins: [
        'node'
    ],
    rules: {
        'no-missing-import': [
            'error'
        ],
        'no-unpublished-import': [
            'error'
        ],
        'process-exit-as-throw': [
            'error'
        ]
    }
};
