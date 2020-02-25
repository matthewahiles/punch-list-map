/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { propEq, equals } from 'ramda'

import { Column, Row } from './layout'
import { px, getPunchTypeColor, getDisciplineName } from '../utils'
import {
  setPunchListFocus, setPunchListFocusNext, setPunchListFocusPrevious
} from '../store/actions'

const Container = styled.div({
  background: '#d2d2d2',
  borderColor: 'black',
  borderWidth: px(1),
  borderStyle: 'solid',
  borderLeftWidth: px(4),
  borderLeftColor: ({ color }) => color
})
const Title = styled.div({
  fontWeight: 600,
  marginTop: px(5),
  marginBottom: px(3)
})
const Text = styled.div({})
const Button = styled.button({
  borderRadius: px(10),
  background: 'transparent',
  borderColor: '#111111',
  marginRight: px(3),
  marginBottom: px(3)
})

const TaskCard = ({ discipline, title, details, id, status }) => {
  const isUnfolded = useSelector(propEq('punchListFocus', id), equals)
  const dispatch = useDispatch()
  if (isUnfolded) {
    return (
      <Container color={getPunchTypeColor(discipline)}>
        <Column style={{ marginLeft: px(4) }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Title style={{ marginBottom: '1px' }}>{title}</Title>
            <Button
              style= {{ marginTop: px(5) }}
              onClick={() => dispatch(setPunchListFocus(0))}
            >
            Close
            </Button>
          </Row>
          <Text>Details: {details}</Text>
          <Row style={{ justifyContent: 'space-between' }}>
            <Text>Type: {getDisciplineName(discipline)}</Text>
            <Button
              onClick={() => dispatch(setPunchListFocusNext(id))}
            >
              Next
            </Button>
          </Row>
          <Row style={{ justifyContent: 'space-between' }}>
            <Text>Status: {status}</Text>
            <Button
              onClick={() => dispatch(setPunchListFocusPrevious(id))}
            >
              Previous
            </Button>
          </Row>
        </Column>
      </Container>
    )
  }
  return (
    <Container color={getPunchTypeColor(discipline)}>
      <Column style={{ marginLeft: px(4) }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Title style={{ marginBottom: '1px' }}>{title}</Title>
          <Button
            style= {{ marginTop: px(5) }}
            onClick={() => dispatch(setPunchListFocus(id))}
          >
            Expand
          </Button>
        </Row>
        <Text>{getDisciplineName(discipline)}</Text>

      </Column>
    </Container>
  )
}

export default TaskCard
