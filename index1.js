const Myfun =(number,yourFunction)=>{
    const c=number*number;

    const d={
        amila:()=> console.log("amila"),
    };
    yourFunction(c,d);
    };

    Myfun(4,(req,res)=>{
        console.log('c is: ',req);
        res.amila();
    });