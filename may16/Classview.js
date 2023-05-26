export default function FromViewToComp()
{
    let textvalue=""
    function textHandler(event)
    {
        textvalue = event.target.value
        console.log("you entered=>",textvalue)
    }

    function handler()
    {
        console.log(textvalue.toUpperCase())
    }

    function handler2()
    {
        console.log(textvalue.toLowerCase())
    }

    

    return <div>
        <input type="text" onBlur={textHandler} />
        <br></br>
       <p> <button onClick={handler}>Uppercase</button></p> 
     
       <p> <button type="checkbox" onClick={handler2}>Lowercase</button> </p>

    </div>

}