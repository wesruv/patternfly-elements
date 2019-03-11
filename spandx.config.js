module.exports = {
  // host: "qa.foo.redhat.com",
  host: {
    dev: 'dev.foo.redhat.com',
    qa: 'qa.foo.redhat.com',
    stage: 'stage.foo.redhat.com',
    prod: 'prod.foo.redhat.com',
  },
  port: 1234,
  open: false,
  startPath: "/",
  verbose: true,
  routes: {
    "/elements": "./elements",
    "/doc": "./doc",
    // "/favicon.ico": "./favicon.ico",
    // "/": "./node_modules",
    "/@webcomponents": "./node_modules/@webcomponents",
    "/themes": "./themes",
    "/foo": "./foo",
    // "/hydra":  { host: "https://access.qa.redhat.com" },

    '/': {
      host: {
        dev: 'https://access.devgssci.devlab.phx1.redhat.com',
        qa: 'https://access.qa.redhat.com',
        stage: 'https://access.stage.redhat.com',
        prod: 'https://access.redhat.com',
      }
    },
  },
  bs: {
    watchOptions: {
      ignoreInitial: true,
      ignored: ["node_modules"]
    },
    middleware: [require("compression")()],
    https: true,
    rewriteRules: [
      {
        match: 'sso.dev2.redhat.com',
        replace: 'sso.qa.redhat.com',
      },
    ],
  }
};
