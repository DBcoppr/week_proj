const bookmodel =require("../models/bookModel")

try{
    let result= bookmodel.create(
        {
        Tid:23,
        Ttitle:"affsfa",
        Ttext:"hfakfa",
    },
    {
        Tid:23,
        Ttitle:"affsfa",
        Ttext:"hfakfa",
    }
    
    
    )
}
catch(err){console.log(err)
  }