// This type declaration file for Faker is only necessary
// until Faker is upgraded to v6, which includes a rewrite
// to TypeScript. We can also remove the @types/faker
// package while doing the upgrade.
declare module '@faker-js/faker' {
  import faker from 'faker';

  export default faker;
}
