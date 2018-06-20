import reducer from './add-one-reducer'

/** behaviors */
describe('add one', () => {
  describe('given the current state of the store', () => {
    const currentState = {
      total: 0
    }

    describe('and the add one action', () => {
      const action = {
        type: 'ADD_ONE'
      }

      describe('when the reducer receives this action', () => {
        const updatedState = reducer(currentState, action)

        it('should return the store state upated to:', () => {
          expect(updatedState.total).toBe(1)
        })

      })
    })

  })
})

describe('set initial sate', () => {
  describe('given an undefined state', () => {
    const state = undefined

    describe('and the add one action', () => {
      const action = {
        type: 'ADD_ONE'
      }

      describe('when the reducer receives this action', () => {
        const updatedState = reducer(state, action)

        it('should return the store state upated to:', () => {
          expect(updatedState.total).toBe(1)
        })

      })
    })

  })
})

describe('handle unknown action', () => {
  describe('given the current state of the store', () => {
    const currentState = {
      total: 0
    }

    describe('and and unknown action', () => {
      const action = {
        type: 'UNKNOWN'
      }

      describe('when the reducer receives this action', () => {
        const updatedState = reducer(currentState, action)

        it('should return the store state not upated', () => {
          expect(updatedState.total).toBe(0)
        })

      })
    })

  })
})