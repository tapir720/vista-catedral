module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
      'react-app',
      'plugin:prettier/recommended',
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended' // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
        tsx: true
      }
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      // example of cancelling rule @ /src/components/travel/HotelList.tsx configuration keys use _
      // instead of camelcase
      '@typescript-eslint/camelcase': 'off',
      'react/prop-types': 0, // Typescript is enough for type checking
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
      }
    }
  };
  