


import React from 'react';
import "../../css/Jumbo.css";
import Animate from '../../Motion';

const Jumbo = (props) => {
return (
<div className="box text-center" style={{backgroundImage: `url(${props.image}`}}>
<br/><br/>
<br/><br/>
        <Animate>
        <div style={{maxWidth:"800px",margin:"auto"}}>
          <b className='title' style={{fontSize:40}}>{props.title}</b>
        </div>
        <div style={{maxWidth:"580px",fontSize:20,margin:"auto"}}>
         {props.body}
        </div>
          <br/>
        <p>
                {
                props.button ? props.button:null
                }
        </p>
        </Animate>
        <br/>
</div>

);

};

export default Jumbo;
