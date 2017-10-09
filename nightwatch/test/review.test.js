const username = 'test.paperplane@gmail.com',
  password = '123assos';

const clickWriteReview = function(client) {
  return client
    .url(client.launchUrl)
    .maximizeWindow()
    .refresh()
    .waitForElementVisible("a[href='/Men'].header-menu-level1-anchor", 10000)
    .moveToElement("a[data-touchpoint='home'].header-menu-level1-anchor", 1, 1)
    .waitForElementVisible(".header-menu-level3 a[href='product/431']", 5000)
    .click(".header-menu-level3 a[href='product/431']")
    .pause(2000)
    .getLocationInView(
      '.product-reviews-center-container-footer-button.primary-button'
    )
    .assert.visible(
      '.product-reviews-center-container-footer-button.primary-button',
      2000
    )
    .click('.product-reviews-center-container-footer-button.primary-button');
};

describe('Write Review testing', () => {
  describe.only('Rating is mandatory', () => {
    it('Should not Submit the form if Rating and Performance parameters are not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
    });

    it('Should not Submit the form if Performance parameters are entered but rating is not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
    });

    it('Should not Submit the form if Performance parameters and Review Title - Description are entered but rating is not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
    });
  });

  describe('Performance parameters are mandatory', () => {
    it('Should not Submit the form if Rating is provided but none of the Performance parameters are entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.product-reviews-form-actions-button-submit')
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
    });

    it('Should not Submit the form if Rating, Review Title and Review Description is provided but none of the Performance parameters are entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
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
    });

    it('Should not Submit the form if Performance parameter is not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Style'] button[value='3']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='3']")
        .click('.product-reviews-form-actions-button-submit')
        .verify.containsText(
          'div[data-name="Performance"] p[data-validation-error="block"]',
          'Performance rating is required'
        )
        .end();
    });

    it('Should not Submit the form if Style parameter is not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='3']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='3']")
        .click('.product-reviews-form-actions-button-submit')
        .verify.containsText(
          'div[data-name="Style"] p[data-validation-error="block"]',
          'Style rating is required'
        )
        .end();
    });

    it('Should not Submit the form if True to Size parameter is not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='3']")
        .click("div[data-name='Style'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='3']")
        .click('.product-reviews-form-actions-button-submit')
        .verify.containsText(
          'div[data-name="True_to_Size"] p[data-validation-error="block"]',
          'True to Size rating is required'
        )
        .end();
    });

    it('Should not Submit the form if Comfort parameter is not entered', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='3']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Style'] button[value='3']")
        .click('.product-reviews-form-actions-button-submit')
        .verify.containsText(
          'div[data-name="Comfort"] p[data-validation-error="block"]',
          'Comfort rating is required'
        )
        .end();
    });
  });

  describe('Review Title and Description are dependent on each other', () => {
    it('Should not submit the form when Review title is entered but Review description is empty', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
    });

    it('Should not submit the form when Review Description is entered but Review title is empty', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
    });
  });

  describe('Valid flow checks for form submission', () => {
    it('Should submit the form when Rating and Performance parameters are provided', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click(
          ".product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click("div[data-name='Performance'] button[value='3']")
        .click("div[data-name='Style'] button[value='3']")
        .click("div[data-name='True_to_Size'] button[value='3']")
        .click("div[data-name='Comfort'] button[value='3']")
        .click('.product-reviews-form-actions-button-submit')
        .waitForElementVisible('.full-review-confirmation-msg', 120000)
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .end();
    });

    it('Should submit the form when Rating, Performance parameters and Review Title and Description are provided', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
        .waitForElementVisible('.full-review-confirmation-msg', 9500)
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .end();
    });

    it('Should submit the form when Rating, Performance parameters, Review Title and Description are provided and Recommend this product is checked', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
        .waitForElementVisible('.full-review-confirmation-msg', 9500)
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .end();
    });
  });

  describe('Thank you page for Submit Review Page', () => {
    it('Should not allow rating Performance Parameters', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
        .waitForElementVisible('.full-review-confirmation-msg', 9500)
        .verify.containsText(
          '.full-review-confirmation-msg h2',
          'THANK YOU! YOUR REVIEW IS SUBMITTED'
        )
        .assert.elementNotPresent(
          '.global-views-star-rating-area-writable-pegs'
        )
        .end();
    });

    it('Should navigate to PDP page on clicking Continue Shopping', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
        .waitForElementVisible('.full-review-confirmation-msg', 9500)
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
    });

    it('Should have the values that are entered for Rating, Performance Parameters', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
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
        .waitForElementVisible('.full-review-confirmation-msg', 9500)
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
    });
  });

  describe('Review for Rate Only page', () => {
    it('Should have Add Rating button on the Rate only page', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .end();
    });

    it('Should not submit the form when Ratings is not provided', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .click('.ratings-only-submit-btn')
        .verify.containsText(
          '.rating-only-sec div[data-name="__overall__"] p[data-validation-error="block"]',
          'Rating is required'
        )
        .end();
    });

    it('Should show THANK YOU FOR ADDING YOUR RATINGS message on submitting Ratings', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .click(
          ".rating-only-sec .product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.ratings-only-submit-btn')
        .waitForElementVisible('.rating-only-confirmation-msg', 120000)
        .verify.containsText(
          '.rating-only-confirmation-msg h2',
          'THANK YOU FOR ADDING YOUR RATINGS'
        )
        .end();
    });

    it('Should redirect to Write Review Main form when clicked on Write Review button', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .click('.write-a-review-btn')
        .waitForElementVisible(
          '.product-reviews-form-actions-button-submit',
          1000
        )
        .end();
    });

    it('Should have the values that are entered for Rating', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .click(
          ".rating-only-sec .product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.ratings-only-submit-btn')
        .waitForElementVisible('.rating-only-confirmation-msg', 120000)
        .verify.containsText(
          '.rating-only-confirmation-msg h2',
          'THANK YOU FOR ADDING YOUR RATINGS'
        )
        .assert.attributeEquals(
          '.write-reviw-ratings-without-description div[data-name="__overall__"]',
          'data-value',
          '2'
        );

      client.end();
    });
  });

  describe('Thank you page for Add Rating', () => {
    it('Should not allow adding rating', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .click(
          ".rating-only-sec .product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.ratings-only-submit-btn')
        .waitForElementVisible('.rating-only-confirmation-msg', 120000)
        .verify.containsText(
          '.rating-only-confirmation-msg h2',
          'THANK YOU FOR ADDING YOUR RATINGS'
        )
        .assert.elementNotPresent(
          '.global-views-star-rating-area-writable-pegs'
        )
        .end();
    });

    it('Should navigate to PDP page on clicking Continue Shopping', client => {
      clickWriteReview(client)
        .login(username, password)
        .waitForElementVisible('.product-reviews-form-new', 9500)
        .click('.rate-only-btn')
        .verify.containsText('.ratings-only-submit-btn', 'ADD RATING')
        .click(
          ".rating-only-sec .product-reviews-form-global-star-rating .global-views-star-rating-area-writable button[value='2']"
        )
        .click('.ratings-only-submit-btn')
        .waitForElementVisible('.rating-only-confirmation-msg', 120000)
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
    });
  });
});
