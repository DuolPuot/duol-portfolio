module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-scss',
  rules: {
    // Allow Tailwind at-rules and custom at-rules used by PostCSS
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'layer', 'responsive', 'variants', 'screen'] }],
    // You can add other project-specific rules here
  },
};
