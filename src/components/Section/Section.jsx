import PropTypes from 'prop-types';
// import { Fragment } from 'react';
// import styled from 'styled-components';


function Section({ title, children }) {
  
    return (
      <div>
      <h2>{title}</h2>
        {children}      
       </div>
    )
 
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;