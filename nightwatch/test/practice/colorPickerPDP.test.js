module.exports = {

    'it Should select color and size on PDP': client => {
            client
            .url('http://uat.assos.com/tneopros7')
            .waitForElementVisible('label span[title="Black"]')
            .moveToElement('label span[title="Black"]',0,0)
            .click('label span[title="Black Volkanga"]')
            .click('#custcol1')
            .click('option[value="3"]')
            .pause(2000)
            .assert.urlEquals('http://uat.assos.com/tneopros7?quantity=1&color=24&size=3')
            .click('button[data-type="add-to-cart"]')
            .pause(2000)
            //.end();

    }

}