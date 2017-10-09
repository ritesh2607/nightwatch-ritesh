module.exports = {
  command: function() {
    return this
      .url(this.launch_url)
      .setValue('input[data-type="search-input"]','Rally Shorts')
      .pause(3000)
      .click('img[src="http://eu.dev.assos.com/Webstore Images/rally-shorts_Gold-W.jpg?resizeid=2&resizeh=213&resizew=170"]')
      //.getLocationInView('.btn-link.allign-right')
      //.waitForElementVisible('.btn-link.allign-right')
      //.click('.btn-link.allign-right')
      //.waitForElementVisible('img[src="http://eu.dev.assos.com/Webstore Images/rally-shorts_Black Volkanga-M.jpg?resizeid=22&resizeh=400&resizew=320"]')
      //.click('img[src="http://eu.dev.assos.com/Webstore Images/rally-shorts_Black Volkanga-M.jpg?resizeid=22&resizeh=400&resizew=320"]')
      .waitForElementVisible('span[title="Blue"]')
      .pause(2000)
      .click('span[title="Blue"]')
      .pause(2000)
      .click('#custcol1')
      .click('option[value="3"]')
      .pause(2000)
      .getLocationInView('button[data-type="add-to-cart"]')
      .waitForElementVisible('.cart-add-to-cart-button-button')
      .click('.cart-add-to-cart-button-button');
  }
};