// site para pegar os escudos https://escudosfc.com.br/
const timesDeFutebol = [
    {
        nome: 'Corinthians',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'COR',
        imagem: 'https://i.imgur.com/JfnEjcK.png'
    },
    {
        nome: 'Palmeiras',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'PAL',
        imagem: 'https://i.imgur.com/xolEtYy.png'
    },
    {
        nome: 'São Paulo',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'SAO',
        imagem: 'https://i.imgur.com/MTYf1gd.png'
    },
    {
        nome: 'Santos',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'SAN',
        imagem: 'https://i.imgur.com/ZUGLJaR.png'
    },
    {
        nome: 'Mirassol',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'MIR',
        imagem: 'https://i.imgur.com/tZZDl6J.png'
    },
    {
        nome: 'RB Brangantino',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'RBB',
        imagem: 'https://i.imgur.com/hYrRIcS.png'
    },
    {
        nome: 'Flamengo',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'FLA',
        imagem: 'https://i.imgur.com/KytncYu.png'
    },
    {
        nome: 'Fluminense',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'FLU',
        imagem: 'https://i.imgur.com/3RxuCUw.png'
    },
    {
        nome: 'Vasco da Gama',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'VAS',
        imagem: 'https://i.imgur.com/y9Q1rfB.png'
    },
    {
        nome: 'Botafogo',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'BOT',
        imagem: 'https://i.imgur.com/Z73U8Zz.png'
    },
    {
        nome: 'Cruzeiro',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'CRU',
        imagem: 'https://i.imgur.com/EzyCknn.png'
    },
    {
        nome: 'Atlético Mineiro',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'CAM',
        imagem: 'https://i.imgur.com/OOB1wxp.png'
    },
    {
        nome: 'Bahia',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'BAH',
        imagem: 'https://i.imgur.com/PzSnPNc.png'
    },
    {
        nome: 'Grêmio',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'GRE',
        imagem: 'https://i.imgur.com/DCgxTdS.png'
    },
    {
        nome: 'Internacional',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'INT',
        imagem: 'https://i.imgur.com/YylUkuT.png'
    },
    {
        nome: 'Sport Recife',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'SPO',
        imagem: 'https://i.imgur.com/2OUDWFr.png'
    },
    {
        nome: 'Ceará',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'CEA',
        imagem: 'https://i.imgur.com/rGGQ4Bf.png'
    },
    {
        nome: 'Fortaleza',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'FOR',
        imagem: 'https://i.imgur.com/Rn7Xj7b.png'
    },
    {
        nome: 'Vitória',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'VIT',
        imagem: 'https://i.imgur.com/K9d15m3.png'
    },
    {
        nome: 'Juventude',
        liga: 'Brasileiro',
        idLiga: 1000, 
        abreviacao: 'JUV',
        imagem: 'https://i.imgur.com/LQy4xQ7.png'
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