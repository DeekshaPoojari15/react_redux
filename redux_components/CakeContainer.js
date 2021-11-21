import React from 'react'
import { connect } from 'react-redux'
import { buyCake , buyIcecream } from '../redux'

function CakeContainer(props){
	return(
		<div>
			<h2>Number of Cakes - {props.numOfCakes}</h2>
			<button onClick={props.buyCake}>Buy Cake</button>
			<h2>Number of IceCreams - {props.numOfIcecreams}</h2>
			<button onClick={props.buyIcecream}>Buy IceCream</button>
		</div>
	)
}

const mapStateToProps = state => {
	return{
		numOfCakes:state.numOfCakes,
		numOfIcecreams:state.numOfIcecreams
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCake : () => dispatch(buyCake()),
		buyIcecream : () => dispatch(buyIcecream())	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);