module.exports = {
  'it should not submit the form when Review title is entered but Review description is empty': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='3']")
        .click("div[data-name='Style'] button[value='3']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='3']")
        .setValue(
          '.product-reviews-form-content-group-input#title',
          'demo title'
        )
        .click('.product-reviews-form-actions-button-submit')
        .verify.containsText(
          "div[data-input='text'] p[data-validation-error='block']",
          'Text is required'
        )
        .end();
    },
    'it should not submit the form when Review Description is entered but Review title is empty': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='3']")
        .click("div[data-name='Style'] button[value='3']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='3']")
        .setValue(
          '.product-reviews-form-content-group-text',
          'demo description'
        )
        .click('.product-reviews-form-actions-button-submit')
        .verify.containsText(
          "div[data-input='title'] p[data-validation-error='block']",
          'Title is required'
        )
        .end();
    },
}