module.exports={

'check hover options for womens bib shorts' : client =>
    {
        client
        .url("http://uat.assos.com/women/bib-shorts")
        .waitForElementVisible('.leader-board-banner-slide')
        .pause(5000)
            
        // .getLocationInView('.item-card row item-cms-area')
        //.getLocationInView('a[href="/women/bib-shorts/custitem_webstore_activity/mountain"]')
        .getLocationInView('.item-card.row div:nth-child(2).item-block-container .item-card-image-block')
        .pause(5000)
        .moveToElement('.item-card.row div:nth-child(2).item-block-container .item-card-image-block',10,10)
        //.assert.visible('.item-card.row div:nth-child(2).item-block-container')
        
        //.pause(2000)
        .waitForElementVisible('.item-card.row div:nth-child(2).item-block-container .add-to-cart-btn')
        .moveToElement('.item-card.row div:nth-child(2).item-block-container .add-to-cart-btn',0,0)
        .click('.item-card.row div:nth-child(2).item-block-container .add-to-cart-btn')
        .click('.item-card.row div:nth-child(2).item-block-container .add-to-cart-btn', function(){console.log("Clicked on Add to cart button")})
        .pause(5000)
        .click('.item-card.row div:nth-child(2).item-block-container .size-options-drop-down',function(){console.log("Clicked on Size options")})
        //.click('.item-card.row div:nth-child(2).item-block-container .size-options-drop-down:nth-child(3)')
        .click('.item-card.row div:nth-child(2).item-block-container .size-options-drop-down option[value="26300"]',function(){console.log("Clicked on Medium option")})
        .pause(5000)
        
        //.setValue('.item-card.row div:nth-child(2).item-block-container .add-to-cart-btn', ' Medium')
        .pause(5000)
        
    }
}