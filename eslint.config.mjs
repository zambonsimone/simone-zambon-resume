import tsEslint from "typescript-eslint";
import reactEslint from "./react-eslint-config.mjs";

export default tsEslint.config(
  ...tsEslint.configs.recommended,
  reactEslint,
)
