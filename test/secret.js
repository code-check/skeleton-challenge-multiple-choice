"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);
// TODO: if you have any helper functions, declare them in the `lib` folder.
const helperFunction = require("./lib.js").helperFunction;

// TODO: all `{{}}` must be populated before the tests will run successfully.
//       remember, a good test case suite fulfills the RISES mnemonic.
//       (Readable, Independent, Small, Exhaustive, Speedy)

describe(`CLI`, () => {
  let datasets = []
  let prepareDatasets;

  before(() => {
    // all codecheck commands are run before they are `assert`ed.
    // this is to improve the readability of console outputs.
    // all results are returned in `datasets`.
    // TODO: enter args below.
    prepareDatasets =  prepareDataset( datasets, ['{{arg1}}', '{{arg2}}'] )
    .then( datasets => prepareDataset( datasets, ['{{arg1}}', '{{arg2}}'] ))
    return prepareDatasets
  });

  // TODO: enter name of feature below. (ex: Memoizer)
  describe(`{{feature}}`, () => {
    // TODO: fill it() text with  meaningful description of the expected behavior.
    it(`outputs a non-empty string when {{description of condition}}`, () => {
      return prepareDatasets.then( datasets => {
        let result = datasets[{{args}}].result
        expect(result.stdout).to.be.ok;
        expect(result.stdout[0]).to.be.ok.and.a('string');
      });
    });

    it(`outputs header in the expected format when {{description of condition}}`, () => {
    return prepareDatasets.then( datasets => {
        let result = datasets[{{args}}].result
        let actualHeader = result.stdout[0].trim();
        let expectedHeader = "Subject,Mean"
        expect(actualHeader).to.equal(expectedHeader);
      });
    });

    // {{more unique it()s here...}}

  });

  describe(`{{another feature}}`, () => {

    // {{more unique it()s here...}}

  });
});
