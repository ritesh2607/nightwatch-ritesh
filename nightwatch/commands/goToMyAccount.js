module.exports = {
    command: function (username='lubna@paperplane.net', password='welcome123',callback) {
        return this
            .url(this.launchUrl)
            .waitForElementVisible('.header-profile-login-link')
            .assert.visible('.header-profile-login-link')
            .click('.header-profile-login-link')
            .pause(2000)
            .login(username, password)
            .pause(10000)
    },
};