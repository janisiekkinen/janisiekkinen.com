#!/usr/bin/env node
/**
 * Wrangler CI runs `npx wrangler deploy`, which then runs `npx opennextjs-cloudflare deploy`
 * without a build. OpenNext then exits: "Could not find compiled Open Next config".
 * This wrapper builds first when the compiled config is missing, then calls the real CLI.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const realBin = join(process.cwd(), "node_modules/@opennextjs/cloudflare/dist/cli/index.js");
const args = process.argv.slice(2);
const command = args[0];
const compiledConfig = join(process.cwd(), ".open-next/.build/open-next.config.edge.mjs");

function run(argv) {
  const result = spawnSync(process.execPath, [realBin, ...argv], {
    stdio: "inherit",
    env: process.env,
  });
  if (result.status) process.exit(result.status);
}

if (!existsSync(realBin)) {
  console.error(`Could not find OpenNext CLI at ${realBin}`);
  process.exit(1);
}

if ((command === "deploy" || command === "preview") && !existsSync(compiledConfig)) {
  run(["build"]);
}

run(args);
