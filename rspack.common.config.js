import * as path from "node:path";
import { defineConfig } from '@rspack/cli';

const dirname = import.meta.dirname;

const config = defineConfig({
  resolve: {
    extensions: ['.js', '.css'],

    alias: {
      "~": path.resolve(dirname, "src"),
      "~components": path.resolve(dirname, "src", "components"),
      "~core": path.resolve(dirname, "src", "core"),
      "~utils": path.resolve(dirname, "src", "utils"),
      "~assets": path.resolve(dirname, "assets"),
    }
  }
});

export default config;
