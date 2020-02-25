export const FILTER_PUNCH_TASKS = 'FILTER_PUNCH_TASKS'
export const FILTER_PUNCH_STATUS = 'FILTER_PUNCH_STATUS'
export const SET_PUNCH_LIST_FOCUS = 'SET_PUNCH_LIST_FOCUS'
export const SET_PUNCH_LIST_FOCUS_NEXT = 'SET_PUNCH_LIST_FOCUS_NEXT'
export const SET_PUNCH_LIST_FOCUS_PREVIOUS = 'SET_PUNCH_LIST_FOCUS_PREVIOUS'

export const setDisciplineFilter = (discipline) => ({ type: FILTER_PUNCH_TASKS, discipline })
export const setStatusFilter = (status) => ({ type: FILTER_PUNCH_STATUS, status })
export const setPunchListFocus = (id) => ({ type: SET_PUNCH_LIST_FOCUS, id })
export const setPunchListFocusNext = id => ({ type: SET_PUNCH_LIST_FOCUS_NEXT, id })
export const setPunchListFocusPrevious = id => ({ type: SET_PUNCH_LIST_FOCUS_PREVIOUS, id })
