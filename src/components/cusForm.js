import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Button, FormGroup, FormControl, InputGroup, Form} from 'react-bootstrap';

export function CusForm(props){
	//onChange={e=>input.value=e.target.value}
/*
			value={input.value}
			onChange={(e)=>{
				console.log("e.target.value");
				console.log(e.target.value);
				console.log("input.value");
				console.log(input.value);
				input.value += e.target.value				
			}}

*/

	const nameInput = ({input, type, placeholder, name})=>(

		<FormControl 
			name={name} 
			type={type} 
			placeholder={placeholder}
			value={input.value}
			onChange={(e)=>{
				console.log("e.target.value");
				console.log(e.target.value);
				console.log("input.value");
				console.log(input.value);
				input.value += e.target.value				
			}}
		
		/>
	);
	
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
