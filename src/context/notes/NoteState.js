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
        }
      ]
      const [notes, setnotes] = useState(noteinitial)
          return (
        <NoteContext.Provider value = {{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;