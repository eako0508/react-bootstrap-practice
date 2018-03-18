import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, FormGroup, FormControl, InputGroup, Form} from 'react-bootstrap';

/*
				onChange={(e)=>{

					input.onChange
					
					props.handleChange(e)
					console.log(e.target.value);
					input.value += e.target.value;
					console.log(input.value);
					
				}}
*/


export function CusForm(props){
	console.log(props);
	const nameInput = function({input, type, placeholder, name}){
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
	
	return (
		<Form onSubmit={
				e=>props.handleSubmit(event=>{
					event.preventDefault();
					console.log(event);

				})
			} >
			<FormGroup>				
				<InputGroup>
					<Field 
						type='text' 
						name='name' 
						component={nameInput} 
						placeholder='Name'
					/>
					<InputGroup.Button>
						<Button bsStyle='primary' type='submit'
						disabled={props.pristine || props.submitting}>
							Submit
						</Button>
					</InputGroup.Button>
				</InputGroup>
			</FormGroup>
		</Form>
	);
}

export default reduxForm({
	form: 'CusForm'
})(CusForm);
