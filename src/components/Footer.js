import React from 'react';

let style = {
  backgroundColor: "#282c34",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const Footer = ({ children }) => (
  <div>
      <div style={phantom} />
      <div style={style}>
          { children }
      </div>
  </div>
);

export default Footer
