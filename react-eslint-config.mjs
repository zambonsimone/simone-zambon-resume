import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default {
    name: "react-eslint",
    plugins: {
        "react": reactPlugin,
        "react-hooks": reactHooksPlugin
    },
    languageOptions: {
        parserOptions: reactPlugin.configs.recommended.parserOptions,
        ecmaVersion: 'latest',
    },
    rules: {
        ...reactPlugin.configs.recommended.rules,
        ...reactHooksPlugin.configs.recommended.rules,
        "react/jsx-no-literals": ["warn", {
            noStrings: true,    
            ignoreProps: true
        }],
        "react/jsx-key": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
};