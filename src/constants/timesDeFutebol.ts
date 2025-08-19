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