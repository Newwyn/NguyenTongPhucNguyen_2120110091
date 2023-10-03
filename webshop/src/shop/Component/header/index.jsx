import React from 'react';
import TopNav from './Component/topNav';
import ContentNav from './Component/contentNav';
import BotNav from './Component/botNav';
const index = () => {
    return (
        <div id="templateHeader">
  <div className="mainHeader--height" style={{minHeight: '184.35px'}}>
    <header className="mainHeader mainHeader_temp03" id="site-header">
    <TopNav />
    <ContentNav />
    <BotNav />
    </header></div></div>

    );
};

export default index;