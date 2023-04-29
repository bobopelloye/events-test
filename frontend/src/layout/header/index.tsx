import React, { useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const items = [
  {
    label:  (
      <Link to="/">
         Evenement
      </Link>
    ),
    key: 'event',
    icon: <HomeOutlined />,
  },
 
];

const App  = () => {

  return <Menu selectedKeys={['event']} mode="horizontal" items={items} />

  
};

export default App;