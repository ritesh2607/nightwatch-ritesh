module.exports = {
  command: function(username, password, callback) {
    this.waitForElementVisible(
      '.login-register-login-form-input#login-email',
      10000
    )
      .setValue('#login-email', username)
      .setValue('#login-password', password)
      .click(
        'button#button-login.login-register-login-submit.secondary-button'
      );
  },
};
