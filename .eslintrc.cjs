/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //无分号
        printWidth: 20000, //每行宽度至多100
        trailingComma: 'none', //不加对象,数组最后的逗号
        endOfLine: 'auto' //换行符不限制
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'warn'
  },
  globals: {
    ref: 'readonly',
    reactive: 'readonly',
    onMounted: 'readonly',
    watch: 'readonly',
    computed: 'readonly',
    nextTick: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineOptions: 'readonly',
    watchEffect: 'readonly'
  }
}
