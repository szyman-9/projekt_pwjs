var samolotyApp = angular.module('samolotyApp',[]);

samolotyApp.controller('ListCtrl', function($scope) { 
    $scope.galleries = [
        {
            'title': 'Airbus A320',
            'thumbnail': 'img/a320.jpg',
            'article': 'Pasażerski samolot średniego zasięgu produkowany przez przedsiębiorstwo Airbus. Jest pierwszym samolotem pasażerskim wyposażonym w cyfrowy układ sterowania lotem fly-by-wire. Samolot ten został oblatany 22 lutego 1987, a rok później 28 marca 1988 odbył swój pierwszy lot komercyjny w barwach Air France. Airbus A320 jest bazowym modelem samolotów A318, A319 i A321. Według stanu na koniec 2012 wyprodukowano ponad 5400 sztuk samolotów z rodziny A320. Samolot ten jest bezpośrednią odpowiedzią europejskiego producenta na amerykańskiego Boeinga 737.'
        },
        {
            'title': 'Boeing 737',
            'thumbnail': 'img/b737.jpg',
            'article': 'Najpopularniejszy na świecie wąskokadłubowy samolot pasażerski średniego zasięgu, produkowany w wielu wersjach od 1967 (obecna generacja od 1996) przez firmę Boeing w Stanach Zjednoczonych. Jest to najczęściej zamawiany samolot pasażerski wszech czasów: do tej pory w sumie zamówiono 14985. Boeing 737 znalazł się w księdze rekordów Guinnessa po tym gdy producent wybudował 10 000 egzemplarzy, stając się tym samym pasażerskim samolotem z napędem odrzutowym wybudowanym w największej liczbie egzemplarzy. Boeing 737 jest tak szeroko rozpowszechniony, że w każdej chwili ponad 1250 tych maszyn znajduje się w powietrzu. Średnio co pięć sekund gdzieś na świecie startuje lub ląduje jedna maszyna typu 737. W 2013 miesięczne tempo produkcji wynosiło 38 sztuk, a w 2014 wzrosło do 42 egzemplarzy na miesiąc.'
        },
        {
            'title': 'Beechcraft Bonanza',
            'thumbnail': 'img/bonanza.jpg',
            'article':'Lekki samolot turystyczny zaprezentowany przez przedsiębiorstwo Beechcraft w 1947 roku, nadal w produkcji, najdłużej produkowany model samolotu na świecie. Samolot jest w całości skonstruowany z metalu i może pomieścić pilota oraz 3-5 pasażerów.'
        },
        {
            'title': 'Antonov An-225 Mrija',
            'thumbnail': 'img/mrija.jpg',
            'article': 'An-225 Mrija (ukr. Мрiя – marzenie, Kod NATO – Cossack) – sześciosilnikowy samolot transportowy produkcji radzieckiej, pochodzący z biura konstrukcyjnego Antonowa, zbudowany w zakładzie O.K. Antonowa w Kijowie. Jest to największy obecnie używany i najcięższy w historii samolot. Zbudowano tylko jeden egzemplarz (budowy drugiego nie ukończono).'
        },
        {
            'title': 'Cessna 172',
            'thumbnail': 'img/c172.jpg',
            'article': 'Czteromiejscowy, jednosilnikowy górnopłat. Popularny samolot szkolno-treningowy. Egzemplarzy Cessny 172 wyprodukowano więcej niż jakiegokolwiek innego samolotu, nadal pozostaje w produkcji. Do samolotu tego typu należy rekord świata w najdłuższym locie z tankowaniem w powietrzu. Dnia 4 grudnia 1958 samolot Cessna 172 z załogą: Robert Timm i John Cook, wystartował z lotniska McCarran w Las Vegas. Załoga wylądowała dnia 7 lutego 1959 r. Ich lot trwał 64 dni 22 godziny 19 minut i 5 sekund. Do tej pory jest najdłuższym lotem w historii lotnictwa.'
        },
        {
            'title': 'McDonnel Douglas DC-9',
            'thumbnail': 'img/dc9.jpg',
            'article': 'Wąskokadłubowy odrzutowy samolot pasażerski średniego zasięgu. Jest to pierwszy model z dużej rodziny tych samolotów stworzonych przez firmę McDonnell Douglas przejętą później przez Boeing Company.'
        }

]});

samolotyApp.controller('ContactCtrl', function($scope) {
    $scope.contact = [
        {
            'autor': 'Łukasz Szymański',
            'rok': '2020',
            'mail': '18929 (małpa) student.pwsz.elblag.pl',
            'indeks': '18929'
        }
    ]
})