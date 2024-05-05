import loginPage from "../pageobjects/login.page.js"
import productPage from "../pageobjects/product.page.js"
import specifyPage from "../pageobjects/specify.page.js"

describe('001 - Fitur masukkan keranjang', () => {
    before(async () => {
        await loginPage.open()
        await loginPage.wait(500)
        await loginPage.closePopUp()
        await loginPage.wait(2000)
        await loginPage.loginProcess("zinicusalbatros@gmail.com", "Qwerty0#")
    })
    it('B001 - memasukkan keranjang dengan benar', async () => {
        await productPage.open()
        const urls = await productPage.getProducts(5)

        for(let url of urls){
            await specifyPage.open(url)
            await specifyPage.addToBag()
            await specifyPage.wait(1000)
            await specifyPage.closePopUp()
            await productPage.open()
            await productPage.wait(1000)
        }

        const products = await productPage.getCart()
        expect(products.length).toEqual(5)
    })
})