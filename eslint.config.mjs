import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import angularTemplateParser from '@angular-eslint/template-parser';

export default [
  {
    ignores: ['dist/', 'node_modules/']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': ['warn', { allow: ['error'] }]
    }
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser
    },
    rules: {}
  }
];