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

        //Assertion : vérifier la présence des 3 tâches
        cy.get('span').should('have.length', 3)

        //Assertion : vérifier le nom de chaque tâche
        tasks.map((task,index) => {
            cy.get('span').eq(index).should('have.text', task)
        })
    })

    it("Ajouter une tâche vide", ()=>{
        // Ajouter une tâche vide (ne rien mettre)
        cy.get('#addTaskButton').click()

        // Assertion : Vérifier l'absence de span (Tâche)
        cy.get("span").should("not.exist")

        // Assertion : Vérifier l'affichage du message d'erreur
        cy.get('#errorMessage')
            .should('be.visible')
            .and("contain.text","Le champ de tâche est vide. Veuillez entrer une tâche.")
    })
})