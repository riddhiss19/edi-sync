
import React from "react";

const Progress = (props) => {
  const {completed } = props;
  const containerStyles = {
    height: 50,
    width: '100%',
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`, 
    backgroundColor: "#AAFF8A",
    borderRadius: 10,
    textAlign: 'right',
  }

  const labelStyles = {
    float: 'right',
    padding: 10,
    color: '#0D062D',
    
  }
  const  h1={
    float: 'left',
    padding: 10,
    color: '#0D062D',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      <h1 style={h1}>Project Progress</h1>
        <span><h1 style={labelStyles}>{`${completed}%`} </h1></span>
      </div>
    </div>
  );
};

export default Progress;