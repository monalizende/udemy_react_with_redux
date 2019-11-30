import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from "./CommentDetails"
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
      <div className={"ui container comments"}>
          <ApprovalCard>
              <CommentDetails
                  author="Sam"
                  content="Nice Post!!!"
              />
          </ApprovalCard>
          <ApprovalCard>
             <CommentDetails
              author="Tim"
              content="Great Post!!!"
          />
          </ApprovalCard>
          <ApprovalCard>
              <CommentDetails
              author="Jerry"
              content="Good Post!!!"
          />
          </ApprovalCard>
      </div>
    )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
