const Jasmine = require("jasmine");
const { SpecReporter } = require("jasmine-spec-reporter");

const jasmine = new Jasmine();
jasmine.loadConfig({
  showColors: true,
  defaultTimeoutInterval: 15000,
  spec_dir: "e2e/electron",
  spec_files: ["./**/*-spec.ts"],
  helpers: ["./**/*-helper.ts"],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false,
});
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

require("ts-node").register({
  project: require("path").join(__dirname, "./tsconfig.json"),
});
jasmine.env.clearReporters();
jasmine.addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
jasmine.execute();
