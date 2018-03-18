import React from 'react';
import * as BS from 'react-bootstrap';

//import {CusForm} from './components/cusForm';
import CusForm from './cusForm';
//import CusForm from './cusForm2';

export default class Test extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isTest: true
		}
	} 

	render(){
		return (
			<BS.Grid>
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