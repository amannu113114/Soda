import React from 'react'
import './Model.css'

function Model() {
  return (
    <div id='model'>
        <div className="product">
          <div className="canedetail">
            <div className="caneLeft">
              <h1 id='grad'>SODA <br /><span id='since'>SINCE 2005</span></h1>
              {/* <h2>SINCE 2005</h2> */}
            </div>
            <div className="cane" style={{ "--sticker": `url("/soda.png")` }}></div>
          </div>
          {/* <div className="canedetail">
            <div className="cane" style={{ "--sticker": `url("/fcuk.jpeg")` }}></div>
          </div>
          <div className="canedetail">
            <div className="cane" style={{ "--sticker": `url("/monsterr.jpeg")` }}></div>
          </div>
          <div className="canedetail">
            <div className="cane" style={{ "--sticker": `url("/wings.jpeg")` }}></div>
          </div>
          <div className="canedetail">
            <div className="cane" style={{ "--sticker": `url("/prime.jpeg")` }}></div>
          </div> */}
        </div>

    </div>
  )
}

export default Model