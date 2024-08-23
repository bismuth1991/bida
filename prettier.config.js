/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  tailwindFunctions: ['cva'],
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
