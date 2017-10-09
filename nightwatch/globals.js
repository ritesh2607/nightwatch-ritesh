module.exports = {
  abortOnAssertionFailure : false,
  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval : 300,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout : 30000,
  retryAssertionTimeout: 5000,
}