export default function Functioncomponent()
{
    let textvalue=""
    function textHandler(event)
    {
        textvalue = event.target.value
        console.log("you entered=>",textvalue)
    }

    function handler1()
    {
        console.log(textvalue.toUpperCase())
    }

     function handler2(e)
     {
        console.log(textvalue.toLowerCase()))
     }  

     render()
    {
        return <div>
            <select onChange={textHandler}>
            Touppercase : <input type="checkbox" onClick={handler1}  />
           Tolowercase : <input type="checkbox"  onClick={handler2} />
            {/* Titlecase : <input type="checkbox"  /> */}
                
            </select>
        </div>
    }
}