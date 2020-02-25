import {
  FILTER_PUNCH_TASKS,
  setDisciplineFilter,
  FILTER_PUNCH_STATUS,
  setStatusFilter,
  SET_PUNCH_LIST_FOCUS,
  setPunchListFocus,
  SET_PUNCH_LIST_FOCUS_NEXT,
  setPunchListFocusNext,
  SET_PUNCH_LIST_FOCUS_PREVIOUS,
  setPunchListFocusPrevious
} from './actions'

describe('actions', () => {
  it('should create an action to filter punch tasks by discipline', () => {
    expect(setDisciplineFilter('A')).toEqual({ type: FILTER_PUNCH_TASKS, discipline: 'A' })
  })
  it('should create an action to filter punch tasks by status', () => {
    expect(setStatusFilter('COMPLETE')).toEqual({ type: FILTER_PUNCH_STATUS, status: 'COMPLETE' })
  })
  it('should create an action to focus on a given punch task', () => {
    expect(setPunchListFocus(1)).toEqual({ type: SET_PUNCH_LIST_FOCUS, id: 1 })
  })
  it('should create an action to set the focus on the next punch task', () => {
    expect(setPunchListFocusNext(1)).toEqual({ type: SET_PUNCH_LIST_FOCUS_NEXT, id: 1 })
  })
  it('should create an action to set the focus on the previous punch task', () => {
    expect(setPunchListFocusPrevious(1)).toEqual({ type: SET_PUNCH_LIST_FOCUS_PREVIOUS, id: 1 })
  })
})
