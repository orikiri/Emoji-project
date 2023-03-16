import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import {useEffect,useState} from 'react'

import Pagination from './Components/Paginate/Pagination';
import Inputbar from './Components/Inputbar/Inputbar';
import axios from 'axios';


function App() {
  // ------- H O O K S ------ //
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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
      setData(response.data); // прописываем так, ибо респонс - это объект, а в нем есть ключ дата, где есть все эмоджи - выводим их
    })
  }, [])

  // ------ C O N S T S ------ //
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = Math.ceil(data.length / cardsPerPage)

  const filteredEmoji = data.filter((elem) => {
    const fullSearch = searchValue.split(' ');
    return fullSearch.every((word) => elem.title.toLowerCase().includes(word.toLowerCase()))
  })

  const emojiList = filteredEmoji.slice(firstCardIndex, lastCardIndex)
    

  return (
    <div className="App">
      <Header />
      <Inputbar 
        setCurrentPage={setCurrentPage} 
        setSearchValue={setSearchValue} />
      <Container  
        emojiList={emojiList}/>
      <Pagination 
        totalCards={data.length} 
        cardsPerPage={cardsPerPage} 
        setCardsPerPage={setCardsPerPage} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        currentCards={currentCards}/>
    </div>
    )
  }

export default App;