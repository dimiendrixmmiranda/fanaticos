// site para pegar os escudos https://escudosfc.com.br/
const timesDeFutebol = [
    {
        nome: 'Corinthians',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'COR',
        imagem: 'https://escudosfc.com.br/images/corinthians.png'
    },
    {
        nome: 'Palmeiras',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'PAL',
        imagem: 'https://escudosfc.com.br/images/palmeiras.png'
    },
    {
        nome: 'São Paulo',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'SAO',
        imagem: 'https://escudosfc.com.br/images/saopaulo.png'
    },
    {
        nome: 'Santos',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'SAN',
        imagem: 'https://escudosfc.com.br/images/santos.png'
    },
    {
        nome: 'Mirassol',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'MIR',
        imagem: 'https://escudosfc.com.br/images/mirassol.jpg'
    },
    {
        nome: 'RB Brangantino',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'RBB',
        imagem: 'https://escudosfc.com.br/images/bragantino.png'
    },
    {
        nome: 'Flamengo',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'FLA',
        imagem: 'https://escudosfc.com.br/images/fla.png'
    },
    {
        nome: 'Fluminense',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'FLU',
        imagem: 'https://escudosfc.com.br/images/fluminense.png'
    },
    {
        nome: 'Vasco da Gama',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'VAS',
        imagem: 'https://escudosfc.com.br/images/vasco.png'
    },
    {
        nome: 'Botafogo',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'BOT',
        imagem: 'https://escudosfc.com.br/images/botafogo.gif'
    },
    {
        nome: 'Cruzeiro',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'CRU',
        imagem: 'https://escudosfc.com.br/images/cruzeiro.png'
    },
    {
        nome: 'Atlético Mineiro',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'CAM',
        imagem: 'https://escudosfc.com.br/images/atletico-mg.png'
    },
    {
        nome: 'Grêmio',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'GRE',
        imagem: 'https://escudosfc.com.br/images/gremio.png'
    },
    {
        nome: 'Internacional',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'INT',
        imagem: 'https://escudosfc.com.br/images/internacional.png'
    },
    {
        nome: 'Goiás',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'GOI',
        imagem: 'https://escudosfc.com.br/images/goias.png'
    },
    {
        nome: 'Sport Recife',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'SPO',
        imagem: 'https://escudosfc.com.br/images/sport.png'
    },
    {
        nome: 'Ceará',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'CEA',
        imagem: 'https://escudosfc.com.br/images/ceara.png'
    },
    {
        nome: 'Fortaleza',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'FOR',
        imagem: 'https://escudosfc.com.br/images/fortaleza.png'
    },
    {
        nome: 'Atlético Goianiense',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'ACG',
        imagem: 'https://escudosfc.com.br/images/atletico-go.png'
    },
    {
        nome: 'América Mineiro',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'AME',
        imagem: 'https://escudosfc.com.br/images/america-mg.png'
    },
    {
        nome: 'Barcelona',
        liga: 'La Liga', 
        idLiga: 1001, 
        abreviacao: 'BAR',
        imagem: 'https://escudosfc.com.br/images/barca.png'
    },
    {
        nome: 'Paris Sant Germain',
        liga: 'Ligue 1', 
        idLiga: 1002, 
        abreviacao: 'PSG',
        imagem: 'https://escudosfc.com.br/images/psg.png'
    },
    {
        nome: 'AC Milan',
        liga: 'Serie A', 
        idLiga: 1003, 
        abreviacao: 'ACM',
        imagem: 'https://escudosfc.com.br/images/milan.png'
    },
    {
        nome: 'Borussia Dortmund',
        liga: 'Bundesliga', 
        idLiga: 1004, 
        abreviacao: 'BVB',
        imagem: 'https://escudosfc.com.br/images/borusia.png'
    },
    {
        nome: 'Manchester United',
        liga: 'Premier League', 
        idLiga: 1005, 
        abreviacao: 'MCU',
        imagem: 'https://escudosfc.com.br/images/manchester.png'
    },
    {
        nome: 'Ajax',
        liga: 'Outros', 
        idLiga: 1006, 
        abreviacao: 'AJA',
        imagem: 'https://escudosfc.com.br/images/ajax.png'
    },
]

const brasileiro = timesDeFutebol.filter(time => time.idLiga === 1000)
const laLiga = timesDeFutebol.filter(time => time.idLiga === 1001)
const ligue1 = timesDeFutebol.filter(time => time.idLiga === 1002)
const serieA = timesDeFutebol.filter(time => time.idLiga === 1003)
const bundesliga = timesDeFutebol.filter(time => time.idLiga === 1004)
const premierLeague = timesDeFutebol.filter(time => time.idLiga === 1005)
const outros = timesDeFutebol.filter(time => time.idLiga === 1006)

export {
    brasileiro,
    laLiga,
    ligue1,
    serieA,
    bundesliga,
    premierLeague,
    outros
}