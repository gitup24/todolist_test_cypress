/// <reference types="cypress" />
describe("Todo-list", () =>{
    // Ecrire le test ici
    it("ajouter une seule tâche", ()=>{
        // visiter le site à tester
        cy.visit("https://dwils.github.io/todolist/")
        cy.get("#addTaskButton")

        cy.get("#addTaskButton")

        cy.get("#taskInput").type("Tache 1")
        cy.get('#addTaskButton').click()
        cy.get("span").should("have.text", "Tache 1")
    })
})
