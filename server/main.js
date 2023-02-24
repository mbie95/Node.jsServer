//dolaczanie serwera http, zaladowanie modulu http
var server = require('http');

//tworzenie serwera nasluchuje na porcie 8001
//metoda create serwer przyjmuje jako argument funkcje callback
//ktora odpowiada adresem url lub Hello world! na kazde zapytanie
server.createServer(function (request, response) {
    //pobieramy adres url
    var url = request.url;
    //naglowek powiadamia przegladarke o rodzaju danych, jakie wysylamy
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //wyswietlamy adres url
    console.log(url);
    //zawartosc danych, ktore przegladarka ma wyswietlic
    response.end(url);
    //response.end('Hello world!'); //odpowiada Hello world! na kazde zapytanie
}).listen(8001); //podajemy port na jakim maszyna ma pracowac

//wyswietlenie wiadomosci po odpaleniu serwera
console.log('Serwer nasluchuje pod adresem 127.0.0.1:8001');