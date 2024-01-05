module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        // 'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
    rules: {
        indent: ['warn', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': ['error', 'unix'],
        'no-var': 'error',
        'prefer-const': 'warn',
        'no-console': 'warn',
        'jsx-quotes': ['error', 'prefer-double'],
        'max-len': ['error', { code: 100 }],
        'comma-dangle': ['error', 'always-multiline'],
        'import/order': [
            'error',
            {
                // groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'],
                groups: ['builtin', 'external', 'internal', 'sibling', 'index', 'object', 'parent'],
                pathGroups: [
                    {
                        pattern: '**/types',
                        group: 'parent',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'never',
            },
        ],
    },
};
