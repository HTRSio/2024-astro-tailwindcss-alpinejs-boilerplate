module.exports = {
  root: true,
  extends: [
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:eslint-comments/recommended",
    "plugin:regexp/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  parserOptions: {
    project: "tsconfig.eslint.json", // Update this line
    extraFileExtensions: [".astro"],
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "sort-imports": "off",
    "import/order": "off",
    "@typescript-eslint/consistent-indexed-object-style": [
      "warn",
      "index-signature",
    ],
    "@typescript-eslint/consistent-type-definitions": "warn",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-empty-interface": [
      "warn",
      { allowSingleExtends: true },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/triple-slash-reference": ["error", { path: "always" }],
    curly: "warn",
    "func-names": ["warn", "as-needed"],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  overrides: [
    {
      files: "*.astro",
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "import/no-unresolved": "off",
      },
    },
  ],
};
