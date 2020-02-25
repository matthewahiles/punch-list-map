import {
  cond, isNil, always, propEq, mergeLeft, T, identity, map, when, evolve, both,
  findIndex, nth, prop, pipe, defaultTo
} from 'ramda'
import {
  FILTER_PUNCH_TASKS, SET_PUNCH_STATUS, SET_PUNCH_LIST_FOCUS, FILTER_PUNCH_STATUS,
  SET_PUNCH_LIST_FOCUS_NEXT, SET_PUNCH_LIST_FOCUS_PREVIOUS
} from './actions'
import { punchTaskDisciplines, punchStatusTypes } from '../utils'

import { sampleTasks } from '../sampleData'

const defaultState = {
  disciplineFilter: punchTaskDisciplines.ALL,
  statusFilter: punchStatusTypes.ALL,
  punchListTasks: sampleTasks,
  filteredPunchListTasks: sampleTasks,
  punchListFocus: undefined
}

const buildFilter = (discipline, status) => both(
  discipline === 'ALL' ? T : propEq('discipline', discipline),
  status === 'ALL' ? T : propEq('status', status)
)

const setFilter = (s, { discipline, status }) =>
  mergeLeft({
    disciplineFilter: discipline || s.disciplineFilter,
    statusFilter: status || s.statusFilter,
    filteredPunchListTasks: s.punchListTasks.filter(
      buildFilter(discipline || s.disciplineFilter, status || s.statusFilter)
    )
  })(s)

const updatePunchStatus = (s, { status, id }) =>
  evolve({
    punchListTasks: map(when(propEq('id', id), mergeLeft({ status })))
  })(s)

const updatePunchFocus = (s, { id }) => mergeLeft({ punchListFocus: id })(s)

const getCurrentIndex = (id) => defaultTo(0, findIndex(propEq('id', id)))
const getNextId = (l, id) => pipe(getCurrentIndex(id), idx => nth(l.length * -1 + idx + 1, l), prop('id'))(l)
const updatePunchFocusNext = (s, { id }) => mergeLeft({
  punchListFocus: getNextId(s.filteredPunchListTasks, id)
})(s)
const getPreviousId = (l, id) => pipe(getCurrentIndex(id), idx => nth(idx - 1, l), prop('id'))(l)
const updatePunchFocusPrevious = (s, { id }) => mergeLeft({
  punchListFocus: getPreviousId(s.filteredPunchListTasks, id)
})(s)

const state = f => (s, _) => f(s)
const action = f => (_, a) => f(a)
const typeIs = v => propEq('type', v)

export const runActions = cond([
  [state(isNil), always(defaultState)],
  [action(typeIs(FILTER_PUNCH_TASKS)), setFilter],
  [action(typeIs(FILTER_PUNCH_STATUS)), setFilter],
  [action(typeIs(SET_PUNCH_STATUS)), updatePunchStatus],
  [action(typeIs(SET_PUNCH_LIST_FOCUS)), updatePunchFocus],
  [action(typeIs(SET_PUNCH_LIST_FOCUS_NEXT)), updatePunchFocusNext],
  [action(typeIs(SET_PUNCH_LIST_FOCUS_PREVIOUS)), updatePunchFocusPrevious],
  [T, identity]
])
