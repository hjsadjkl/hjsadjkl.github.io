import { useState, useRef, MutableRefObject } from 'react';

import InputForm from './components/InputForm';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';

import './App.css' ;


function App() {
  const [inputItems, setinputItems] = useState([{ title: '' , date: '', did: false }])
  const [alertVisable, setAlertVisable] = useState(false);
  
  const handleSubmit = (inputTitle: string, inputDate: string) => {
    (inputTitle && inputDate ?
      setinputItems([...inputItems, { title: inputTitle, date: inputDate, did:false }]) : setAlertVisable(true)
    )
  }

  const handleCheck = (index : number)=>{
    let arr= inputItems;
    arr[index].did = (arr[index].did!=true);
    setinputItems([...arr]);
  }

  const onClose = () => {
    setAlertVisable(false);
  }

  const itemDelete = (index : number) =>{
    let arr= inputItems;
    arr.splice(index,1);
    setinputItems([...arr]);
  }

  return (
    <div>
      {alertVisable && <Alert onClose={onClose}>請輸入事項及日期</Alert>}
      <InputForm handleSubmit={handleSubmit} />
      <ListGroup items={inputItems} itemDelete={itemDelete} itemCheck={handleCheck} />
    </div>
  );
  /* return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  )
  return <div><ListGroup items={city} heading='Cities' onSelectItem={handleSelectItem} /></div>; */
}

export default App
