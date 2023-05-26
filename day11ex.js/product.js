export default class Product
{
    constructor(pname,pcost,pdetails)
    {
        this.productName=pname;
        this.productcost=pcost;
        this.productdetails=pdatils;

    }
    show()
    {
        console.log("product Information is:",this.productName,this.productcost,this.productdetails)
    }
}