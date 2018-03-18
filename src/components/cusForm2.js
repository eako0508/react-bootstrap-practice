import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, FormGroup, FormControl, InputGroup, Form} from 'react-bootstrap';
//disabled={this.props.pristine || this.props.submitting}
export class CusForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text : ''
		}
	}

	handleChange(e){
		this.setState({
			text: e.target.value
		})
	}
	onSubmit(e){
		//e.preventDefault();
		console.log(e);
	}
	nameInput({input, type, placeholder, name}){
		return (
			<FormControl 
				name={name} 
				type={type} 
				placeholder={placeholder}
				value={input.value}
				onChange={input.onChange}
			/>
		);
	}

	render(){
		
		return (
			<Form onSubmit={this.props.handleSubmit(e=>this.onSubmit(e))} >
				<FormGroup>				
					<InputGroup>
						<Field 
							type='text' 
							name='name' 
							component={this.nameInput} 
							placeholder='Name'
						/>
						<InputGroup.Button>
							<Button bsStyle='primary' type='submit'
							>
								Submit
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			</Form>
		);
	}
}

export default reduxForm({
	form: 'CusForm'
	
})(CusForm);
