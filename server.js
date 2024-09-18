const http = require('http');


const contatos = [];
const operadoras = [];

    const requestListener = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
    // Responder a requisições OPTIONS diretamente
    res.writeHead(204);
    res.end();
    return;
    }

    if (req.method === 'POST' && req.url === '/contatos') {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const novoContato = JSON.parse(body); 
        contatos.push(novoContato); 
        console.log('Contato recebido:', novoContato);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensagem: 'Contato adicionado com sucesso!' }));
    });
    } 
    else if (req.method === 'GET' && req.url === '/contatos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(contatos));
    } else if (req.method === 'POST' && req.url === '/operadoras') {
        let body = '';

        req.on('data', chunk => {
        body += chunk.toString();
        });

        req.on('end', () => {
        const novaOperadora = JSON.parse(body);
        operadoras.push(novaOperadora);
        console.log('Operadora recebida:', novaOperadora);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensagem: 'Operadora adicionada com sucesso!' }));
        });

    } else if (req.method === 'GET' && req.url === '/operadoras') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(operadoras));
    }

    else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo ao servidor! Use /contatos para ver ou adicionar contatos.');
    } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Rota não encontrada');
    }
};

const server = http.createServer(requestListener);

server.listen(5511, () => {
  console.log('Servidor rodando na porta 5511');
});
