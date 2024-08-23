/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: [
    '@typescript-eslint', //
    'perfectionist',
    'prettier',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        'groups': [
          'side-effect',
          'side-effect-style',
          [
            'type',
            'parent-type',
            'sibling-type',
            'index-type',
            'internal-type',
            'external-type',
            'builtin-type',
          ],
          'react',
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
          },
        },
        'internal-pattern': ['~/**'],
        'newlines-between': 'always',
        'type': 'line-length',
        'max-line-length': 80,
        'order': 'desc',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'line-length',
        order: 'desc',
      },
    ],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    // '@typescript-eslint/consistent-type-imports': [
    //   'error',
    //   {
    //     fixStyle: 'separate-type-imports',
    //     prefer: 'type-imports',
    //   },
    // ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'prettier/prettier': 'error',
  },
}
module.exports = config
