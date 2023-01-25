import React from "react";
import "./Task.css"

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 32,
      width: '98%',
      backgroundColor: '#D3D3D3',
      borderRadius: 50, 
      margin: 10,
      boxShadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 50,
      textAlign: 'right',
      paddingTop: 3,
    }
  
    const labelStyles = {
      padding: 10,
      color: 'white',
      // fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;