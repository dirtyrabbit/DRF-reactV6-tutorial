import React, {useState, useEffect} from 'react'


const ListPage = () => {
    
    let [notes, setNote] = useState([])

    useEffect(()=>{
        getNotes()
    },[])

    let getNotes = async() =>{
        let response = await fetch("http://127.0.0.1:8000/api/")
        let data = await response.json()

        setNote(data)
    }
    
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>
            &#x1F4C8; KNN    
            </h2>
        </div>
        <div className='notes-list'>
        {notes.map((note,index)=>(
              <div key ={index}>
                  {note.title}
                  </div>
          ))}
            </div>
      
    </div>
  )
}

export default ListPage
