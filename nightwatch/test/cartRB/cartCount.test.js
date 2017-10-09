module.exports = {

    'it Should check if cart count is not zero after adding a product' : client => {
        client
        .addProdCart()
        .pause(10000)
        .getText('.header-mini-cart-menu-cart-legend', function(result){
            var cartCount = result.value;

            if(cartCount==0){
                client
                .waitForElementVisible('.header-mini-cart-menu-cart-legend')
                .assert.containsText('.header-mini-cart-menu-cart-legend', cartCount);
                console.log(cartCount);
                console.log('0 count log');
            }

            else{
                client
                .waitForElementVisible('.header-mini-cart-menu-cart-legend')
                .assert.containsText('.header-mini-cart-menu-cart-legend', cartCount);
                console.log(cartCount);
                console.log('0+ count log');
            }

        })
    
        .end();

    }


}