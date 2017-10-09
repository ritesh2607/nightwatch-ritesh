module.exports = {

    'it Should throw VALIDATION ERROR message on TELEPHONE NUMBER if number of digits is less than 7': client => {
        client
            .goToMyAccount('ritesh@paperplane.net', 'ritesh123')
            .waitForElementVisible('a[data-id="addressbook"]')
            .click('a[data-id="addressbook"]')
            .setValue('input[type="tel"]', '123456')
            .click('.address-edit-form-button-submit.secondary-button')

        client.getValue('input[type="tel"]', function (result) {
            console.log(result);
            var tel_no = result.value;
            var tel_no_length = tel_no.length;
            console.log(tel_no.length);

            if (tel_no_length < 7) {
                client
                    //.click('.address-edit-form-button-submit.secondary-button')
                    .assert.containsText('div:nth-child(5) > div:nth-child(2) > div > div > p:nth-child(3)', 'Phone Number is invalid')
                .end();
            }

            else {
                client
                .end();
            }

        })
    },

    'WHEN NO ADDRESS in ADDRESS BOOK: it Should throw error messages when no value is entered and SAVE ADDRESS is Clicked ': client => {
        client
            .goToMyAccount('ritesh@paperplane.net', 'ritesh123')
            .waitForElementVisible('a[data-id="addressbook"]')
            .click('a[data-id="addressbook"]')
            .waitForElementVisible('.address-edit-form-button-submit.secondary-button')
            .click('.address-edit-form-button-submit.secondary-button')
            .assert.containsText('div:nth-child(2) > div:nth-child(1) > div > div > p', 'Full Name is required')
            .assert.containsText('div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(3)', 'Address is required')
            .assert.containsText('div:nth-child(3) > div:nth-child(2) > div > div > p', 'City is required')
            .assert.containsText('div:nth-child(4) > div:nth-child(1) > div > div > p', 'Country is required')
            .assert.containsText('div:nth-child(5) > div:nth-child(1) > div > div > p:nth-child(3)', 'Zip Code is required')
            .assert.containsText('div:nth-child(5) > div:nth-child(2) > div > div > p:nth-child(3)', 'Phone is required')
            .pause(2000)
            .end();

    },

    'WHEN NO ADDRESS in ADDRESS BOOK: Successfully ADDRESS added with all valid inputs': client => {
        client
            .goToMyAccount('ritesh@paperplane.net', 'ritesh123')
            .waitForElementVisible('a[data-id="addressbook"]')
            .click('a[data-id="addressbook"]')
            .setValue('#fullname','Test 123')
            .setValue('#addr1','12345abc')
            .setValue('#addr2','abc12345')
            .setValue('#city','Mumbai')
            .click('#country')
            .click('option[value="AF"]')
            .pause(5000)
            .setValue('#state','Maharashtra')
            .setValue('#zip','123456')
            .setValue('#phone','12345678')
            //.getLocationInView('.global-views-countriesDropdown-select.select-border-arrow option:nth-child(2)')
           // .click('.global-views-countriesDropdown-select.select-border-arrow option:nth-child(2)')
            .click('.address-edit-form-button-submit.secondary-button')
            .pause(5000)
            .assert.containsText('.shipping-address-text','SHIPPING ADDRESS')
            .pause(2000)
            .end();

    },


    'WHEN ADDRESS in ADDRESS BOOK: it should edit and save changes to address successfully': client =>{
        var fullnameNew="Test New";
        var addr1New="Addr1 New";
        var addr2New="Addr2 New";
        var cityNew="City New";
        var stateNew="State New";
        var zipNew="124587";
        var phonenoNew="1234578";


        client
            .goToMyAccount('ritesh@paperplane.net', 'ritesh123')
            .waitForElementVisible('a[data-id="addressbook"]')
            .click('a[data-id="addressbook"]')
            .click('div.shipping-address-container a[data-id="195"]')
            .pause(2000)
            .clearValue('#in-modal-fullname')
            .setValue('#in-modal-fullname',fullnameNew)
            .pause(2000)
            .clearValue('#in-modal-addr1')
            .setValue('#in-modal-addr1',addr1New)
            .pause(2000)
            .clearValue('#in-modal-addr2')
            .setValue('#in-modal-addr2',addr2New)
            .pause(2000)
            .clearValue('#in-modal-city')
            .setValue('#in-modal-city',cityNew)
            .pause(2000)
            .click('#in-modal-country')
            .click('option[value="AL"]')
            .pause(2000)
            .clearValue('#in-modal-state')
            .setValue('#in-modal-state',stateNew)
            .pause(2000)
            .clearValue('#in-modal-zip')
            .setValue('#in-modal-zip',zipNew)
            .pause(2000)
            .clearValue('#in-modal-phone')
            .setValue('#in-modal-phone',phonenoNew)
            .pause(2000)
            .click('#in-modal-isresidential')
            .click('#in-modal-defaultbilling')
            .click('#in-modal-defaultshipping')
            .click('.address-edit-form-button-submit.secondary-button')
            .pause(5000)
            .getText('div.shipping-address-container > div.address-list-default-addresses > div > div > div > div > div > div > div:nth-child(1) > address > div > h4', function(result){
                var fullname = result.value;

                console.log("Fullname is:"+fullname);
                console.log("Updated Fullname is:"+fullnameNew);

                if(fullname==fullnameNew){
                    console.log("Fullname updated");
                }
                else{
                    client
                    .assert.containsText('div.shipping-address-container > div.address-list-default-addresses > div > div > div > div > div > div > div:nth-child(1) > address > div > h4',fullnameNew);
                }
            
            })

            .getText('div.shipping-address-container > div.address-list-default-addresses > div > div > div > div > div > div > div:nth-child(1) > address > div > p.address-details-container-multiselect-address-details-addr1',function(result){
                var addr1 = result.value;

                console.log("Addr1 is:"+addr1);
                console.log("Updated Addr1 is:"+addr1New);

                if(addr1==addr1New){
                    console.log("Addr 1 updated");
                }
                else{
                    client
                    .assert.containsText('div.shipping-address-container > div.address-list-default-addresses > div > div > div > div > div > div > div:nth-child(1) > address > div > p.address-details-container-multiselect-address-details-addr1',addr1New);
                }

            })

            .getText('div.shipping-address-container > div.address-list-default-addresses > div > div > div > div > div > div > div:nth-child(1) > address > div > p.address-details-container-multiselect-address-details-addr2',function(result){
                var addr2 = result.value;

                console.log("Addr1 is:"+addr2);
                console.log("Updated Addr1 is:"+addr2New);

                if(addr2==addr2New){
                    console.log("Addr 2 updated");
                }
                else{
                    client
                    .assert.containsText('div.shipping-address-container > div.address-list-default-addresses > div > div > div > div > div > div > div:nth-child(1) > address > div > p.address-details-container-multiselect-address-details-addr1',addr2New);
                }

            })

            .getText('div.shipping-address-container p.address-details-country',function(result){
                var country = result.value;

                console.log("Updated Addr1 is:"+country);

                if(country=='Albania'){
                    console.log("Country updated");
                }
                else{
                    client
                    .assert.containsText('div.shipping-address-container p.address-details-country','Albania');
                }

            })
            .getText('div.shipping-address-container p.address-details-phone > a',function(result){
                var phone = result.value+"11";

                console.log("phone is:"+phone);
                console.log("Updated phone is:"+phonenoNew);

                if(phone.match('/'+phonenoNew+'/g')){
                    console.log("phone no updated");
                }
                else{
                    client
                    .assert.containsText('div.shipping-address-container p.address-details-phone a',phonenoNew);
                }

            })
            
            .pause(5000)
            .end();


            // .getValue('#in-modal-fullname',function(result){
            //     var newFullname = result.value + fullname;
            //     console.log(newFullname);
                
            //     client
            //     .clearValue('#in-modal-fullname')
            //     .setValue('#in-modal-fullname',newFullname);
            // })
            // .getValue('#in-modal-addr1',function(result){
            //     var newAddr1 = result.value + addr1;
            //     console.log(newAddr1);
                
            //     client
            //     .clearValue('#in-modal-addr1')
            //     .setValue('#in-modal-addr1',newAddr1);
            // })
            // .getValue('#in-modal-addr2',function(result){
            //     var newAddr2 = result.value + addr2;
            //     console.log(newAddr2);
                
            //     client
            //     .clearValue('#in-modal-addr2')
            //     .setValue('#in-modal-addr2',newAddr2);
            // })
            // .getValue('#in-modal-city',function(result){
            //     var cityNew = result.value + city;
            //     console.log(cityNew);
                
            //     client
            //     .clearValue('#in-modal-city')
            //     .setValue('#in-modal-city',cityNew);
            // })
            // .click('#in-modal-country')
            // .click('option[value="AL"]')
            // .pause(5000)

            // .getValue('#state',function(result){
            //     var stateNew = result.value + state;
            //     console.log(stateNew);
                
            //     client
            //     .clearValue('#state')
            //     .setValue('#state',stateNew);
            // })
            // .clearValue('#in-modal-zip')
            // .setValue('#in-modal-zip','12345611111')
            // .clearValue('#in-modal-phone')
            // .setValue('#in-modal-phone','123456781')
            // .pause(5000);
            //.end();

    }


}