import React from 'react'
import './Partner.css'

function Partner() {
  return (
    <div id='partner'>
        {/* <h1>Partners</h1> */}
        <div className="partnerContent">
            <img src="/pepsicola.png" className='logos'/>
            <h2>Pepsi Cola</h2>
        </div>
        <div className="partnerContent">
            <img src="/monsterlogo.png" className='logos'/>
            <h2>Monster Energy</h2>
        </div>
        <div className="partnerContent">
            <img src="/cocalogo.png" className='logos'/>
            <h2>Coca Cola</h2>
        </div>
        <div className="partnerContent">
            <img src="/spritelogo.png" className='logos'/>
            <h2>Sprite</h2>
        </div>
        <div className="partnerContent">
            <img src="/redbulllogo.png" className='logos'/>
            <h2>Red Bull</h2>
        </div>
    </div>
  )
}

export default Partner