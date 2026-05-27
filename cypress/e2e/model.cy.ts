/// <reference types="cypress" />

import { models as modelsType } from '@/index'

declare global {
  interface Window {
    models: typeof modelsType
  }
}

describe('initial test for model', () => {
  it('register model', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Hello World')

    cy.window().then((win) => {
      const models = win.models

      console.log(models)

      expect(models).to.exist
    })
  })


  it('register model with schema', () => {
    cy.visit('http://localhost:5173/')

    const expected = '{"databaseName":"123","name":"Person","id":{"keyPath":"username","autoIncrement":false,"type":1},"attributes":{"fieldName":["username"],"primaryKey":[],"maxLength":["username"],"minLength":["username"],"choices":["username"],"type":["username"],"blank":["username"],"default":["username"],"unique":["username"],"foreignKey":["username"],"model":["username"]},"fields":[{"name":"username","keyPath":"username","options":{"type":null},"className":"CharField","fieldAttributes":{"fieldName":"CharField","maxLength":0,"type":5,"blank":false},"blank":false}],"fieldTypes":{"CharField":["username"]},"fieldNames":["username"],"falseField":[],"foreignKey":{},"middleTablePK":{},"middleTableRelatedFields":{}}'

    // Wait until models is available on window
    cy.window().should((win) => {
      expect(win).to.have.property('models')
    })

    cy.window().then(async (win) => {
      const models: typeof modelsType = (win as any).models

      class Person extends models.Model<Person> {
        username = models.CharField({ maxLength: 0 })
      }

      models.register({
        databaseName: '123',
        type: 'indexedDB',
        version: 1,
        models: [Person],
      })

      const schema = JSON.stringify((Person).getTableSchema())

      win.document.body.innerHTML = schema

      expect(schema).to.eq(expected)
    })

    cy.get('body')
      .invoke('text')
      .should(
        'include',
        expected
      )
  })
})