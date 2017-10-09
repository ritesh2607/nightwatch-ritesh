const std = "STANDARD";
const exp = "EXPRESS";
const costStdCHF = "";
const costExpCHF = "";
const costStdEUR = "";
const costExpEUR = "";
const costStdGBP = "";
const costExpGBP = "";
const costStdNOK = "";
const costExpNOK = "";
const costStdSEK = "";
const costExpSEK = "";
const promoCode = "";
const promoCodeValue = 350;

module.exports = {
    'it Should display the default Shipping options and associated price, correctly': client => {
        client
            .goToCart(true)
            .getLocationInView(".shipping-details-container")
            .element('css selector', '.ship-method-container:nth-child(1) .ship-method-radio', function (response) {
                client.elementIdSelected(response.value.ELEMENT, function (result) {
                    client.assert.ok(result.value, 'Standard shipping method is selected by default');
                });
            })
            .assert.containsText(".shipping-details-container .ship-method-container:nth-child(1) .ship-method-sub-container", std)
            .assert.containsText(".shipping-details-container .ship-method-container:nth-child(2) .ship-method-sub-container", exp)
           // .assert.containsText(".shipping-details-container div:nth-child(1) .ship-method-cost", "SFr."+costStdCHF)
           // .assert.containsText(".shipping-details-container div:nth-child(2) .ship-method-cost", "SFr."+costExpCHF)
            .assert.containsText(".shipping-cost-holder", costStdCHF) //Check that the STANDARD shipping price is displayed, by default
            .end();
    },

    'it Should display the correct Shipping price, if shipping method is changed': client => {
        client
            .goToCart(true)
            .getLocationInView(".shipping-details-container")
            .click(".ship-method-checkbox input:nth-child(2)")
            .pause(5000)
            .assert.containsText(".shipping-cost-holder", costExp)
            .end();
    },

    'it Should display the correct Shipping price and currency, if currency is changed from the Settings dropdown': client => {
        goToCartFor300(client)
            .click(".header-menu-settings-carret")
            .elements('css selector', '#currencyselector option', function (result) {
                var randomElement = Math.floor(Math.random() * result.value.length + 1);
                client
                    .click(".header-menu-settings-carret")
                    .click("#currencyselector option(" + randomElement + ")")
                    .click(".action-link")
                    .pause(5000)
                    .getText(".currency-code", function (res) {
                        switch (res) {
                            case "SFR.":
                                client
                                    .assert.containsText(".shipping-details-container div:nth-child(1) .ship-method-cost", costStdCHF)
                                    .assert.containsText(".shipping-details-container div:nth-child(2) .ship-method-cost", costExpCHF)
                                    .assert.containsText(".shipping-cost-holder", costStdCHF);
                                break;
                            case "€":
                                client
                                    .assert.containsText(".shipping-details-container div:nth-child(1) .ship-method-cost", costStdEUR)
                                    .assert.containsText(".shipping-details-container div:nth-child(2) .ship-method-cost", costExpEUR)
                                    .assert.containsText(".shipping-cost-holder", costStdEUR);
                                break;
                            case "£":
                                client
                                    .assert.containsText(".shipping-details-container div:nth-child(1) .ship-method-cost", costStdGBP)
                                    .assert.containsText(".shipping-details-container div:nth-child(2) .ship-method-cost", costExpGBP)
                                    .assert.containsText(".shipping-cost-holder", costStdGBP);
                                break;
                            case "KR":
                                client
                                    .assert.containsText(".shipping-details-container div:nth-child(1) .ship-method-cost", costStdNOK)
                                    .assert.containsText(".shipping-details-container div:nth-child(2) .ship-method-cost", costExpNOK)
                                    .assert.containsText(".shipping-cost-holder", costStdNOK);
                                break;
                        }
                    })
                    .end();

            })
    },

    'it Should disable the "+" icon for adding more items, once the counter reaches the number of available items': client => {
        goToCartFor200(client)
            .getText(".item-views-cell-actionable-info div:nth-child(4) span:nth-child(2)", function (result) {
                var numOfItems = Number(result.value);
                console.log(numOfItems);
                for (var i = 1; i <= numOfItems; i++) {
                    client
                        .click(".cart-item-summary-quantity-add")
                        .pause(5000);
                    // if (i === numOfItems) {
                    //     assert.cssProperty('.cart-item-summary-quantity-add','disabled',true);
                    //     break;
                    // }
                }
            })
            .end();


    },

    'it Should display the Shipping cost as FREE for Standard Shipping, if the product costs more than $200': client => {
        goToCartFor300(client)
            .getLocationInView(".shipping-details-container")
            .assert.containsText(".shipping-cost-free", "FREE")
            .end();
    },

    'it Should display the Shipping cost as FREE for Express Shipping, if the product costs more than $200': function (client) {
        goToCartFor300(client)
            .getLocationInView(".shipping-details-container")
            .click(".ship-method-checkbox input:nth-child(2)")
            .assert.containsText(".shipping-cost-free", "FREE")
            .end();
    },

    'it Should display the Shipping cost as FREE for Standard Shipping, if the sub-total is greater than $200': client => {
        goToCartFor200(client)
            .click(".cart-item-summary-quantity-add")
            .pause(5000)
            .getLocationInView(".shipping-details-container")
            .pause(5000)
            .getText('', function (result) {
                var price = Number(result.value);
                if (price > 200) {
                    client.assert.containsText(".shipping-cost-free", "FREE")
                        .end();
                }
                else {
                    client.assert.containsText(".shipping-cost-holder", costStdCHF) //Check that the STANDARD shipping price is displayed, by default
                        .end();
                }

            });

    },

    'it Should not accept blank promo code, and retain the price of estimated total': client => {
        goToCartFor300(client)
            .getLocationInView(".cart-promocode-form-summary-input")
            .click(".cart-promocode-form-summary-button-apply-promocode")
            .pause(3000)
            .assert.containsText('.global-views-message.global-views-message-error.alert', 'Promo Code is required')
            .assert.containsText('.cart-summary-amount-total', estimatedTotal)
            .end();

    },

    'it Should not accept invalid promo code, and retain the price of estimated total': client => {
        goToCartFor300(client)
        var estimatedTotal = client.getText('.cart-summary-amount-total');
        client
            .getLocationInView(".cart-promocode-form-summary-input")
            .setValue(".cart-promocode-form-summary-input", "INVALID")
            .click(".cart-promocode-form-summary-button-apply-promocode")
            .pause(3000)
            .assert.containsText('.global-views-message.global-views-message-error.alert', 'Coupon code is invalid or unrecognised')
            .assert.containsText('.cart-summary-amount-total', estimatedTotal)
            .end();

    },

    'it Should accept valid promo code and reduce the price under Estimated Total': client => {
        goToCartFor300(client)
        var estimatedTotal = client.getText('.cart-summary-amount-total');
        client
            .getLocationInView(".cart-promocode-form-summary-input")
            .getText('.cart-summary-amount-total', function (result) {
                var estimatedTotal = Number(result.value)
                client
                    .setValue(".cart-promocode-form-summary-input", promoCode)
                    .click(".cart-promocode-form-summary-button-apply-promocode")
                    .pause(3000);

                var expectedTotal = estimatedTotal - promoCodeValue;
                client
                    .assert.containsText('.cart-summary-amount-total', expectedTotal)
                    .end();
            });


    },

    'it Should remove an item from the cart, when the Cancel button is clicked': client => {
        goToCartFor300(client)
            .click('cart-item-actions-item-list-actionable-edit-content-remove')
            .pause(3000)
            .assert.elementNotPresent(".cart-lines-row")
            .end();

    },
 }