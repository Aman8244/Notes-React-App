import React,{useState} from 'react';
import "./App.css";
const NotesData = [];
var key = 0,temp=2;
function App(){
  // const [tempData,setNotesData] = useState({});
  // const [title,setTitle] = useState('');
  // const [body,setBody] = useState('');
  const [currState,setState] = useState(1);
  const handleClick = function(evt){
    setState(0);
    console.log(evt)
    evt.preventDefault();
  }
  const Header = function(){
    return (
        <nav>
            <h3>Notes</h3>
            <button onClick={handleClick}>+</button>
        </nav>
    )
  }
  // var Title='',body='';
  const handleSubmit = function(evt){
    console.log(evt.target.noteTitle.value);
    console.log(evt.target.noteBody.value);
    let tempObj = {
      id:key,
      notesTitle:evt.target.noteTitle.value,
      notesBody:evt.target.noteBody.value
    }
    
    console.log(tempObj);
    NotesData.push(tempObj);
    key++;
    // console.log(tempData)
    // console.log(NotesData)
    setState(1);
    evt.preventDefault();
    
  }

  const handleBackClick = function(evt){
    setState(1);
    evt.preventDefault();
  }
  const BackButton=function(){
    return(
      <button onClick={handleBackClick}>{"<--"}</button>
    )
  }
  
  const handleDeleteClick = function(evt){
    temp++;
    console.log(evt.target.value);
    console.log(NotesData[evt.target.value]);
    delete NotesData[evt.target.deleteButton.value];
    setState(temp);
    evt.preventDefault();
  }
  if(currState !== 0){
    return (
      <div className='page'>
        <Header/>
        {NotesData.map((el)=>{
        return (
          <div className='notesBlock'>
            <form onSubmit={handleDeleteClick}>
            <div className='notesTitle'>{el.notesTitle}</div>
            <div className='notesBody'>{el.notesBody}</div>
            <button value={el.id} name='deleteButton' type='submit'>Del</button>
            </form>
          </div>
        )
       })}
      </div>
    )
  }
  else{
    return ( 
      <div className='page'>
      <Header/>
      <BackButton/>
      <form onSubmit={handleSubmit}>
        <input name='noteTitle' type='text' required className='inputTitle'/>
        <input name='noteBody' type="text" required className='inputBody'/>
        <button type='submit'>Add</button>
      </form>
    </div>
    )
  }
}

export default App;