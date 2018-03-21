import React from 'react';
//import {connect} from 'react-redux';
import * as BS from 'react-bootstrap';

//import {CusForm} from './components/cusForm';
//import CusForm from './cusForm';
import CusForm from './cusForm2';
import Typed from 'react-typed';


export default class Test extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isTest: true
		}
	}
	/*
	nameInput = ({input, type, placeholder, name}) => {
		return 
			<BS.FormControl 
				name={name} 
				type={type} 
				placeholder={placeholder}
				value={input.value}
				onChange={input.onChange}
			/>;
	}
	
	renderUser = ({user, a, b}) => {
	    return <User key={user.id} user={user} onClick={this.deleteUser} />;
	  }
	*/

	render(){
		return (
			<BS.Grid>
				<BS.Row>
					<BS.Col md={6}>
						<Typed 
							strings={[
								'Here you can find me!',
								'Come and find me!',
								'...'

								]}
							typeSpeed={40}
							backSpeed={50}
						/>
					</BS.Col>
				</BS.Row>
				<BS.Row>
					<BS.Col md={6}>
						{/*<CusForm />*/}
						<CusForm />
					</BS.Col>
				</BS.Row>
				<BS.Row>
					<BS.Col md={6}>
						<BS.ButtonGroup>
							<BS.Button md={3} bsStyle='primary'>primary</BS.Button>
							<BS.Button bsStyle='success'>primary</BS.Button>
							<BS.Button bsStyle='warning'>primary</BS.Button>
							<BS.Button bsStyle='danger'>primary</BS.Button>
						</BS.ButtonGroup>
					</BS.Col>
				</BS.Row>
			</BS.Grid>
		);
	}
}
/*
const mapStateToProps = state => ({
	name: state.name
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
*/