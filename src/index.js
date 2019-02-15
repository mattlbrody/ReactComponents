import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:50pm" 
					commentText="hi" 
					imageAv={faker.image.avatar()} 
				/>
			</ApprovalCard>
			<CommentDetail 
				author="Alex" 
				timeAgo="Today at 2:00pm" 
				commentText="hello" 
				imageAv={faker.image.avatar()} />
			<CommentDetail 
				author="Jane" 
				timeAgo="Today at 1:10am" 
				commentText="hiya" 
				imageAv={faker.image.avatar()} />
		</div>

	);
};

ReactDOM.render(<App />, document.querySelector('#root'));