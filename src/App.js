import './App.css';
import axios from 'axios'
import Header from './components/Header';
import { useState, useEffect } from 'react';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';
import ReactPaginate from 'react-paginate';



function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0)
  const perPage = 10;
  const pagesVisited = pageNumber * perPage;
  const pageCount = Math.ceil(items.length / perPage)

  useEffect(() => {
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`).then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
  }, [query,pageNumber])
  return (
    < >
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items.slice(pagesVisited, pagesVisited + perPage)} />
      <br />
      <div className="d-flex justify-content-center">
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({selected}) => setPageNumber(selected)}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
    </>
  );
}

export default App;
