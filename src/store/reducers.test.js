import { runActions } from './reducers'
import {
  setDisciplineFilter,
  setStatusFilter,
  setPunchListFocus,
  setPunchListFocusNext,
  setPunchListFocusPrevious
} from './actions'
import { evolve, filter, propEq, always } from 'ramda'

const sampleTasks = [
  { id: 1, discipline: 'A', status: 'PENDING' },
  { id: 3, discipline: 'B', status: 'COMPLETE' },
  { id: 4, discipline: 'A', status: 'STARTED' }
]
const initialState = {
  disciplineFilter: 'ALL',
  statusFilter: 'ALL',
  punchListTasks: sampleTasks,
  filteredPunchListTasks: sampleTasks,
  punchListFocus: undefined
}

describe('Main reducer', () => {
  it('should return a given initial state', () => {
    expect(runActions(initialState, {})).toEqual(initialState)
  })
  it('should filter by discipline', () => {
    expect(runActions(initialState, setDisciplineFilter('A')))
      .toEqual(evolve({
        filteredPunchListTasks: filter(propEq('discipline', 'A')),
        disciplineFilter: always('A')
      }, initialState))
  })
  it('should filter by status', () => {
    expect(runActions(initialState, setStatusFilter('COMPLETE')))
      .toEqual(evolve({
        filteredPunchListTasks: filter(propEq('status', 'COMPLETE')),
        statusFilter: always('COMPLETE')
      }, initialState))
  })
  it('should should set the focus properly', () => {
    expect(runActions(initialState, setPunchListFocus(1)))
      .toEqual(evolve({
        punchListFocus: always(1)
      }, initialState))
  })
  it('should should set the focus to the next task properly', () => {
    expect(runActions(initialState, setPunchListFocusNext(1)))
      .toEqual(evolve({
        punchListFocus: always(3)
      }, initialState))
  })
  it('should should set the focus to the next task properly even at the end', () => {
    expect(runActions(initialState, setPunchListFocusNext(4)))
      .toEqual(evolve({
        punchListFocus: always(1)
      }, initialState))
  })
  it('should should set the focus to the previous task properly', () => {
    expect(runActions(initialState, setPunchListFocusPrevious(4)))
      .toEqual(evolve({
        punchListFocus: always(3)
      }, initialState))
  })
  it('should should set the focus to the previous task properly even at the beginning', () => {
    expect(runActions(initialState, setPunchListFocusPrevious(1)))
      .toEqual(evolve({
        punchListFocus: always(4)
      }, initialState))
  })
})
