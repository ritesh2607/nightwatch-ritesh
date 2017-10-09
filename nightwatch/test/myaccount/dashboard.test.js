module.exports = {

    'it Checking PERSONAL INFORMATION button in DASHBOARD': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('#content > div > section > div:nth-child(4) > div:nth-child(1) > div > a')
            .getLocationInView('#content > div > section > div:nth-child(4) > div:nth-child(1) > div > a')
            .pause(5000)
            .click('#content > div > section > div:nth-child(4) > div:nth-child(1) > div > a')
            .pause(5000)
            .assert.urlContains('/profileinformation')
            .verify.visible('.menu-tree-node-item-anchor.active')
            .end();
    },
    'it Checking ADDRESS BOOK button in DASHBOARD': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('#content > div > section > div:nth-child(4) > div:nth-child(2) > div > a')
            .getLocationInView('#content > div > section > div:nth-child(4) > div:nth-child(2) > div > a')
            .pause(5000)
            .click('#content > div > section > div:nth-child(4) > div:nth-child(2) > div > a')
            .pause(5000)
            .assert.urlContains('addressbook')
            .verify.visible('.menu-tree-node-item-anchor.active')
            .end();
    },
    'it Checking ORDER HISTORY button in DASHBOARD': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('#content > div > section > div:nth-child(4) > div:nth-child(3) > div > a')
            .getLocationInView('#content > div > section > div:nth-child(4) > div:nth-child(3) > div > a')
            .pause(5000)
            .click('#content > div > section > div:nth-child(4) > div:nth-child(3) > div > a')
            .pause(5000)
            .assert.urlContains('purchases')
            .verify.visible('.menu-tree-node-item-anchor.active')
            .end();
    },
    'it Checking MY WISHLIST button in DASHBOARD': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('#content > div > section > div:nth-child(5) > div:nth-child(1) > div > a')
            .getLocationInView('#content > div > section > div:nth-child(5) > div:nth-child(1) > div > a')
            .pause(5000)
            .click('#content > div > section > div:nth-child(5) > div:nth-child(1) > div > a')
            .pause(5000)
            .assert.urlContains('wishlist')
            .verify.visible('.menu-tree-node-item-anchor.active')
            .end();
    },
    'it Checking SAVED CARDS button in DASHBOARD': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('#content > div > section > div:nth-child(5) > div:nth-child(2) > div > a')
            .getLocationInView('#content > div > section > div:nth-child(5) > div:nth-child(2) > div > a')
            .pause(5000)
            .click('#content > div > section > div:nth-child(5) > div:nth-child(2) > div > a')
            .pause(5000)
            .assert.urlContains('creditcards')
            .verify.visible('.menu-tree-node-item-anchor.active')
            .end();
    },
    'it Checking MY REVIEWS button in DASHBOARD': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('#content > div > section > div:nth-child(5) > div:nth-child(3) > div > a')
            .getLocationInView('#content > div > section > div:nth-child(5) > div:nth-child(3) > div > a')
            .pause(5000)
            .click('#content > div > section > div:nth-child(5) > div:nth-child(3) > div > a')
            .pause(5000)
            .assert.urlContains('myreviews')
            .verify.visible('.menu-tree-node-item-anchor.active')
            .end();
    }

}