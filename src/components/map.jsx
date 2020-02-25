import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { equals, propOr } from 'ramda'

import { px, getPunchTypeColor } from '../utils'
import { setPunchListFocus } from '../store/actions'

const Marker = styled.div({
  width: px(10),
  height: px(10),
  borderRadius: '80% 0 55% 50% / 55% 0 80% 50%',
  border: ({ color }) => color,
  background: ({ color }) => color,
  transform: 'rotate(135deg)',
  cursor: 'pointer'
})

const Wrapper = styled.div({
  width: '100%',
  height: '100%'
})

const SimpleMap = () => {
  const tasks = useSelector(propOr([], 'filteredPunchListTasks'), equals)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <GoogleMapReact
        defaultCenter={{ lat: 32.93539, lng: -96.7823 }}
        defaultZoom={12}
      >
        {tasks.map(({ lat, lon, id, discipline }) =>
          <Marker
            key={id}
            lat={lat}
            lng={lon}
            text={'+'}
            color={getPunchTypeColor(discipline)}
            onClick={() => dispatch(setPunchListFocus(id))}
          />
        )}
      </GoogleMapReact>
    </Wrapper>)
}

export default SimpleMap
