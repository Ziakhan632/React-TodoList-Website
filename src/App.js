import React, { useState } from 'react'
import '../src/App.css'
import Orderlist from './Components/Orderlist';
const App = () => {

  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);
  const ItemEvent = (event) => {
    setInputList(event.target.value)

  }
  
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")

  }
  const deleteItems=(id)=>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((aryElem,index)=>{
     return index!==id;

      })
    })
  }

  return (
    <>
      <div className='main_div'>

        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <input type='text' placeholder='Add a Items' onChange={ItemEvent} value={inputList} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {
              items.map((curElem,index) => {
                // return <li>{curElem}</li>
                return <Orderlist
                 text={curElem} 
                 key={index}
                 id={index}
                 onSelect={deleteItems}
                 />
              })
            }
          </ol>
        </div>
      </div>

    </>
  )
}
export default App