# Reproduction steps

- run `npm i` - install dependencies
- run `npm run start` - will build the project and output `It Works!`
  to the console
- run `npm run case-one` - will run jest test successfully. Navigating to `src/case-one.spec.ts` will highlight `"custom/module"` with red with error `Cannot find module 'custom/module' or its corresponding type declarations.`
- run `npm run case-two` - will fail with error `scripts/case-two.ts:1:34 - error TS2307: Cannot find module 'custom/module' or its corresponding type declarations.`
  - Navigating to `scripts/case-two.ts` will highlight import with the same error as for the test file.
- run `npm run case-three` - will fail with error `src/helpers/test-helpers.ts:1:34 - error TS2307: Cannot find module 'custom/module' or its corresponding type declarations.`
  - Navigating to `scripts/case-three.ts` will not show any errors, because type is used only in an imported function, and in that file (`src/helpers/test-helpers.ts`) custom module is resolved successfully because tsconfig actually picks it up.
- `case-two-works` and `case-three-works` scripts are just there to show that scripts can run in a `transpile-only` mode, but that is a workaround that would be preferable to avoid, because it can hide valid errors.
