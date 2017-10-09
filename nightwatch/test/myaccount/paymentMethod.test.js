const name='Test Card';

module.exports ={

//'@disabled' :  "true",

'it Should add new Credit/Debit card': client =>{
        client
        .goToMyAccount('ritesh@paperplane.net', 'ritesh123')
        .waitForElementVisible('a[data-id="creditcards"]')
        .click('a[data-id="creditcards"]')
        .click('.add-new-creditcard')
        .pause(1000)
        .setValue('#in-modal-ccname',name)
        .setValue('#in-modal-ccnumber','4024007122562597')
        .click('#modal-body')
        .waitForElementVisible('#in-modal-paymentmethod')
        .click('#in-modal-paymentmethod')
        .click('option[value="5,1,1555641112"]')
        .click('select[name="expmonth"]')
        .click('option[value="10"]')
        .click('select[name="expyear"]')
        .click('option[value="2023"]')
        .click('#in-modal-ccdefault')
        .click('.creditcard-edit-form-button-submit')
        .pause(5000)
        .assert.containsText('div:nth-child(1) > div > div > div.col-sm-6 > p.creditcard-name',name)
        .end()
}
//,

//     'it': client =>{


//     },

//     'it': client =>{


//     },

//     'it': client =>{


//     },

}