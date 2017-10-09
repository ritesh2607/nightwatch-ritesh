const firstname = 'Lubna', lastname = 'shaikh', email = 'LUBNA@PAPERPLANE.NET';

module.exports = {

    'it Should validate if FIRST NAME, LAST NAME and E-mail is Auto-Populated': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="profileinformation"]')
            .click('a[data-id="profileinformation"]')
            .pause(5000)
            .assert.value('#firstname', firstname)
            .assert.value('#lastname', lastname)
            .assert.containsText('p#email.profile-information-input-email', email)
            .end();
    },

    'it Email field should not be editable': client => {
        client
            .goToMyAccount()
            .waitForElementVisible('a[data-id="profileinformation"]')
            .click('a[data-id="profileinformation"]')
            .pause(5000)
            .setValue('#firstname', 'Hello')
            .pause(1000)
            .assert.valueContains('#firstname', 'Hello')
            .pause(5000)
            .click('#email')
            .setValue('#email', 'Hello@paperplane.net')
            .assert.containsText('p#email.profile-information-input-email', email)
            .end();
    }

}