module.exports = {
  command: function(username = 'test.paperplane@gmail.com', password = '123assos', callback) {
    return this
      .url('http://test.assos.com/product/431')
      .waitForElementVisible('button.product-reviews-center-container-footer-button.primary-button')
      .moveToElement('button.product-reviews-center-container-footer-button.primary-button', 0, 0)
      .click('button.product-reviews-center-container-footer-button.primary-button')
      .waitForElementVisible('.login-register-login-form-input#login-email')
      .setValue('#login-email', username)
      .setValue('#login-password', password)
      .click(
        'button#button-login.login-register-login-submit.secondary-button'
      );
  },
};