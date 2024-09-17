import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

export default [
  { files: [ '**/*.{js,mjs,cjs,jsx}' ] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactConfig,

  {
    rules: {

      // General

      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'linebreak-style': [ 'warn', 'windows' ],

      // Semicolons

      'no-extra-semi': 'warn',
      semi: [ 'warn', 'never' ],
      '@typescript-eslint/semi': [ 'warn', 'never' ],
      '@typescript-eslint/no-extra-semi': 'warn',

      // Quotes

      quotes: [ 'warn', 'single' ],
      '@typescript-eslint/quotes': [ 'warn', 'single' ],

      // Indentation

      indent: [ 'error', 2 ],
      '@typescript-eslint/indent': [ 'warn', 2 ],
      'indent-legacy': [ 'warn', 2 ],

      // Spacing

      'space-before-function-paren': [ 'warn', 'always' ],
      'space-before-blocks': [ 'warn', 'always' ],
      'space-in-parens': [ 'warn', 'never' ],
      'keyword-spacing': [ 'warn', { before: true, after: true } ],
      'object-curly-spacing': [ 'warn', 'always' ],
      'array-bracket-spacing': [ 'warn', 'always' ],
      '@typescript-eslint/no-namespace': [ 'warn', { allowDeclarations: true } ],
      '@typescript-eslint/space-before-blocks': 'warn',
      'template-tag-spacing': [ 'warn', 'never' ],
      'no-mixed-spaces-and-tabs': [ 'warn', 'smart-tabs' ],
      'no-multiple-empty-lines': [ 'warn', { max: 1, maxEOF: 0 } ],
      'block-spacing': 'warn',
      '@typescript-eslint/block-spacing': 'warn',
      'key-spacing': [ 'warn', { beforeColon: false, afterColon: true } ],
      '@typescript-eslint/key-spacing': 'warn',
      '@typescript-eslint/adjacent-overload-signatures': 'warn',
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-trailing-spaces': [ 'error', { 'skipBlankLines': false, 'ignoreComments': false } ],
      'no-multi-spaces': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
    }
  }
];