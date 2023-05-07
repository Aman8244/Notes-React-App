import React,{useState} from 'react';
import "./App.css";
const NotesData = [{
  id:0,
  notesBody:"Hello dummy ",
  notesTitle:"It's Me aman"
}];
var key = 1,temp=2;
function App(){
  const [currState,setState] = useState(1);
  const handleClick = function(evt){
    setState(0);
    console.log(evt)
    evt.preventDefault();
  }
  const Header = function(){
    return (
        <nav className='navbar bg-body-tertiary'>
           <div className='container-fluid'>
           <a className='navbar-brand mb-0 h1' href='#App'>Notes</a>
            <button onClick={handleClick} type='button' className='btn btn-outline-dark'>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </button>
           </div>
        </nav>
    )
  }
  const handleSubmit = function(evt){
    // console.log(evt.target.noteTitle.value);
    // console.log(evt.target.noteBody.value);
    let tempObj = {
      id:key,
      notesTitle:evt.target.noteTitle.value,
      notesBody:evt.target.noteBody.value
    }
    // console.log(tempObj);
    NotesData.push(tempObj);
    key++;
    setState(1);
    evt.preventDefault();
    
  }

  const handleBackClick = function(evt){
    setState(1);
    evt.preventDefault();
  }
  const BackButton=function(){
    return(
      <div className='theme-dark'>
      <button type='button' className='btn-close' aria-label="Close" onClick={handleBackClick}></button>
      </div>
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
      <div className='page' id='App'>
        <Header/>
        {NotesData.map((el)=>{
        return (
          <div className='notesBlock card'>
            <form className='card-body' onSubmit={handleDeleteClick}>
            <div className='notesTitle'><h2 className='card-title'>{el.notesTitle}</h2></div>
            <div className='notesBody card-text'>{el.notesBody}</div>
            <button value={el.id} name='deleteButton' type='submit' className='btn btn-outline-danger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
            </button>
            </form>
          </div>
        )
       })}
      
      </div>
    )
  }
  else{
    return ( 
      <div className='page' id='App'>
      {/* <Header/> */}
      <BackButton/>
      <form className='form' onSubmit={handleSubmit}>
        <input name='noteTitle' type='text' required className='inputTitle input form-control' placeholder='Title'/><br/>
        <textarea name='noteBody' type="text" required className='inputBody form-control' placeholder='Text'/><br/>
        <button type='submit' className='btn btn-outline-'>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
            </button>
      </form>
    </div>
    )
  }
}

export default App;