class LoginPage{

    loginpage(){
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    }

    enter_credentials(email, password){
        cy.get('#email').type(email)
        cy.get('#pass').type(password)
        cy.get('#send2').click()
    }

    validate_url(){
        cy.url().then((url)=>{
            expect(url).to.be.includes('/customer/account/')
        })
    }
}
export default LoginPage