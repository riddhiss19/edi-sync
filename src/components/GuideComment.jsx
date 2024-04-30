import React, { useState } from 'react';


const AddReview = () => {
  const [review, setReview] = useState('');

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSaveReview = () => {
    // Handle save review logic
    console.log('Saved review:', review);
  };

  const handleCancelReview = () => {
    setReview('');
  };

  return (
    <div className="add-review">
      <div className="upperbox">
        
            <img
                src="/src/assets/img/member1.png"
                alt="User"
                className="user-img"
            />
        
        <div className="subp">
        <textarea
            className="review-input"
            placeholder="Add comment or review"
            value={review}
            onChange={handleReviewChange}
        ></textarea>
      </div>
      </div>
      <div className="rbox">
      <div className="review-Guactions">
        <button className="Guaction-btn save-btn" onClick={handleSaveReview}>
          Save
        </button>
        </div>
        <div className="review-Guactions">
        <button className="Guaction-btn cancel-btn" onClick={handleCancelReview}>
          Cancel
        </button>
        </div>
      
      </div>
    </div>
  );
};

export default AddReview;