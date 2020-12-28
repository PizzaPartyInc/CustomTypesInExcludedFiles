import { getText } from "../src/helpers/test-helpers";

async function main(): Promise<void> {
  console.log(getText({ text: "Will fail here too." }));
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
