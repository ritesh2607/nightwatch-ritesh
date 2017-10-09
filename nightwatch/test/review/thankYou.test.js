const username = 'test.paperplane@gmail.com',
  password = '123assos';

module.exports = {
    'it should not allow rating Performance Parameters': client => {
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
        .assert.elementNotPresent(
          '.global-views-star-rating-area-writable-pegs'
        )
        .end();
    },
    'it should navigate to PDP page on clicking Continue Shopping': client => {
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
        .click(".btn-continue-shopping a[title='Continue shopping']")
        .waitForElementVisible(
          '.product-details-full-content-header-title',
          9500
        )
        .assert.containsText(
          '.product-details-full-content-header-title',
          'RALLY SHORTS'
        )
        .end();
    },
    'it should have the values that are entered for Rating, Performance Parameters': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='1']")
        .click("div[data-name='Style'] button[value='2']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='4']")
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
        .assert.attributeEquals(
          ".write-reviw-ratings-without-description div[data-name='__overall__']",
          'data-value',
          '2'
        )
        .assert.attributeEquals(
          ".write-reviw-ratings-without-description div[data-name='Performance']",
          'data-value',
          '1'
        )
        .assert.attributeEquals(
          ".write-reviw-ratings-without-description div[data-name='Style']",
          'data-value',
          '2'
        )
        .assert.attributeEquals(
          ".write-reviw-ratings-without-description div[data-name='True_to_Size']",
          'data-value',
          '3'
        )
        .assert.attributeEquals(
          ".write-reviw-ratings-without-description div[data-name='Comfort']",
          'data-value',
          '4'
        )
        .end();
    },
    'it should not allow adding rating': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .click(
          ".rating-only-sec .product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.ratings-only-submit-btn')
        .waitForElementVisible('.rating-only-confirmation-msg')
        .verify.containsText(
          '.rating-only-confirmation-msg h2',
          'THANK YOU FOR ADDING YOUR RATINGS'
        )
        .assert.elementNotPresent(
          '.global-views-star-rating-area-writable-pegs'
        )
        .end();
    },
    'it should navigate to PDP page on clicking Continue Shopping': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .click(
          ".rating-only-sec .product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.ratings-only-submit-btn')
        .waitForElementVisible('.rating-only-confirmation-msg')
        .verify.containsText(
          '.rating-only-confirmation-msg h2',
          'THANK YOU FOR ADDING YOUR RATINGS'
        )
        .assert.elementNotPresent(
          '.global-views-star-rating-area-writable-pegs'
        )
        .click(".btn-continue-shopping a[title='Continue shopping']")
        .waitForElementVisible(
          '.product-details-full-content-header-title',
          9500
        )
        .assert.containsText(
          '.product-details-full-content-header-title',
          'RALLY SHORTS'
        )
        .end();
    }
}