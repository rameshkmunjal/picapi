import React, {useState} from 'react';
import './App.css';

import ImageList from './imageList';
import SearchBar from './SearchBar';

const App=()=>{
  const [searchText, setSearchText]=useState([]);
  const onTermSubmit=(searchTerm)=>{
    console.log(searchTerm);
    setSearchText(searchTerm);

  }
 
  return(
    <div>
      <h1>Pics App</h1>
      <SearchBar onSubmit={onTermSubmit} />
      <ImageList term={searchText} />
      
    </div>
  )
}

export default App;