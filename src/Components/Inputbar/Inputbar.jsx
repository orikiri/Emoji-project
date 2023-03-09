import React from 'react'
import classes from '../Container/Container.module.css'


function Inputbar({setCurrentPage, setSearchValue}) {
  return (
    <>
        <div className={classes.input}>
            <input type='text' placeholder='Найти свой емоджи...' onChange={({target}) => {setCurrentPage(1); setSearchValue(target.value)}} />
        </div>
    </>
  )
}

export default Inputbar