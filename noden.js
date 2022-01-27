const http = require('http');

const fs = require('fs')

const server = http.createServer((req,res) => {

console.log('srever')
    const url = req.url;

    const method = req.method;
    
    if (url === '/' ){
     
       res.setHeader("content-type","text/html");
      
        res.write('<html>');
        res.write('<header><title>Enter Message</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        
         return res.end();

    }



  
    if(url ==='/message' && method=="POST")
    {
        const body = [];
        req.on('data',(chunk) =>
        {
            console.log(chunk);
            body.push(chunk);
        });

        return  req.on('end',() => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                
                 return res.end();   
            });

        });
      
    }
    res.setHeader("content-type","text/html");
    res.write('<html>');
    res.write('<header><title>MY first page</title></header>');
    res.write('<body><h1>hello hh from my khan </h1></body>');
    res.write('</html>');
    res.end();
// process.exit();
});
server.listen(4000);
