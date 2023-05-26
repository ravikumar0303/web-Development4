new Promise((res,rej)=>
{
       res(5)
     }).then(resolve=>{
          console.log(resolve)
          return new Promise((re,rej)=>re(resolve*5) )
          }).then(resolve=>{
          console.log(resolve)
              return resolve * 5
                 }).then(resolve =>{ console.log(resolve)})

                

                 new Promise((res,rej)=>
                 {
                        res(6)

                    }).then(resolve=>{
                     console.log(resolve)
                     return new Promise((res,rej)=>res(resolve+5) )
                      }).then(resolve=>{
                         console.log(resolve)
                        return resolve + 5
                         }).then(resolve =>{ console.log(resolve)})
                          
                         new Promise((res,rej)=>
                         {
                                res(7)
        
                            }).then(resolve=>{
                             console.log(resolve)
                             return new Promise((res,rej)=>res(resolve-4) )
                              }).then(resolve=>{
                                 console.log(resolve)
                                return resolve - 5
                                 }).then(resolve =>{ console.log(resolve)})
                           
                      

                                 new Promise((res,rej)=>
                                 {
                                        res(2)
                
                                    }).then(resolve=>{
                                     console.log(resolve)
                                     return new Promise((res,rej)=>res(resolve%4) )
                                      }).then(resolve=>{
                                         console.log(resolve)
                                        return resolve / 10
                                         }).then(resolve =>{ console.log(resolve)})
                                   
                              
                   
              