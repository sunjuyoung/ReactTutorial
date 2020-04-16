var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHtml(title,list,description){
    return `  
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${description}
    </p>
    </body>
    </html>`;
};

function templateList(fileList){
    var list = `<ul>`;
    var i = 0;
    while(i < fileList.length){
        list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
        i++;
    }
    list+=`</ul>`;
    return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    console.log(url.parse(_url, true));
    var pathName = url.parse(_url, true).pathname;

    if(pathName === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data',(err,fileList)=>{
                var list = templateList(fileList);
                    var title = 'Welcome';
                    var description = 'Hello Node.js';
                    var template = templateHtml(title,list,`<h2>${title}</h2>${description}`);
                  
                response.writeHead(200);
                response.end(template);
            })
        }else{

            fs.readdir('./data',(err,fileList)=>{
                var list = templateList(fileList);
                var title = queryData.id;
                
                fs.readFile(`data/${queryData.id}`,'utf8',(err,data)=>{
                var description = data;
                var template = templateHtml(title,list,`<h2>${title}</h2>${description}`);
            response.writeHead(200);
            response.end(template);
            });
        });
        }
      
    }else{
        response.writeHead(404);
        response.end('Not Found');

    }

});
app.listen(3000);