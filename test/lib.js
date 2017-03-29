const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

module.exports.prepareDataset = function( $datasets, args) {
  // runs all CLI commands and saves them in `$datasets` before evaluation.
  return app.codecheck(...args)
  .then( result => {
    let dataset = {};
    let nickname = args.join("_")
    dataset.result = result;
    // TODO: you can optionally add expected values to `dataset` here:
    // try{
    //   dataset.expectedResult = require(`./output/${nickname}.json`);
    // }
    // finally {
    //   //do something here
    // }
    if ($datasets[nickname] === undefined){ $datasets[nickname] = {} };
      $datasets[nickname] = dataset;
      return $datasets;
    }
  })
}

module.exports.helperFunction = function(something){
  // TODO: describe purpose of helperFunction here
  return something
}
