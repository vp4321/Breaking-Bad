import './App.css';
import axios from 'axios'
import Header from './components/Header';
import {useState,useEffect} from 'react';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';


function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(()=>{
      axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`).then((res)=>{
        setItems(res.data)
        setIsLoading(false)
      })
  },[query])
  return (
    < >
    <Header/>
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items} />
      
    </>
  );
}

export default App;
