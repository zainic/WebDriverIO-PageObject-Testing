import { $, $$ } from "@wdio/globals"

import Page from "./page.js"

class ProductPage extends Page {
    
    get products() {return $$('.product-listing > div > a')}
    get cart() {return $('[onclick="openCart(); openGa4();"]')}
    get itemList() {return $$('.cart-div-list > div')}

    async getProducts(len) {
        const urls = []
        let url
        if (len >= this.products.length || len < 0){
            return Error()
        }
        for(let i=0; i<=len-1; i++){
            url = await this.products[i].getAttribute('href')
            url = /\/.*$/.exec(/product\/.*$/.exec(url)[0])[0]
            urls.push(url)
        }
        return urls
    }

    async getCart(){
        await this.cart.click()
        return this.itemList
    }

    async open() {
        await super.open('/product')
    }
}

export default new ProductPage()