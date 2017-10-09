const compareData = require("./productCategory.json");
const clickMen = function(client) {
  return client
    .url(client.launchUrl)
    .maximizeWindow()
    .refresh()
    .waitForElementVisible(".ditch-desktop a[href='/Men'].header-menu-level1-anchor", 5000)
    .click(".ditch-desktop a[href='/Men'].header-menu-level1-anchor")
    .waitForElementVisible(".category-shop-by-activity.content-section.align-center.pad-bottom-zero h2", 5000);
}

module.exports = {
    'it should verify the content of the Leaderboard banner': client => {
        clickMen(client)
        .pause(5000)
        .element('css selector', '.leader-board-product-headline', function(
            result
        ) {
            if (result.value && result.value.ELEMENT) {
            // Element is present, do the appropriate tests
            client
                .verify.containsText(".leader-board-product-headline", compareData.leaderboardBanner.headline)
                .verify.containsText(".leader-board-banner-btn", compareData.leaderboardBanner.button)
                .assert.visible(".ditch-desktop a[href='/Men'].header-menu-level1-anchor", 2000)
                .end();
            } else {
            // Element is not present.

            client.end();
            }
        });
    },
    'it should redirect to the appropriate template, when the Leaderboard banner is clicked': client => {
        clickMen(client)
        .pause(5000)
        .element('css selector', '.leader-board-product-headline', function(
            result
        ) {
            if (result.value && result.value.ELEMENT) {
            // Element is present, do the appropriate tests
            client
                .click('.leader-board-product-headline').pause(5000)
                .waitForElementVisible(".ditch-desktop a[href='/Men'].header-menu-level1-anchor", 2000)
                .pause(5000)
                .assert.visible(".ditch-desktop a[href='/Men'].header-menu-level1-anchor", 2000)
                .end();
            } else {
            // Element is not present.

            client.end();
            }
        });
    },
    'it should allow to open and close the the YouTube video in a modal': (client) => {
        clickMen(client)
        .pause(5000)
        .element('css selector', '.video-banner-link', function(result) {
            if (result.value && result.value.ELEMENT) {
            client
                .getLocationInView(".video-banner-link")
                .click(".video-banner-link")
                .frame("#category-video-banner-iframe")
                .pause(10000)
                // .waitForElementVisible(".ytp-large-play-button.ytp-button",5000)
                //.click(".ytp-large-play-button.ytp-button", function () { console.log("Clicked on play button"); });
                .frameParent()
                .click(".global-views-modal-content-header-close")
                .end();
            } else {
            // Element is not present.

            client.end();
            }

        });

    },
    'it should redirect to the PDP, when SHOP NOW is clicked in the video banner': client => {
        clickMen(client)
        .pause(5000)
        .element('css selector', '.video-banner-link', function(result) {
            if (result.value && result.value.ELEMENT) {
            client
                .getLocationInView(".video-banner-link")
                .click(".text-banner-link")
                .waitForElementVisible(".ditch-desktop a[href='/Men'].header-menu-level1-anchor", 2000, function() {
                client.pause(5000);

                })
                .end();
            } else {
            // Element is not present.

            client.end();
            }

        });

    },
    'it should open a new tab when the the READ MORE link is clicked, in the blog section': (client) => {
        clickMen(client)
        .pause(5000)
        .element('css selector', 'li:first-child .news-blog-slider-content', function(
            result
        ) {
            if (result.value && result.value.ELEMENT) {
            // Element is present, do the appropriate tests
            client
                .pause(5000)
                .getLocationInView(".category-slider-thumbnail-link.category-slider-read-1")
                .click(".category-slider-thumbnail-link.category-slider-read-1")
                .pause(5000)
                .windowHandles(function(result) {
                var newWindow;
                client.verify.equal(result.value.length, 2, 'There should be 2 windows open');
                newWindow = result.value[1];
                client.switchWindow(newWindow)
                    .end();
                })

            } else {
            // Element is not present.
            console.log('Blog area unavailable');
            client.end();
            }
        });

    },
    'it should click on any random link, under CLOTHING': client => {
        clickMen(client)
        .pause(5000)
        .elements(
            'css selector',
            '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(2) li',
            function(result) {
            var randomElement = Math.floor(
                Math.random() * result.value.length + 1
            );
            client.click(
                '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(2) li:nth-child(' + randomElement + ') a'
            );
            client.pause(10000);
            client.end();
            }
        );
    },
    'it should click on any random link, under ACCESSORIES': client => {
        clickMen(client)
        .pause(5000)
        .elements(
            'css selector',
            '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(4) li',
            function(result) {
            var randomElement = Math.floor(
                Math.random() * result.value.length + 1
            );
            client.getLocationInView(".facets-faceted-navigation-item-category-facet-optionlist:nth-child(4) li:nth-child(" + randomElement + ")");
            client.click(
                '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(4) li:nth-child(' + randomElement + ') a'
            );
            client.pause(10000);
            client.end();
            }
        );
    },
    'it should click on any random link, under SPECIALS': client => {
        clickMen(client)
        .pause(5000)
        .elements(
            'css selector',
            '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(6) li',
            function(result) {
            var randomElement = Math.floor(
                Math.random() * result.value.length + 1
            );
            client.getLocationInView(".facets-faceted-navigation-item-category-facet-optionlist:nth-child(6) li:nth-child(" + randomElement + ")");
            client.click(
                '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(6) li:nth-child(' + randomElement + ') a'
            );
            client.pause(10000);
            client.end();
            }
        );
    },
    'it should click on any random link, under COLLABORATIONS': client => {
        clickMen(client)
        .pause(5000)
        .elements(
            'css selector',
            '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(8) li',
            function(result) {
            var randomElement = Math.floor(
                Math.random() * result.value.length + 1
            );
            client.getLocationInView(".facets-faceted-navigation-item-category-facet-optionlist:nth-child(8) li:nth-child(" + randomElement + ")");
            client.click(
                '.facets-faceted-navigation-item-category-facet-optionlist:nth-child(8) li:nth-child(' + randomElement + ') a'
            );
            client.pause(10000);
            client.end();
            }
        );
    },
    'it should navigate through all the slides in the Product Slider': client => {
        clickMen(client)
        .pause(5000)
        .getLocationInView('.facets-facet-browse-pagination')
        .elements('css selector', '.product-set-slider-list li', function(
            result
        ) {
            var lengthOfSlider = result.value.length - 2;
            for (var i = 0; i < lengthOfSlider; i++) {
            client.click('.product-details-image-gallery-next-icon')
                .pause(2000);
            }
            client.end();
        });
    },
    'it should click on a random product in the Product Slider': client => {
        clickMen(client)
        .pause(5000)
        .getLocationInView(".product-set-slider-list")
        .elements('css selector', '.product-set-slider-list li:first-child .item-card .item-block-container', function(result) {
            var randomElement = Math.floor(Math.random() * result.value.length + 1);
            client.click('.product-set-slider-list li:first-child .item-card .item-block-container:nth-child(' + randomElement + ') .item-card-image-block');
        });
    },
}