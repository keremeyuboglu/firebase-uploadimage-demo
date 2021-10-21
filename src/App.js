import { collection, getDocs } from '@firebase/firestore';
import React, { useEffect, useState} from 'react';
import {app , storage, db} from './base'
import { NewAlbumForm } from './NewAlbumForm';
import { UploadPhoto } from './UploadPhoto';

function App() {
  const [albums,setAlbums] = useState([])
  const albumsCollectionRef = collection(db,"albums")
/*
  useEffect(() =>{
    database.collection('albums').onSnapshot((snapshot) =>{
        const tempAlbums = []
        snapshot.forEach(doc =>{
          tempAlbums.push(doc.data());
        })
        setAlbums(tempAlbums)
    })
  })*/

  useEffect(() =>{
    const getAlbums = async () => {
      const data = await getDocs(albumsCollectionRef);
      console.log(data);
    };
    getAlbums();
  }, [])

  return (
    <>
      <section>
        {
          albums.map(album => (
            <aside key={album.name}>
              <img src={album.image} alt="album"/>
              <h3>{album.name}</h3>
            </aside>
          ))
        }
      </section>

      <footer>
        <NewAlbumForm>
          
        </NewAlbumForm>
        <UploadPhoto>

        </UploadPhoto>
      </footer>
    </>
  );
}

export default App;
