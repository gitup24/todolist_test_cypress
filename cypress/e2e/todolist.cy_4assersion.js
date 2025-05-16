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
        //Assertion: Verifier la presence des 3 taches
        cy.get('span').should('have.length', 3)
        //assertion: verifier le nom de chq tache. Preleve 1 tache
        tasks.map(task => {
            //ajout 1 index car tableau
            cy.get('span').eq(0).should('have.text', task)
        })
    })

    it("Ajouter une tâche vide", ()=>{
        // Ajouter une tâche vide
        //cy.get('#taskInput').type("")
        cy.get('#addTaskButton').click()


    })
    //assertion: verifier l'absence de span
    cy.get("span").should("not.exist")

    //verifier si msg s'affiche. Vise #errorMessage
    cy.get('#errorMessage')
        .should('be.visible')
        //pr refaire 1 test /le meme on utilise and
        .and("contain.text", "Le champ de tâche est vide. Veuillez entrer une tâche.")


})
