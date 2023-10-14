export class ProfileDropdown{

    clickProfileDropdown(){
        cy.get('li.oxd-userdropdown').click()
    }

    // clickLogoutbutton(){
    //     cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

    // }

}
