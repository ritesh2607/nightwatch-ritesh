const username = 'ritesh@paperplane.net',
    password = 'ritesh123';

const homepageUrl = function (client) {
    return client.url(client.launchUrl).maximizeWindow().refresh();

}


const newsletter = function (client) {
    return client.url(client.launchUrl).maximizeWindow().refresh()
        .waitForElementVisible('.header-profile-login-link', 5000)
        .assert.visible('.header-profile-login-link')
        .click('.header-profile-login-link')
        .pause(2000)
        .login(username, password)
        .waitForElementVisible('a[data-id="emailpreferences"]', 25000)
        .assert.visible('a[data-id="emailpreferences"]')
        .click('a[data-id="emailpreferences"]');

}



describe('Homepage', () => {
    it('should click on slider image and navigate', client => {
        homepageUrl(client)
            .waitForElementVisible('', 10000)
            .assert.visible('')
            .click('')
            .pause(1000)
            .assert.urlContains('custitem_webstore_activity')
            .end(); //fails

    }),

        it('should click on SHOP MEN and navigate', client => {
            homepageUrl(client)
                .getLocationInView('.btn-link.allign-right')
                .waitForElementVisible('.btn-link.allign-right', 5000)
                .assert.visible('.btn-link.allign-right')
                .click('.btn-link.allign-right')
                .pause(1000)
                .assert.urlContains('com/Men')
                .end();

        });

    it('should click on NEXT on BLOG Slider and navigate', client => {
        homepageUrl(client)
            .getLocationInView('.home-blog-cms-holder')
            .waitForElementVisible('.home-blog-cms-holder', 5000)
            .assert.visible('.home-blog-cms-holder')
            .pause(5000)
            .click('.bx-next-js.bx-next')
            .pause(5000)
            //.assert.containsText('.news-blog-slider-subheader','A MONUMENTAL DAY')
            .end(); //fails

    });

    it('should click on NEXT on SHOP BY Slider and navigate', client => {
        homepageUrl(client)
            .getLocationInView('.product-slider-set')
            .waitForElementVisible('.product-slider-set', 5000)
            .assert.visible('.product-slider-set')
            .click('a.home-gallery-next-icon')
            .pause(5000)
            .verify.containsText('#home-page > div > div.product-slider-set > div > div > div.bx-viewport > div > div.bx-viewport > ul > li:nth-child(3) > div.product-set-header > p', 'FOR THE BMC RACE')
            .click('a.home-gallery-next-icon')
            .getLocationInView('.product-slider-set')
            .pause(5000)
            .verify.containsText('#home-page > div > div.product-slider-set > div > div > div.bx-viewport > div > div.bx-viewport > ul > li:nth-child(4) > div.product-set-header > p', 'SEASONAL RACING')
            .pause(5000)
            .click('a.home-gallery-next-icon')
            .getLocationInView('.product-slider-set')
            .verify.containsText('#home-page > div > div.product-slider-set > div > div > div.bx-viewport > div > div.bx-viewport > ul > li:nth-child(5) > div.product-set-header > p', 'FOR EXPERIENCE')
            .end()
    });

    it('should check the NEWSLETTER subscribe and unsubscribe', client => {
        newsletter(client)
            .pause(5000)
            .assert.containsText('.profile-emailpreferences-title.section-title', 'Newsletter')
            .assert.visible('input[type="text"]:disabled');
        console.log('abc');

        /*var buttonText1 =  client.element('css selector','.profile-emailpreferences-submit.primary-button',function(res){
                return res.getText();
        });*/

        //var buttonText2 = buttonText1.getText();

        //console.log(buttonText2.getText());

        client.getText(".profile-emailpreferences-submit.primary-button", function (result) {
            var abc = result.value;
            console.log(abc);
            if (abc === "UNSUBSCRIBE") {
                client
                    .click('input#emailsubscribe')
                    .click('.profile-emailpreferences-submit.primary-button')
                    .waitForElementVisible('.message-block .confirmation-icon', 5000)
                    .pause(5000)
                    .assert.containsText('.global-views-message.global-views-message-success.alert', 'Email Preferences successfully saved');
                console.log('UNSUBCRIBE DONE');
                client.end();
            }

            else {
                client
                    .click('input#emailsubscribe')
                    .click('.profile-emailpreferences-submit.primary-button')
                    .waitForElementVisible('.message-block .confirmation-icon', 5000)
                    .pause(5000)
                    .assert.containsText('.global-views-message.global-views-message-success.alert', 'Email Preferences successfully saved');
                console.log('Subscribe Done');
                client.end();

            }
        });






    });

})