import * as path from "node:path";
import { defineConfig } from '@rspack/cli';

const dirname = import.meta.dirname;

const config = defineConfig({
  resolve: {
    extensions: ['.js', '.css'],

    alias: {
      "~": path.resolve(dirname, "src"),
      "~assets": path.resolve(dirname, "assets"),
    }
  }
});

export default config;
