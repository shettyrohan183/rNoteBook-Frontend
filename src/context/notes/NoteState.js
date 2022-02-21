import NoteContext from "./noteContext"
import { useState } from "react"

const NoteState = (props)=>{
    const noteinitial = [
        {
          "_id": "620ca17a7a8aab9276fd2d6f",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:18.421Z",
          "__v": 0
        },
        {
          "_id": "620ca17b7a8aab9276fd2d71",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:19.565Z",
          "__v": 0
        },
        {
          "_id": "620ca17c7a8aab9276fd2d73",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:20.492Z",
          "__v": 0
        },
        {
          "_id": "620ca17b7a8aab9276fd2d71",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:19.565Z",
          "__v": 0
        },
        {
          "_id": "620ca17c7a8aab9276fd2d73",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:20.492Z",
          "__v": 0
        },
        {
          "_id": "620ca17b7a8aab9276fd2d71",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:19.565Z",
          "__v": 0
        },
        {
          "_id": "620ca17c7a8aab9276fd2d73",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:20.492Z",
          "__v": 0
        },
        {
          "_id": "620ca17b7a8aab9276fd2d71",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:19.565Z",
          "__v": 0
        },
        {
          "_id": "620ca17c7a8aa34b9276fd2d73",
          "user": "620c7b47af6d28c6274944d3",
          "title": "hhhhmytitle",
          "description": "this is my first note",
          "tag": "firstone",
          "date": "2022-02-16T07:02:20.492Z",
          "__v": 0
        },
      ]
      
      const [notes, setnotes] = useState(noteinitial)



      // add a note
        const addNote = (title,description,tag)=>{
          // to do api call
          console.log("Adding a new node")
           const note = {
              "_id": "620ca17c7a8aab925576fd2d73",
              "user": "620c7b47af6d28c6274944d3",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2022-02-16T07:02:20.492Z",
              "__v": 0
            };
            setnotes(notes.concat(note))
        }
      // delete a note
    const deleteNote = (id)=>{
      console.log("delteing note with id" +id)
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setnotes(newNotes)
          
        }
      // edit a note
      const editNote = (id,title,description,tag)=>{
          
      }


          return (
        <NoteContext.Provider value = {{notes, addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;