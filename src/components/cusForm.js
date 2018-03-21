import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, InputGroup, Form} from 'react-bootstrap';

export function CusForm(props){
		
	return (
		<Form onSubmit={this.onSubmit} >
			<FormGroup>				
				<InputGroup>
					<Field 
						type='text' 
						name='name' 
						component={props.nameInput}
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

const mapStateToProps = ({
	//things to map
});

connect(mapStateToProps)(CusForm);

export default reduxForm({
	form: 'CusForm'
})(CusForm);
