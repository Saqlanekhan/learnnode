const http = require('http');

const server = http.createServer((req,res) => {

    // console.log(req.url,req.method,req.headers);

    const url = req.url;

    if (url === '/home' ){

        res.setHeader("content-type","text/html");
        res.write('<html>');
        res.write('<header><title>MY first page</title></header>');
        res.write('<body><h1>WELCOME to home</h1></body>');
        res.write('</html>');
         return res.end();

    }


    if (url === '/about' ){

        res.setHeader("content-type","text/html");
        res.write('<html>');
        res.write('<header><title>MY first page</title></header>');
        res.write('<body><h1>WELCOME to about us page </h1></body>');
        res.write('</html>');
         return res.end();

    }


    if (url === '/node' ){

        res.setHeader("content-type","text/html");
        res.write('<html>');
        res.write('<header><title>MY first page</title></header>');
        res.write('<body><h1>WELCOME to my node project</h1></body>');
        res.write('</html>');
         return res.end();

    }

    res.setHeader("content-type","text/html");
    res.write('<html>');
    res.write('<header><title>MY first page</title></header>');
    res.write('<body><h1>no</h1></body>');
    res.write('</html>');
    res.end();
// process.exit();
});
server.listen(3000);