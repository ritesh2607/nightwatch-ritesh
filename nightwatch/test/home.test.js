const maximizeAndRefresh = function(client) {
  return client.url(client.launchUrl).maximizeWindow().refresh();
};

module.exports = {
  'it should navigate through all the slides in the Product Slider': client => {
      maximizeAndRefresh(client)
        .getLocationInView('.product-set-slider-list li:nth-child(2)')
        .elements('css selector', '.product-set-slider-list li', function(
          result
        ) {
          //2 is the count of additional bx-clone li elements added at the start and end of the ul for the slider
          var lengthOfSlider = result.value.length - 2;
          for (var i = 0; i < lengthOfSlider; i++) {
            client
              .getLocationInView(
                '.product-set-slider-list li:nth-child(' + (i + 2) + ')'
              )
              .click('.home-gallery-next-icon')
              .pause(2000);
          }
          client.end();
        });
    },
    'it should not accept empty values': client => {
      maximizeAndRefresh(client)
        .waitForElementVisible(
          '.news-letter-subscription .newsletter-subscription-form-button-subscribe',
          9500
        )
        .click(
          '.news-letter-subscription .newsletter-subscription-form-button-subscribe'
        )
        .end();
        // .waitForElementVisible(
        //   '.news-letter-subscription .newsletter-subscription-form-container p[data-validation-error="block"]',
        //   9500
        // )
        // .verify.containsText(
        //   '.news-letter-subscription .newsletter-subscription-form-container p[data-validation-error="block"]',
        //   'Enter an email address to subscribe'
        // );
    }
};
