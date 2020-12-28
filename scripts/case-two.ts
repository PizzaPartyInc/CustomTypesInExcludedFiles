import { custom_namespace } from "custom/module";
import { getText } from "../src/helpers/test-helpers";

async function main(): Promise<void> {
  const test: custom_namespace.Test = { text: "Will fail." };
  console.log(getText(test));
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
