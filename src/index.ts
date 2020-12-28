import { custom_namespace } from "custom/module";
import { getText } from "./helpers/test-helpers";

async function main(): Promise<void> {
  console.log("----------------");
  const test: custom_namespace.Test = { text: "It Works!" };
  console.log(getText(test));
  console.log("----------------");
}

main().catch((error) => {
  console.log(error);
  process.exit(-1);
});
