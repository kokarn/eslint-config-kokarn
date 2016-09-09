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
        'node/no-missing-import': [
            'error'
        ],
        'node/no-unpublished-import': [
            'error'
        ],
        'node/process-exit-as-throw': [
            'error'
        ]
    }
};
