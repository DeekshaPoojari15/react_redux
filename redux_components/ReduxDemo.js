import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import CakeContainer from './CakeContainer'

function ReduxDemo () {
	return(
		<Provider store={store} >
			<div>
				<CakeContainer />
			</div>
		</Provider>
	)
}

export default ReduxDemo;