import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import {useEffect,useState} from 'react'

import Pagination from './Components/Paginate/Pagination';
import Inputbar from './Components/Inputbar/Inputbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [allEmoji, setAllEmoji] = useState([])
  const [title, setTitle] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);
  
  // ------ F E T C H ------ //
  // useEffect (() => {
  //   fetch("https://63f4e81e55677ef68bc677d9.mockapi.io/emoji")
  //   .then((res) => res.json())
  //   .then((data) => {setData(data); setAllEmoji(data)})
  // }, [])

  // ------ A X I O S ------ //
  useEffect(() => {
    axios.get('https://63f4e81e55677ef68bc677d9.mockapi.io/emoji')
    .then((response) => {
      setData(response.data); setAllEmoji(response.data); // прописываем так, ибо респонс - это объект, а в нем есть ключ дата, где есть все эмоджи - выводим их
    })
  }, [])

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = data.slice(firstCardIndex,lastCardIndex);


  function paginate(pageNum) {
    setCurrentPage(pageNum)
  }
  function firstPage() {
    setCurrentPage(1)
  }
  function lastPage() {
    setCurrentPage(9)
  }
  function searchEmoji(event) {
    let inputValue = event.target.value.trim()
    let searchValues = inputValue.split(' ')
    let newDataEmojies = allEmoji;

    searchValues.forEach((inputWord) => {
      newDataEmojies = newDataEmojies.filter((emoji) => {
        return emoji.title.toLowerCase() === '' ? emoji : emoji.title.toLowerCase().includes(inputWord)
      })
    })
    setData(newDataEmojies)
  }
    


  return (
    <div className="App">
      <Header />
      <Inputbar setTitle={setTitle} searchEmoji={searchEmoji}/>
      <Container data={currentCards} title={title} allData={data}/>
      <Pagination totalCards={data.length} cardsPerPage={cardsPerPage} paginate={paginate} firstPage={firstPage} lastPage={lastPage} currentPage={currentPage} setCardsPerPage={setCardsPerPage}/>
    </div>
    )
  }

export default App;