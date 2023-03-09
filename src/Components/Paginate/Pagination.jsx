import React from 'react'
import classes from './Pagination.module.css'
import '../../App.css'


function Pagination({totalCards, cardsPerPage, currentPage, setCurrentPage, setCardsPerPage, currentCards}) {
    
        let startPage = 0;
        let endPage = 0;
    
    const pageNumbers = []
    for( let i=1; i <= Math.ceil(totalCards/cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    if (currentPage === 1 || currentPage === 2) {
        startPage = 0;
        endPage = 5;
      } else if (
        currentPage === currentCards ||
        currentPage === currentCards - 1 ||
        currentPage === currentCards - 2
      ) {
        startPage = currentCards - 5;
        endPage = currentCards;
      } else if (currentPage > 2) {
        startPage = currentPage - 3;
        endPage = currentPage + 2;
      }


  return (
    <div className={classes.pagination_filter}>
        <div className={classes.pagination}>
            {currentPage === 1 ? (
                <button disabled={true} onClick={() => setCurrentPage(pageNumbers[pageNumbers[0]])}>First</button>
            ) : (
                <button onClick={() => setCurrentPage(pageNumbers[pageNumbers[0]-1])}>First</button>
            )}

            {pageNumbers.slice(startPage, endPage).map((number) => (
                <button key={number} onClick={() => setCurrentPage(number)} className={`${currentPage === number ? 'active' : ''}`}>{number}</button>
            )) }
        

           {currentPage === currentCards ? (
            <button disabled={true} onClick={() => setCurrentPage(pageNumbers.length)}>Last</button>
            ):(
                <button onClick={() => setCurrentPage(pageNumbers.length)}>Last</button>
            )}
            
        </div>
            <div className={classes.perPageFilter}>
                <p>Per Page</p>
                <select className={classes.select} onChange={(e) => setCardsPerPage(e.target.value)}>
                    <option>12</option>
                    <option>15</option>
                    <option>21</option>
                    <option>24</option>
                    <option>51</option>
                </select>
            </div>
    </div>
  )
}

export default Pagination