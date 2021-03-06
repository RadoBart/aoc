/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    browser: true,
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage',
    '.eslintrc.js',
    'jest.config.js',
    'prettier.config.js',
    'src/generated/',
    'src/tests',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'no-loops',
    'immutable',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    'no-loops/no-loops': 2,
    'immutable/no-let': 2,
    'no-invalid-this': 2,
    'immutable/no-mutation': 2,
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Boolean: {
            message: 'Please use `boolean` instead',
          },
          Number: {
            message: 'Please use `number` instead',
          },
          Object: {
            message: 'Please use `{}` instead.',
          },
          String: {
            message: 'Please use `string` instead',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^(__|_)$',
          match: false,
        },
      },

      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'method',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^(__resolveType)$',
          match: false,
        },
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    complexity: [
      'error',
      {
        max: 10,
      },
    ],
    'constructor-super': 'error',
    curly: 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1, 2, 10, 100, 1000],
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx', 'rxjs/internal/operators'],
    'no-sequences': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'use-isnan': 'error',
    yoda: 'error',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          encoding: true,
          'no-dynamic-delete': true,
          'number-literal-format': true,
          'prefer-method-signature': true,
          typedef: true,
        },
      },
    ],
  },
};
