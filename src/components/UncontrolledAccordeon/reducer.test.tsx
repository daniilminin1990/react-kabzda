import { StateType, TOGGLE_COLLAPSED, reducer } from "./reducer"

test('collapsed should be true', () => {
  // data
  const state: StateType = {
    collapsed: false
  }


  // action
  const newState: StateType = reducer(state, { type: TOGGLE_COLLAPSED })


  // expectation
  expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
  // data
  const state: StateType = {
    collapsed: true
  }


  // action
  const newState: StateType = reducer(state, { type: TOGGLE_COLLAPSED })


  // expectation
  expect(newState.collapsed).toBe(false)
})
test('Incorrect reducer action type', () => {
  // data
  const state: StateType = {
    collapsed: true
  }


  // action
  expect(() => {
    reducer(state, { type: 'FAKETYPE' })
  }).toThrowError()


  // expectation
})