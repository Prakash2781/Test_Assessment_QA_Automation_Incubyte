import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { fa, faker } from '@faker-js/faker';
import Register_Page from "../../e_Commerce_Page/registration_Page";
<<<<<<< HEAD
import LoginPage from "../../e_Commerce_Page/LoginPage";

const register = new Register_Page;
const login_Page = new LoginPage()

let email = faker.internet.email()
let password = "Test1234@"
=======

const register = new Register_Page;
>>>>>>> 3e5bf1cb105330326b4422e6c9d29864a82d9b31

Given("The user is on the registration page", ()=>{
    register.home_page()
    register.registration_Page()
})

When("The user enters their name, email, and password", ()=>{
<<<<<<< HEAD
    register.create_account(faker.person.firstName(), faker.person.lastName(), email, password, "Test1234@")
=======
    register.create_account(faker.person.firstName(), faker.person.lastName(), faker.internet.email(), "Test1234@", "Test1234@")
>>>>>>> 3e5bf1cb105330326b4422e6c9d29864a82d9b31
})

When("I submit the registration form", ()=>{
    register.submit()
})

Then("The user should be registered successfully",()=>{
    register.validate_registration_details()
})
Then("The user should be redirected to the welcome page", ()=>{
    register.Validate_Login_Page_url()
})

<<<<<<< HEAD

Given("The user is on the Login page", ()=>{
    login_Page.loginpage()
})
When("The user the email_Id and password", ()=>{
    login_Page.enter_credentials(email, password)
})
Then("Validate successfully Logged-in Message", ()=>{
    login_Page.validate_url()
})



=======
>>>>>>> 3e5bf1cb105330326b4422e6c9d29864a82d9b31
