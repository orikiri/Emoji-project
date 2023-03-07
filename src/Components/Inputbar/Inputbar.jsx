import React from 'react'
import classes from '../Container/Container.module.css'


function Inputbar({setTitle, searchEmoji}) {
  return (
    <>
        <div className={classes.input}>
            <input type='text' placeholder='Найти свой емоджи...' onChange={searchEmoji} />
        </div>
    </>
  )
}

export default Inputbar