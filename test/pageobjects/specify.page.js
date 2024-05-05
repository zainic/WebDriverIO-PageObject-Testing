import { $, $$ } from "@wdio/globals"

import Page from "./page.js"

class SpecifyPage extends Page {
    
    get addBagButton() {return $('/html/body/div[2]/div/div/div[1]/div/div[2]/div[1]/form/div[2]/button')}
    get closePopUpBtn() {return $('[onclick="closePromo();"]')}

    async addToBag() {
        this.addBagButton.click()
    }

    async closePopUp() {
        this.closePopUpBtn.click()
    }

    async open(product) {
        await super.open(`/product${product}`)
    }
}

export default new SpecifyPage()