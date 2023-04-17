import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6435774f41cab3c9d3a30449",
      user: "641cad63e1a04014c5d144d1",
      title: "My Title 2",
      description: "My desc 2",
      tag: "tag21 tag2",
      date: "2023-04-11T15:05:51.337Z",
      __v: 0,
    },
    {
      _id: "64358e8a3bbd1d0395e378da",
      user: "641cad63e1a04014c5d144d1",
      title: "My Title 2",
      description: "My desc 223432",
      tag: "tag21 tag2",
      date: "2023-04-11T16:44:58.111Z",
      __v: 0,
    },
    {
      _id: "64358ead901f7a0b25095113",
      user: "641cad63e1a04014c5d144d1",
      title: "My Title 2",
      description: "My desc 1111223432",
      tag: "tag21 tag2",
      date: "2023-04-11T16:45:33.241Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
