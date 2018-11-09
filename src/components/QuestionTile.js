import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

function QuestionTile(props) {
  const { questionKey, label, fieldType } = props;

  return(
    <div className="row justify-content-between pb-5">
      <div className='form-inline'>
        <FormGroup>
          <div className='pr-5'>
            <Label for={questionKey} aria-describedby="Age for this individual">{label}</Label>
          </div>
          <Input className="form-rounded" type={fieldType} name={questionKey} id={questionKey}/>
        </FormGroup>
      </div>
    </div>
  )
}

export default QuestionTile;
