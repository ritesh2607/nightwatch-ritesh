const pass='welcome123';

module.exports = {

    'it Should show SUCCESS message on PASSWORD change': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .setValue('#current_password',pass)
        .setValue('#password','welcome12345')
        .setValue('#confirm_password','welcome12345')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .pause(7000)
        .verify.containsText('#content > div > section > div:nth-child(2) > div > div','Password successfully updated!')
        .clearValue('#current_password')
        .clearValue('#password')
        .clearValue('#confirm_password')
        .setValue('#current_password',pass+'45')
        .setValue('#password','welcome123')
        .setValue('#confirm_password','welcome123')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .pause(5000)
        .assert.containsText('#content > div > section > div:nth-child(2) > div > div','Password successfully updated!')
        .end();
    },

    'it Should throw error message when INCORRECT CURRENT PASSWORD is entered': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .setValue('#current_password',pass+'45')
        .setValue('#password','welcome123')
        .setValue('#confirm_password','welcome123')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .pause(1000)
        .verify.containsText('#content > div > section > div:nth-child(2) > div > div','The current password you supplied is incorrect.')
        .end();
    },

    'it Should throw error messages when having blanks values and then clicking on UPDATE': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .verify.containsText('div:nth-child(1) > div > div > div > p','Current password is required')
        .verify.containsText('div:nth-child(2) > div > div > div > p','New password is required')
        .verify.containsText('div:nth-child(3) > div > div > div > p','Confirm password is required')
        .end();
    },

    'it Should throw error messages when NEW PASSWORD and CONFIRM PASSWORD kept blank': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .setValue('#current_password',pass)
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .verify.containsText('div:nth-child(2) > div > div > div > p','New password is required')
        .verify.containsText('div:nth-child(3) > div > div > div > p','Confirm password is required')
        .end();
    },
    
    'it Should throw error messages when only CONFIRM PASSWORD kept blank': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .setValue('#current_password',pass)
        .setValue('#password','welcome12345')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .verify.containsText('div:nth-child(3) > div > div > div > p','Confirm password is required')
        .end();
    },

    'it Should throw error messages when only CURRENT PASSWORD kept blank': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .setValue('#password','welcome12345')
        .setValue('#confirm_password','welcome12345')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .verify.containsText('div:nth-child(1) > div > div > div > p','Current password is required')
        .end();
    },

    'it Should throw error messages when NEW PASSWORD and CONFIRM PASSWORD do not match': client=>{
        client
        .goToMyAccount()
        .waitForElementVisible('a[data-id="updateyourpassword"]')
        .click('a[data-id="updateyourpassword"]')
        .setValue('#current_password',pass)
        .setValue('#password','welcome12345')
        .setValue('#confirm_password','welcome123')
        .waitForElementVisible('.profile-update-password-form-actions-update.secondary-button')
        .click('.profile-update-password-form-actions-update.secondary-button')
        .verify.containsText('div:nth-child(3) > div > div > div > p','New Password and Confirm Password do not match')
        .end();
    }
}