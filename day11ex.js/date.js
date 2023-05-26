class Date
{
    _month
    constructor()
    {
        this._month=2
    }

    get month()
    {
        console.log("getter")
        return this._month
    }

     set month(n)
     {
         console.log("setter")
         if(m>=1 && m<=12){
           this._month=n
         }
       else {
           console.log("the server did not set wrong month")
       }
     }
}

 let d =new MyDate()
 d.month=10
  console.log("month=",d.month)

