const username = 'test.paperplane@gmail.com',
  password = '123assos';

module.exports = {
  'it should have Add Rating button on the Rate only page': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .end();
    },
    'it should not submit the form when Ratings is not provided': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click('.rate-only-btn')
        .click('.ratings-only-submit-btn')
        .verify.containsText(
          '.rating-only-sec div[data-name="__overall__"] p[data-validation-error="block"]',
          'Rating is required'
        )
        .end();
    },
    'it should show THANK YOU FOR ADDING YOUR RATINGS message on submitting Ratings': client => {
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
        .end();
    },
    'it should redirect to Write Review Main form when clicked on Write Review button': client => {
      client
        .clickWriteReviewAndLogin()
        .waitForElementVisible('.product-reviews-form-new')
        .click('.rate-only-btn')
        .click('.write-a-review-btn')
        .waitForElementVisible('.product-reviews-form-actions-button-submit')
        .end();
    },
    'it should have the values that are entered for Rating': client => {
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
        .assert.attributeEquals(
          '.write-reviw-ratings-without-description div[data-name="__overall__"]',
          'data-value',
          '2'
        ).end();
    },
}