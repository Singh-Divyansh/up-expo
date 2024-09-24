// src/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Shakti</h2>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/rating">Safety Ratings</SidebarLink>
      <SidebarLink to="/saferoute">Safe Route</SidebarLink>
      <SidebarLink to="/police">Police Location</SidebarLink>
      <button>SOS</button>
    </SidebarContainer>
  );
};

export default Sidebar;
