/// <reference types="cypress" />
describe("Todo-list", () =>{

    beforeEach(()=>{
        // visiter le site à tester
        cy.visit("https://dwils.github.io/todolist/")
    })

    // Ecrire le test ici
    it("ajouter une seule tâche", ()=>{
        // Ajout d'une seule tâche
        cy.get("#taskInput").type("Tache 1")
        cy.get('#addTaskButton').click()
        cy.get("span").should("have.text", "Tache 1")
    })

    it("Ajouter plusieurs tâches", ()=>{
        // Faire une boucle qui permet d'ajouter plusieurs Tâches (Tache 1, Tache 2, Tache 3)
        const tasks = ["Tache 1", "Tache 2", "Tache 3"]
        tasks.map(task => {
            cy.get('#taskInput').type(task)
            cy.get('#addTaskButton').click()
        })
    })

    it("Ajouter une tâche vide", ()=>{
        // Ajouter une tâche vide

    })
})