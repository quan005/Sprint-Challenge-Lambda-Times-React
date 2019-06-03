import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsStyle = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;


const Tabs = props => {

  const tabs = props.tabs.map((tab, index) => (
    <Tab
      selectTabHandler={props.selectTabHandler}
      selectedTab={props.selectedTab}
      tab={tab}
      key={index}
    />
  )); 

  return (
    <TabsStyle>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {tabs}
      </Topics>
    </TabsStyle>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;