/// <reference types="cypress" />
describe("Todo-list", () =>{
    // Ecrire le test ici
    it("ajouter une seule tâche", ()=>{
        // visiter le site à tester
        cy.visit("https://dwils.github.io/todolist/")
        //exportable pr utilier en nomant cette partie



        cy.get("#taskInput").type("Tache 1")
        cy.get('#addTaskButton').click()
        cy.get("span").should("have.text", "Tache 1")
    })
    it("ajouter une plusieurs tâches", ()=> {
        // visiter le site à tester
        cy.visit("https://dwils.github.io/todolist/")
        //utilisier 1 tableau
        const tasks = ["Taâche1", "Tache2", "Tache3"]
        //maper ou forEarch pr manipuler
        tasks.map(task => {
            //verifier cible avex ciler de cypress. Type pr ecrite
            cy.get("#taskInput").type(task)
            //chercher bouton de valid.
            cy.get('#addTaskButton').click()

        })

    })

})
