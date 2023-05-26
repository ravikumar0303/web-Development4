import { Component } from "react";

export default class StatePrint extends Component
{
    constructor()
    {
        super()
        this.selectedstate=""
        this.handler1 = this.handler1.bind(this)
    }

    handler1(e)
    {
        this.selectedstate=e.target.value
        console.log(this.selectedstate)
    }

    render()
    {
        return <div>
            <p>
            <select>
                 <option>Select</option> 
                <option value="MH">Maharashtra</option>
                <option value="TN">Tamilnadu</option>
                <option value="KA">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Lucknow">Uttar pradesh</option>
            </select>

                    </p>      
        </div>
       
    }
}