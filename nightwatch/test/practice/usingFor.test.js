
const navCategoriesMen = function (client, subCat, URLs) {
    client
        .url("http://uat.assos.com")
        .waitForElementVisible('div.row.header-main-nav-content li.MEN')
        .moveToElement('div.row.header-main-nav-content li.MEN', 0, 0)
        .pause(3000)
        .elements('css selector', subCat, function (els) {
            console.log(els.value.length);
            for (var i = 1; i <= els.value.length; i++) {
                var breadCrumb, assertURL;

                assertURL = URLs[i - 1];
                console.log(assertURL);

                const subCatNav = subCat + ':nth-child(' + i + ')';

                client.getText(subCatNav, function (res) {
                    breadCrumb = res.value;
                    console.log(breadCrumb);
                })
                    .perform(function (done) {
                        console.log('breadCrumb', breadCrumb);
                        client
                            .click(subCatNav)
                            .pause(2000)
                            .waitForElementVisible('#facet-browse > div > div > ul > li:nth-child(1) > a')
                            .pause(2000)
                            .assert.containsText('#facet-browse > div > div > ul > li:nth-child(1) > a', 'HOME')
                            .assert.containsText('#facet-browse > div > div > ul > li:nth-child(3) > a', 'MEN')
                            .pause(2000)
                            .assert.containsText('#facet-browse > div > div > ul > li.global-views-breadcrumb-item-active', breadCrumb)
                        done();
                    });

                client
                    .assert.urlContains(assertURL)
                    .verify.elementPresent('.leader-board-banner-slide')
                    .getLocationInView('#site-footer')
                    .pause(2000)
                    .assert.elementPresent('#site-footer')
                    .pause(2000)
                    .back()
                    .waitForElementVisible('div.row.header-main-nav-content li.MEN')
                    .moveToElement('div.row.header-main-nav-content li.MEN', 0, 0);
            }
        });
};

module.exports = {

    'it Should validate subcategories of "Expolre by activity" under MEN': client => {
        var URLs = ["/road", "/mountain", "/urban"];
        navCategoriesMen(client, 'li.MEN.open ul li li:nth-child(1) ul > a', URLs);
        client.end();
    },

    'it Should validate subcategories of "Clothing" under MEN': client => {
        var URLs = ["/bib-shorts", "/knickers-and-tights", "/body-insulator", "/jerseys", "/jackets", "/wind-rain-shells", "/chronosuits"];
        navCategoriesMen(client, 'li.MEN.open ul li li:nth-child(2) ul > a', URLs);
        client.end();
    }
}