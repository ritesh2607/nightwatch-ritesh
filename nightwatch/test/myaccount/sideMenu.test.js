module.exports = {
    'it Checking PERSONAL INFORMATION menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="profileinformation"]')
            .click('a[data-id="profileinformation"]', function () {
                console.log('clicked on profile infomation');
            })
            .pause(5000)
            .assert.urlContains('profileinformation')
            .assert.visible('.menu-tree-node-item-anchor.active', function () {
                console.log('andndf')
            })
            .pause(10000)
            .end();

    },

    'it Checking ADDRESS BOOK menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="addressbook"]')
            .click('a[data-id="addressbook"]')
            .pause(5000)
            .assert.urlContains('addressbook')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .assert.cssClassPresent('.menu-tree-node-item-anchor','active')//
            .pause(10000)
            .end();
    },

    'it Checking PAYMENT METHOD menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="creditcards"]')
            .click('a[data-id="creditcards"]')
            .pause(5000)
            .assert.urlContains('creditcards')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    },

    'it Checking ORDER HISTORY menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="purchases"]')
            .click('a[data-id="purchases"]')
            .pause(5000)
            .assert.urlContains('purchases')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    },

    'it Checking MY REVIEWS menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="myreviews"]')
            .click('a[data-id="myreviews"]')
            .pause(5000)
            .assert.urlContains('myreviews')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    },

    'it Checking NEWSLETTER menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="emailpreferences"]')
            .click('a[data-id="emailpreferences"]')
            .pause(5000)
            .assert.urlContains('emailpreferences')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    },

    'it Checking UPDATE YOUR PASSWORD menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="updateyourpassword"]')
            .click('a[data-id="updateyourpassword"]')
            .pause(5000)
            .assert.urlContains('updateyourpassword')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    },

    'it Checking RETURNS menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="returns"]')
            .click('a[data-id="returns"]')
            .pause(5000)
            .assert.urlContains('returns')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    },
 
    'it Checking DASHBOARD menu getting highlighted and navigate on click': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="overview"]')
            .click('a[data-id="overview"]')
            .pause(5000)
            .assert.urlContains('/overview')
            .assert.visible('.menu-tree-node-item-anchor.active')
            .end();

    }
}