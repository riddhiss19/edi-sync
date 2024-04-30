import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Comment = () => {
  const reviewItems = [
    {
      reviewer: 'A M Magar',
      comment: 'Excellent problem formulation, though the proposed solution may require additional validation.',
      timestamp: '4 hours ago',
    },
    {
      reviewer: 'A M Magar',
      comment: 'The presented approach is interesting, but the methodology could be further refined to address potential limitations.',
      timestamp: '4 days ago',
    },
  ];

  return (
    <div className="guide-review-container">
      {reviewItems.map((item, index) => (
        <div className="review-item" key={index}>
          <div className="reviewer-info">
            <img src="https://via.placeholder.com/50" alt="Reviewer" />
            <span>{item.reviewer}</span>
          </div>
          <div className="review-comment">{item.comment}</div>

          <div className="bottom-comment"> <div className="review-timestamp">{item.timestamp}</div>
            <div className="review-actions">
              <i className="fa fa-thumbs-up"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;