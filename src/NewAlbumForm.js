import React, { useState } from "react";
import {app , storage, db} from './base'
import {
    collection,
    addDoc,
 } from "firebase/firestore";


export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const nameRef = collection(db,"name");

  const onAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const createAlbum = async () => {
    await addDoc(nameRef, { name: "Some Name2"});
  };

  return (
    <>
      <input value={albumName} onChange={onAlbumNameChange} type="text" />
      <button onClick={createAlbum}>Create album</button>
    </>
  );
};