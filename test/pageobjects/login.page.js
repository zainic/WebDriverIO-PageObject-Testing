import { $, $$ } from "@wdio/globals"

import Page from "./page.js"

class LoginPage extends Page {

    get emailInput() {return $('/html/body/div[2]/div/div/div/form/div[2]/input')}
    get passwordInput() {return $('/html/body/div[2]/div/div/div/form/div[3]/input')}
    get loginBtn() {return $('button[type="submit"]=SIGN IN')}
    get closeBtnPopUp() {return $('a[title="Close"]')}

    async closePopUp() {
        await this.closeBtnPopUp.click()
    }

    async loginProcess(email, password) {
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.loginBtn.click()
    }

    async open() {
        await super.open('/login')
    }
}

export default new LoginPage()