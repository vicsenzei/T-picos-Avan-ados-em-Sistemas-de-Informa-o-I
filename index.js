var http = require('http');

var port = 8080;

async function tenta() {
    const response = await fetch("https://catfact.ninja/fact");
    const fatos = await response.json();
    return JSON.stringify(fatos);
}

const server = http.createServer((req, response) =>{
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    
    tenta().then(result => {
        response.write(result);
        response.end();
    }).catch(error => {
        console.error(error);
        response.end("Erro ao obter os dados.");
    });
});

server.listen(port, ()=> {
    console.log("Rodando na porta 8080");
});
