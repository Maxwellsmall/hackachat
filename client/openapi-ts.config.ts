import { defineConfig } from "@hey-api/openapi-ts";
import "dotenv/config";

export default defineConfig({
  input: `${process.env.VITE_API_URL}/docs-json`,
  output: "./lib/api",
  plugins: [
    "@hey-api/typescript",
    { name: "@hey-api/transformers", dates: true, bigInt: true },
    { name: "@hey-api/client-next" },
    {
      name: "@hey-api/sdk",
      auth: true,
      transformer: true,
      operations: {
        container: "class",
        strategy: "byTags",
        containerName: { casing: "camelCase" },
      },
    },
  ],
});
