import React from 'react'
import User from './User'
import { Provider } from './Context'

export default function App() {

	const [value, setValue] = React.useState({name:"react", roll:10})

  return (
	<Provider value={value}>
		<User/>
	</Provider>
  )
}
