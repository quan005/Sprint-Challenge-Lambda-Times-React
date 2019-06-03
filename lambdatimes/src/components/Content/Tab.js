import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabStyle = styled.div`
  ${props => (props.type === 'ActiveTab' ? 
    `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    
    :hover {
      text-decoration: underline;
    }
    `
   : 
    null
   )}

   ${props => (props.type === 'Tab' ? 
    `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    
    :hover {
      text-decoration: underline;
    }
    `
   : 
    null
   )}
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab' --DONE */
  return (
    <TabStyle
      type={props.tab === props.selectedTab ? "ActiveTab" : "Tab"}
      onClick={() => {
        props.selectTabHandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. --DONE */
      }}
    >
      {props.tab.toUpperCase()}
    </TabStyle>
  );
};


// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tab;
