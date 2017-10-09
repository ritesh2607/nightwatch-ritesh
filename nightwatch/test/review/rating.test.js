module.exports = {
  'it should not Submit the form if Rating and Performance parameters are not entered': client => {
    client
      .clickWriteReviewAndLogin()
      .waitForElementVisible('.product-reviews-form-new')
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        'div[data-name="__overall__"] p[data-validation-error="block"]',
        'Rating is required'
      )
      .verify.containsText(
        'div[data-name="Performance"] p[data-validation-error="block"]',
        'Performance rating is required'
      )
      .verify.containsText(
        'div[data-name="Style"] p[data-validation-error="block"]',
        'Style rating is required'
      )
      .verify.containsText(
        'div[data-name="True_to_Size"] p[data-validation-error="block"]',
        'True to Size rating is required'
      )
      .verify.containsText(
        'div[data-name="Comfort"] p[data-validation-error="block"]',
        'Comfort rating is required'
      )
      .end();
  },
  'it should not Submit the form if Performance parameters are entered but rating is not entered': client => {
    client
      .clickWriteReviewAndLogin()
      .waitForElementVisible('.product-reviews-form-new')
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name='True_to_Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        'div[data-name="__overall__"] p[data-validation-error="block"]',
        'Rating is required'
      )
      .end();
  },
  'it should not Submit the form if Performance parameters and Review Title - Description are entered but rating is not entered': client => {
    client
      .clickWriteReviewAndLogin()
      .waitForElementVisible('.product-reviews-form-new')
      .click("div[data-name='Performance'] button[value='3']")
      .click("div[data-name='Style'] button[value='3']")
      .click("div[data-name='True_to_Size'] button[value='3']")
      .click("div[data-name='Comfort'] button[value='3']")
      .setValue(
        '.product-reviews-form-content-group-input#title',
        'demo title'
      )
      .setValue(
        '.product-reviews-form-content-group-text',
        'demo description'
      )
      .click('.product-reviews-form-actions-button-submit')
      .verify.containsText(
        'div[data-name="__overall__"] p[data-validation-error="block"]',
        'Rating is required'
      )
      .end();
  },
};
