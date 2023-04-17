import React, { useCallback, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
function App() {
const [showPara,setShowPara]=  useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
 const toggleParagraphHandler =useCallback(( ) =>{
   if (allowToggle) {
    setShowPara(prevShowPara => !prevShowPara)

    }
  },[allowToggle])
  const allowToggleHandler = () => {
    setAllowToggle(true)
 }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
