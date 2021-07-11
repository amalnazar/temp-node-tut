const http=require('http')
http.createServer((req,res)=>{
    console.log(req)
    if(req.url=='/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url=='/about'){
        res.end('Here is our short about')

    
    }
    res.end(`<h1>Oops</h1> <p>We cant find the apage you are looking for`)
   
}).listen(5000)