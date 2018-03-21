import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, FormGroup, FormControl, InputGroup, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {submitForm} from '../actions/action';

export class CusForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text : ''
		}
	}

	onSubmit(e){
		this.props.dispatch(submitForm(e));
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
			<Form onSubmit={this.props.handleSubmit(e=>
				this.onSubmit(e)
			)}>
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
							disabled={this.props.pristine || this.props.submitting}
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

const mapStateToProps = state => ({
	name: state.name
});

connect(mapStateToProps)(CusForm);