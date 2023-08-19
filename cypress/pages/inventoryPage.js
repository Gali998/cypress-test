class inventoryPage{

    elements = {
        inventoryUrl: () => cy.url()
    }

}

module.exports = new inventoryPage();