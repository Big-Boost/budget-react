import React, {useState} from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm({addEntry}) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);

    return (
      <Form unstackable>
        <Form.Group>
          <Form.Input placeholder='New shiny thing' icon='tags' width={12} label='Description' value={description} onChange={(event) => setDescription(event.target.value)}/>
          <Form.Input width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' value={value} onChange={(event) => setValue(event.target.value)}/>
        </Form.Group>
        <Segment compact>
            <Checkbox 
                toggle 
                label='Is Expense?' 
                checked={isExpense}
                onChange={() => setIsExpense(oldState => !oldState)}
            />
        </Segment>
        <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
      </Form>
    )
}

export default NewEntryForm
