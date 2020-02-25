import { propOr } from 'ramda'

export const px = v => `${v}px`
export const vh = v => `${v}vh`
export const vw = v => `${v}vw`
export const pct = v => `${v}%`

export const punchTaskDisciplines = {
  ALL: 'ALL',
  '3D': '3D Software generated Items',
  A: 'Architectural',
  B: 'Geotechnical',
  C: 'Civil',
  D: 'Process',
  E: 'Electrical',
  F: 'Fire Protection',
  G: 'General',
  H: 'Hazardous Material',
  I: 'Interiors',
  J: 'Justice/Detention',
  K: 'Food Service',
  L: 'Landscape',
  M: 'Mechanical',
  O: 'Operations',
  P: 'Plumbing',
  Q: 'Equipment',
  S: 'Structural',
  T: 'Telecommunication',
  TY: 'Security',
  U: 'Railway',
  V: 'Survey / Mapping',
  W: 'Civil Works',
  X: 'Other Disciplines',
  Z: 'Contractors / Shop Drawings'
}

export const punchStatusTypes = {
  ALL: 'ALL',
  PENDING: 'Pending',
  STARTED: 'Started',
  COMPLETE: 'Complete'
}

const punchDisciplineColors = {
  A: 'red',
  B: 'blue',
  C: 'green',
  P: 'yellow'
}

export const getPunchTypeColor = v => propOr('#111', v, punchDisciplineColors)
export const getDisciplineName = v => propOr('Unknown', v, punchTaskDisciplines)
