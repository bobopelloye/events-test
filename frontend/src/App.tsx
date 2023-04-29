import React from 'react';
import { Layout } from 'antd';
import {
  Routes,
  Route,
} from "react-router-dom";
import MyHeader from './layout/header'
import Events from './events'
import FormEvent from './events/components/form'

const { Content } = Layout;


const App =() => {
 
  return (
    <Layout className="layout">
       <MyHeader/>
       
       <Content style={{ margin: '24px 16px ' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 550, background: '#fff' }}>
            <Routes>
              <Route path="/" element={<Events/>} />
              <Route path="/events/add" element={<FormEvent/>} />
            </Routes>
          </div>
        </Content>
    </Layout>
  );
};

export default App;