
import {useState} from 'react';
//import AjaxReact from './AjaxReact';
//import App from './Put';
// import LifeCC from './LifeCC';
// import LifeFC from './LifeFC'
import FetchShop from './FetchShop'
import Shop from "./Shop"
import Sample from './Sample';
import Shopping from './Shopping';
  // import ShoppingExx from './ShoppingExx'

export default function App19()
{


  // let [choice,setchoice]=useState(false)
  // let [msg,setmsg] = useState("hi")

  return <>


             {/* <ShoppingExx/>           */}
            <Shopping/>

        {/* <Sample/> */}
            {/* <Shop/> */}

        {/* <FetchShop/> */}

       
{/*     
        <input type="checkbox" onChange={(e)=>{setchoice(e.target.checked)}} ></input>
       <input type="text" onBlur={(e)=>{setmsg(e.target.value)}} ></input>
        {choice && <LifeFC num1={msg}/>} */}

      {/* <LifeCC/> */}
    {/* <App/> */}
    {/* <AjaxReact/> */}

  </>
}