import React from 'react';
import { campaignContext } from '../campaignContext';
import QuestionTile from '../components/QuestionTile';

function HomeContainer(props) {
  const pageKeys = ['areYouPregnant', 'areYouCool']
  let pageQuestions = props.campaignQuestions.filter(question => pageKeys.some(key => key === question.key))

  return (
    <div className='container-fluid pt-5 pl-5'>
      {pageQuestions.map(question => <QuestionTile key={question.label} questionKey={question.key} label={question.label} fieldType={question.fieldType} />)}
    </div>
  )
};

export default campaignContext(HomeContainer);
