module.exports = {
    'extends': 'airbnb',
    "plugins": [
        "react",
    ],
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'indent': ['warn', 4],
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4]
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
}
