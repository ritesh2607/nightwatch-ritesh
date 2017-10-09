const username = 'test.paperplane@gmail.com',
  password = '123assos';


module.exports = {
  'Should submit the form when Rating and Performance parameters are provided': client => {
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
        .click('.product-reviews-form-actions-button-submit')
        .waitForElementVisible('.full-review-confirmation-msg')
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .end();
    },
    'it should submit the form when Rating, Performance parameters and Review Title and Description are provided': client => {
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
        .setValue(
          '.product-reviews-form-content-group-text',
          'demo description'
        )
        .click('.product-reviews-form-actions-button-submit')
        .waitForElementVisible('.full-review-confirmation-msg')
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .end();
    },
    'it should submit the form when Rating, Performance parameters, Review Title and Description are provided and Recommend this product is checked': client => {
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
        .setValue(
          '.product-reviews-form-content-group-text',
          'demo description'
        )
        .click('.product-reviews-form-actions-button-submit')
        .waitForElementVisible('.full-review-confirmation-msg')
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .end();
    },
}