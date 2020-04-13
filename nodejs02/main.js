var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    console.log(url.parse(_url, true));
    var pathName = url.parse(_url, true).pathname;

    if(pathName === '/'){
        if(queryData.id === undefined){
           
            fs.readFile(`data/${queryData.id}`,'utf8',(err,data)=>{
                var title = 'Welcome';
                var description = 'Hello Node.js';
                var template = `
                    <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                    <img src="coding.jpg" width="100%">
                    </p><p style="margin-top:45px;">${description}
                    </p>
                    </body>
                    </html>
                    
                `;
            response.writeHead(200);
            response.end(template);
            });
            
        }else{
            fs.readFile(`data/${queryData.id}`,'utf8',(err,data)=>{
                var template = `
                    <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                    <img src="coding.jpg" width="100%">
                    </p><p style="margin-top:45px;">${data}
                    </p>
                    </body>
                    </html>
                    
                `;
            response.writeHead(200);
            response.end(template);
            });
        }
      
    }else{
        response.writeHead(404);
        response.end('Not Found');

    }



});
app.listen(3000);