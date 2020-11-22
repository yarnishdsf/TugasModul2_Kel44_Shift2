import React from 'react';
import { Layout } from 'antd';
import './App.css';
import CompAndProps from './components/CompAndProps';
import Link from './elements/Link';
import { Content, Header } from 'antd/lib/layout/layout';

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style = {{ background: '#04304f ', padding : '30px', marginBottom:'35px'}}>
        <div className="title" style={{float:"right", marginRight:'15px', fontSize:"1.5rem", color: "white"}}>KELOMPOK 44</div>
        <div style={{textAlign: "left"}}>
           <Link>Modul 2</Link>
           <Link>Modul 3</Link>
         </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="Components">
         <CompAndProps bgcolor = "#dfe3e5"/>
         </div></Content>
        
      </Layout>
    </div>
  );
}

export default App;
