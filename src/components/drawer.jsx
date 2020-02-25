/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'
import { equals, propOr } from 'ramda'

import TaskCard from './task-card'
import { Column, Row } from './layout'
import { punchTaskDisciplines, punchStatusTypes, vw, px } from '../utils'
import { setDisciplineFilter, setStatusFilter } from '../store/actions'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: vw(33)
})
const Text = styled.div({})
const Filter = styled.select({
  background: 'transparent',
  height: px(24)
})
const Option = styled.option({})

const useQuery = () => new URLSearchParams(useLocation().search)

const Drawer = ({ history }) => {
  const tasks = useSelector(propOr([], 'filteredPunchListTasks'), equals)
  const filteredDiscipline = useSelector(propOr('ALL', 'disciplineFilter'), equals)
  const filteredStatus = useSelector(propOr('ALL', 'statusFilter'), equals)
  const dispatch = useDispatch()
  const disciplineParam = useQuery().get('discipline')
  const statusParam = useQuery().get('status')
  if (filteredDiscipline !== disciplineParam) {
    dispatch(setDisciplineFilter(disciplineParam))
  }
  if (filteredStatus !== statusParam) {
    dispatch(setStatusFilter(statusParam))
  }

  return (
    <Container
      style={{
        overflow: 'auto',
        background: '#ececec'
      }}>
      <Column style={{ height: px(60), borderStyle: 'solid', borderWidth: px(1) }}>
        <Row style={{
          justifyContent: 'space-between', paddingTop: px(5), paddingLeft: px(5)
        }}>
          <Text>Filter By Type:</Text>
          <Filter>
            {Object.entries(punchTaskDisciplines)
              .map(([id, name]) =>
                <Option
                  key={id}
                  onClick={() => history.push(`/punch-list?discipline=${id}&status=${filteredStatus}`)}
                  {...id === disciplineParam ? { selected: 'selected' } : {}}
                >
                  {name}
                </Option>)
            }
          </Filter>
        </Row>
        <Row style={{
          justifyContent: 'space-between', paddingTop: px(5), paddingLeft: px(5)
        }}>
          <Text>Filter By Status:</Text>
          <Filter>
            {Object.entries(punchStatusTypes)
              .map(([id, name]) =>
                <Option
                  key={id}
                  onClick={() => history.push(`/punch-list?discipline=${filteredDiscipline}&status=${id}`)}
                  {...id === statusParam ? { selected: 'selected' } : {}}
                >
                  {name}
                </Option>)
            }
          </Filter>
        </Row>
      </Column>
      {tasks.map(task => <TaskCard key={task.id} {...task} />)}
    </Container>)
}

export default withRouter(Drawer)
