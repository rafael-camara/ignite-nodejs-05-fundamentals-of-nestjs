import rocketseat from '@rocketseat/eslint-config/node'
import type { Linter } from 'eslint'
import vitest from 'eslint-plugin-vitest'

const config: Linter.Config[] = [
  ...rocketseat,
  {
    ignores: ['dist/**', 'node_modules/**'],

    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'no-new': 'off',
      '@stylistic/max-len': 'off',
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        // Vitest globals
        ...vitest.environments.env.globals,
      },
    },
  },
]

export default config
