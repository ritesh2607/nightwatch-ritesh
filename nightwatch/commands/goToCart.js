module.exports = {
    command: function (withShippingPrice) {
        var className;
        if (withShippingPrice === true) {
            className = "nth-child(2)";
        }
        else {
            className = "nth-child(3)";
        };

        return this
            .url(this.launchUrl)
            .waitForElementVisible(".MEN",function(){
                console.log("Menu displayed");
            })
            .click(".MEN",function(){
                console.log("Menu clicked");
            })
            .waitForElementVisible(".category-shop-by-activity.content-section.align-center.pad-bottom-zero h2", 5000)
            .pause(5000)
            .getLocationInView(".home-gallery-next-icon")
            .moveToElement(`.product-set-slider-list li:nth-child(1) .item-card .item-block-container:${className} .item-card-image-block`, 10, 5)
            .click(`.product-set-slider-list li:nth-child(1) .item-card .item-block-container:${className} .item-card-image-block .add-to-cart-btn`)
            .pause(5000)
            .click(`.product-set-slider-list li:nth-child(1) .item-card .item-block-container:${className} .item-card-image-block .size-options-drop-down`)
            .pause(5000)
            .click(`.product-set-slider-list li:nth-child(1) .item-card .item-block-container:${className} .item-card-image-block .size-options-drop-down option:nth-child(2)`)
            .pause(5000)
            .click(`.product-set-slider-list li:nth-child(1) .item-card .item-block-container:${className} .item-card-image-block .add-to-cart-btn-block`)
            .pause(1000)
            .waitForElementVisible(".header-mini-cart-menu-cart-icon")
            .click(".header-mini-cart-menu-cart-link", function () {
                console.log("Clicked on the cart icon");
            })
            .pause(5000)
            .click(".header-mini-cart-button-view-cart")
            .waitForElementVisible(".ship-method-container:nth-child(1)", 3000)

    },
};