import React from 'react'
import { Consumer } from './Context'

export default function User() {
  return (
    <Consumer>
        {
            value => <h1>{value.name}</h1>
        }
    </Consumer>
  )
}