var dns = require('dns');

//zmieniamy serwery na usluge google public dns
dns.setServers(['8.8.8.8', '8.8.4.4']);
//wyswietlamy tablice adresow ip
//w naszym przypadku adres naszego routera, ktory pelni role serwera dns
//console.log(dns.getServers());

//resolveAny zwraca wszystkie dane o hoscie
//pierwszy argument to interesujacy nas host
//w callback mamy error i hostnames
/*dns.resolveAny('google.com', function(err, hostnames) {
    console.log(hostnames);
})*/

//teraz otrzymujemy adresy ip v4
/*dns.resolve4('google.com', function(err, hostnames) {
    console.log(hostnames);
})*/

//teraz otrzymujemy adresy ip v6
/*dns.resolve6('google.com', function(err, hostnames) {
    console.log(hostnames);
})*/

//wyswietla serwery dns
/*dns.resolveNs('google.com', function(err, hostnames) {
    console.log(hostnames);
})*/

//wyswietla serwery pocztowe
/*dns.resolveMx('google.com', function(err, hostnames) {
    console.log(hostnames);
})*/

//wyswietla serwery pocztowe, drugi argument rodzaj wpisu dns
/*dns.resolve('google.com', 'MX', function(err, hostnames) {
    console.log(hostnames);
})*/

//reverse look dla adresu ip google
//zwraca nam pierwszy host, ktory lezy na trasie
//pomiedzy naszym komputerem, a serwerem docelowym
dns.reverse('172.217.16.14', function(err, hostnames) {
    console.log(hostnames);
})