import { Loginpage } from "./pages/login"
import { ProfileDropdown } from "./pages/ProfileDropdown"

const loginpage = new Loginpage()
const profileDropdown = new ProfileDropdown()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
describe ('All login Test', ()=>{

    it ('Login Test valid Cred', ()=>{
    
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()
        
        profileDropdown.clickProfileDropdown()
    
        // cy.get('li.oxd-userdropdown').click()
    
    })
    
    it ('Login Test invalid username', ()=>{
    
        loginpage.enterUsername('Admin2')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()
        cy.contains('Invalid credentials').click()
      
    })

    it ('Login Test invalid password', ()=>{
        
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin12323')
        loginpage.clickLogin()
        cy.contains('Invalid credentials').click()
  
})

})
