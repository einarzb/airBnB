app.factory('homesFactory', function(){

  var homesFactory = {};
  var filterName = "";
  var homes = [
    {
    id: 1,
    image: "https://robohash.org/consequaturabmodi.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Private Room",
    price: 148,
    owner: 11,
    latitude: 40.8536972,
    longitude: 111.6568972,
    description: "Public Utilities"
    },
    {
    id: 2,
    image: "https://robohash.org/voluptasutarchitecto.bmp?size=50x50&set=set4",
    city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Private Room",
    price: 56,
    owner: 1,
    latitude: 13.7876294,
    longitude: 101.3885001,
    description: "Capital Goods"
    },
    {
    id: 3,
    image: "https://robohash.org/omnisaperiamvelit.png?size=50x50&set=set4",
    city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Private Room",
    price: 86,
    owner: 54,
    latitude: -11.3462099,
    longitude: 38.411369,
    description: "Finance"
    },
    {
    id: 4,
    image: "https://robohash.org/providentsedqui.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 7,
    type:"Private Room",
    price: 24,
    owner: 82,
    latitude: 23.401553,
    longitude: 114.59862,
    description: "Capital Goods"
    },
    {
    id: 5,
    image: "https://robohash.org/nihilmagniperferendis.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Private Room",
    price: 83,
    owner: 11,
    latitude: "51.32372",
    longitude: "-113.60475",
    description: "Technology"
    },
    {
    id: 6,
    image: "https://robohash.org/natusnonnulla.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Private Room",
    price: 82,
    owner: 48,
    latitude: 58.3669548,
    longitude: 45.5416034,
    description: "Capital Goods"
    },
    {
    id: 7,
    image: "https://robohash.org/nonilloat.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Private Room",
    price: 72,
    owner: 75,
    latitude: 52.211713,
    longitude: 6.8954592,
    description: "Finance"
    },
    {
    id: 8,
    image: "https://robohash.org/cumrepudiandaecorporis.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Private Room",
    price: 73,
    owner: 99,
    latitude: 30.594336,
    longitude: 105.236903,
    description: "Public Utilities"
    },
    {
    id: 9,
    image: "https://robohash.org/inventoreperspiciatisquasi.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 9,
    type:"Private Room",
    price: 13,
    owner: 61,
    latitude: 38.92,
    longitude: -76.99,
    description: "Public Utilities"
    },
    {
    id: 10,
    image: "https://robohash.org/ipsacommodiquam.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Private Room",
    price: 112,
    owner: 59,
    latitude: 38.2905469,
    longitude: 139.5501904,
    description: "Transportation"
    },
    {
    id: 11,
    image: "https://robohash.org/voluptatemtemporaest.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Entire Apartment",
    price: 20,
    owner: 26,
    latitude: 40.214408,
    longitude: 116.409549,
    description: "Finance"
    },
    {
    id: 12,
    image: "https://robohash.org/autetex.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Entire Apartment",
    price: 14,
    owner: 82,
    latitude: "53.8191",
    longitude: "27.5215",
    description: "Consumer Services"
    },
    {
    id: 13,
    image: "https://robohash.org/laudantiumquiaeum.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Entire Apartment",
    price: 59,
    owner: 15,
    latitude: 8.5974312,
    longitude: -80.1791368,
    description: "Basic Industries"
    },
    {
    id: 14,
    image: "https://robohash.org/dignissimosetquos.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    price: 89,
    owner: 42,
    latitude: -7.7326298,
    longitude: 113.1292657,
    description: "Health Care"
    },
    {
    id: 15,
    image: "https://robohash.org/doloribusetsoluta.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Entire Apartment",
    price: 53,
    owner: 33,
    latitude: 7.945451,
    longitude: 4.7872834,
    description: "Consumer Services"
    },
    {
    id: 16,
    image: "https://robohash.org/aperiamconsequunturexplicabo.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    price: 94,
    type:"Entire Apartment",
    owner: 54,
    latitude: 43.8507498,
    longitude: 131.8648449,
    description: "Capital Goods"
    },
    {
    id: 17,
    image: "https://robohash.org/impeditfacereeos.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Entire Apartment",
    price: 133,
    owner: 57,
    latitude: 13.5543249,
    longitude: -7.4435441,
    description: "Technology"
    },
    {
    id: 18,
    image: "https://robohash.org/cupiditateinassumenda.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Entire Apartment",
    price: 128,
    owner: 94,
    latitude: 10.4868673,
    longitude: -66.739712,
    description: "n/a"
    },
    {
    id: 19,
    image: "https://robohash.org/solutaautconsequatur.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Entire Apartment",
    price: 113,
    owner: 23,
    latitude: 36.7284026,
    longitude: 53.8101659,
    description: "Finance"
    },
    {
    id: 20,
    image: "https://robohash.org/utprovidentvoluptas.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 6,
    type:"Entire Apartment",
    price: 89,
    owner: 31,
    latitude: -19.6499319,
    longitude: -45.2243578,
    description: "Finance"
    },
    {
    id: 21,
    image: "https://robohash.org/pariaturnisiiure.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Entire Apartment",
    price: 132,
    owner: 69,
    latitude: -19.8730077,
    longitude: 47.0291162,
    description: "Public Utilities"
    },
    {
    id: 22,
    image: "https://robohash.org/sedeumpariatur.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Entire Apartment",
    price: 68,
    owner: 81,
    latitude: 42.3784509,
    longitude: -83.3032607,
    description: "Consumer Services"
    },
    {
    id: 23,
    image: "https://robohash.org/veroeaaut.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 13,
    type:"Entire Apartment",
    price: 12,
    owner: 80,
    latitude: 53.5659675,
    longitude: 15.28454,
    description: "Finance"
    },
    {
    id: 24,
    image: "https://robohash.org/ipsamaccusamuserror.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Entire Apartment",
    price: 97,
    owner: 36,
    latitude: 11.5358447,
    longitude: 124.4553581,
    description: "Consumer Non-Durables"
    },
    {
    id: 25,
    image: "https://robohash.org/estsapienteofficia.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Entire Apartment",
    price: 47,
    owner: 4,
    latitude: 39.982718,
    longitude: 117.078294,
    description: "Finance"
    },
    {
    id: 26,
    image: "https://robohash.org/quiconsequatursit.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Entire Apartment",
    price: 133,
    owner: 16,
    latitude: 38.895126,
    longitude: 117.005412,
    description: "Technology"
    },
    {
    id: 27,
    image: "https://robohash.org/evenietaspernaturomnis.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Entire Apartment",
    price: 22,
    owner: 12,
    latitude: -1.8409583,
    longitude: -49.4872858,
    description: "Public Utilities"
    },
    {
    id: 28,
    image: "https://robohash.org/reprehenderitomnisatque.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Entire Apartment",
    price: 99,
    owner: 84,
    latitude: 52.3444367,
    longitude: 4.9091171,
    description: "n/a"
    },
    {
    id: 29,
    image: "https://robohash.org/nobisnullaexcepturi.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Entire Apartment",
    price: 51,
    owner: 58,
    latitude: 21.377246,
    longitude: 110.250123,
    description: "n/a"
    },
    {
    id: 30,
    image: "https://robohash.org/veritatisperferendisvel.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Entire Apartment",
    price: 104,
    owner: 67,
    latitude: 62.0299471,
    longitude: 129.7171247,
    description: "Public Utilities"
    },
    {
    id: 31,
    image: "https://robohash.org/estdelectusconsequuntur.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 13,
    type:"Entire Apartment",
    price: 47,
    owner: 2,
    latitude: 46.8584087,
    longitude: 31.3849652,
    description: "Consumer Services"
    },
    {
    id: 32,
    image: "https://robohash.org/ametvoluptasut.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Entire Apartment",
    price: 36,
    owner: 26,
    latitude: 49.718789,
    longitude: 17.0837083,
    description: "Technology"
    },
    {
    id: 33,
    image: "https://robohash.org/etetenim.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Entire Apartment",
    price: 71,
    owner: 5,
    latitude: 32.203072,
    longitude: 114.513012,
    description: "Finance"
    },
    {
    id: 34,
    image: "https://robohash.org/aututofficia.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Entire Apartment",
    price: 103,
    owner: 70,
    latitude: 6.8793892,
    longitude: -72.189,
    description: "Consumer Services"
    },
    {
    id: 35,
    image: "https://robohash.org/ducimusaccusantiumvoluptates.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Entire Apartment",
    price: 58,
    owner: 55,
    latitude: 14.5788472,
    longitude: 121.0143656,
    description: "Finance"
    },
    {
    id: 36,
    image: "https://robohash.org/atqueomnistotam.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Private Room",
    price: 257,
    owner: 21,
    latitude: 46.0714056,
    longitude: 40.8784823,
    description: "Energy"
    },
    {
    id: 37,
    image: "https://robohash.org/mollitiaitaquedolores.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 2,
    type:"Private Room",
    price: 58,
    owner: 3,
    latitude: 7.0086472,
    longitude: 100.4746879,
    description: "Health Care"
    },
    {
    id: 38,
    image: "https://robohash.org/evenietsequiunde.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 4,
    type:"Private Room",
    price: 38,
    owner: 13,
    latitude: 56.1966377,
    longitude: 86.6235938,
    description: "Finance"
    },
    {
    id: 39,
    image: "https://robohash.org/voluptatemutpossimus.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Private Room",
    price: 150,
    owner: 44,
    latitude: 35.72154,
    longitude: 111.350842,
    description: "Energy"
    },
    {
    id: 40,
    image: "https://robohash.org/fugitinventoreassumenda.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 4,
    type:"Private Room",
    price: 72,
    owner: 66,
    latitude: 59.4294432,
    longitude: 24.5475697,
    description: "n/a"
    },
    {
    id: 41,
    image: "https://robohash.org/animiasimilique.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Private Room",
    price: 106,
    owner: 24,
    latitude: 39.8213543,
    longitude: 47.675856,
    description: "Miscellaneous"
    },
    {
    id: 42,
    image: "https://robohash.org/aliquamomnisquasi.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 7,
    type:"Private Room",
    price: 58,
    owner: 79,
    latitude: -6.3624934,
    longitude: 106.021195,
    description: "Basic Industries"
    },
    {
    id: 43,
    image: "https://robohash.org/praesentiumetaliquid.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Private Room",
    price: 119,
    owner: 20,
    latitude: 17.0994461,
    longitude: 121.6975078,
    description: "Health Care"
    },
    {
    id: 44,
    image: "https://robohash.org/consequunturistead.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Private Room",
    price: 29,
    owner: 67,
    latitude: 15.3091676,
    longitude: -61.3793554,
    description: "Consumer Durables"
    },
    {
    id: 45,
    image: "https://robohash.org/voluptatemquiaab.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Private Room",
    price: 91,
    owner: 40,
    latitude: 22.637151,
    longitude: 114.012813,
    description: "Consumer Services"
    },
    {
    id: 46,
    image: "https://robohash.org/modiiddolor.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Private Room",
    price: 112,
    owner: 1,
    latitude: -6.6889038,
    longitude: 107.6185727,
    description: "Finance"
    },
    {
    id: 47,
    image: "https://robohash.org/quieaet.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Private Room",
    price: 99,
    owner: 9,
    latitude: -32.9760359,
    longitude: -60.6499935,
    description: "Public Utilities"
    },
    {
    id: 48,
    image: "https://robohash.org/placeatdignissimosipsam.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Private Room",
    price: 140,
    owner: 98,
    latitude: 41.0394198,
    longitude: -8.5359207,
    description: "Health Care"
    },
    {
    id: 49,
    image: "https://robohash.org/autemutsoluta.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Private Room",
    price: 96,
    owner: 14,
    latitude: -6.0820288,
    longitude: 106.0449143,
    description: "Public Utilities"
    },
    {
    id: 50,
    image: "https://robohash.org/delenitiarchitectoveniam.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 2,
    type:"Private Room",
    price: 133,
    owner: 68,
    latitude: 14.6626857,
    longitude: 121.0265211,
    description: "Consumer Services"
    },
    {
    id: 51,
    image: "https://robohash.org/utquosnam.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Private Room",
    price: 78,
    owner: 38,
    latitude: 62.5166,
    longitude: 155.7654,
    description: "Health Care"
    },
    {
    id: 52,
    image: "https://robohash.org/quobeataeeius.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Private Room",
    price: 66,
    owner: 50,
    latitude: 56.6519542,
    longitude: 16.3281272,
    description: "n/a"
    },
    {
    id: 53,
    image: "https://robohash.org/suscipitaspernaturodio.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Private Room",
    price: 143,
    owner: 11,
    latitude: 0.1840524,
    longitude: 100.1255164,
    description: "Finance"
    },
    {
    id: 54,
    image: "https://robohash.org/culpaerrormolestiae.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    type:"Private Room",
    price: 47,
    owner: 39,
    latitude: 12.8359913,
    longitude: 102.1687531,
    description: "Health Care"
    },
    {
    id: 55,
    image: "https://robohash.org/etvoluptatibusomnis.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 9,
    type:"Private Room",
    price: 65,
    owner: 12,
    latitude: 4.5943745,
    longitude: -74.0740729,
    description: "Technology"
    },
    {
    id: 56,
    image: "https://robohash.org/quiautet.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 7,
    type:"Private Room",
    price: 84,
    owner: 26,
    latitude: 4.860823,
    longitude: -74.912667,
    description: "n/a"
    },
    {
    id: 57,
    image: "https://robohash.org/commodisuntet.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 5,
    type:"Private Room",
    price: 92,
    owner: 15,
    latitude: "19.2199",
    longitude: "-70.81905",
    description: "Technology"
    },
    {
    id: 58,
    image: "https://robohash.org/quiiustoquia.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 6,
    type:"Private Room",
    price: 30,
    owner: 100,
    latitude: 58.3493356,
    longitude: 13.8300629,
    description: "Technology"
    },
    {
    id: 59,
    image: "https://robohash.org/eosetquisquam.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 10,
    price: 126,
    type:"Private Room",
    owner: 31,
    latitude: 14.8866729,
    longitude: 120.8678329,
    description: "Health Care"
    },
    {
    id: 60,
    image: "https://robohash.org/dolordolormolestias.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 7,
    type:"Shared Room",
    price: 40,
    owner: 78,
    latitude: 10.097212,
    longitude: -83.504629,
    description: "n/a"
    },
    {
    id: 61,
    image: "https://robohash.org/repellatimpeditarchitecto.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 5,
    type:"Shared Room",
    price: 149,
    owner: 30,
    latitude: 30.274084,
    longitude: 120.15507,
    description: "n/a"
    },
    {
    id: 62,
    image: "https://robohash.org/quibusdammolestiaelabore.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 2,
    type:"Shared Room",
    price: 21,
    owner: 83,
    latitude: 9.3278585,
    longitude: 9.4311572,
    description: "Health Care"
    },
    {
    id: 63,
    image: "https://robohash.org/deseruntvelitmolestiae.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 4,
    type:"Shared Room",
    price: 122,
    owner: 82,
    latitude: -22.7561319,
    longitude: -43.4607419,
    description: "Finance"
    },
    {
    id: 64,
    image: "https://robohash.org/aliquamauteius.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 4,
    type:"Shared Room",
    price: 124,
    owner: 95,
    latitude: 32.8616618,
    longitude: -8.0547019,
    description: "n/a"
    },
    {
    id: 65,
    image: "https://robohash.org/veritatisetunde.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Shared Room",
    price: 57,
    owner: 90,
    latitude: 53.7815116,
    longitude: 27.4312339,
    description: "n/a"
    },
    {
    id: 66,
    image: "https://robohash.org/impeditarerum.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 7,
    type:"Shared Room",
    price: 94,
    owner: 96,
    latitude: 37.8589492,
    longitude: -25.7944989,
    description: "Public Utilities"
    },
    {
    id: 67,
    image: "https://robohash.org/earumexrerum.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 6,
    type:"Shared Room",
    price: 24,
    owner: 26,
    latitude: 10.4184707,
    longitude: 122.8854511,
    description: "Finance"
    },
    {
    id: 68,
    image: "https://robohash.org/possimusteneturvelit.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Shared Room",
    price: 33,
    owner: 3,
    latitude: 41.2926473,
    longitude: 110.3216026,
    description: "Finance"
    },
    {
    id: 69,
    image: "https://robohash.org/nisiquieveniet.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 9,
    type:"Shared Room",
    price: 91,
    owner: 18,
    latitude: 51.1644956,
    longitude: 18.2903712,
    description: "Consumer Non-Durables"
    },
    {
    id: 70,
    image: "https://robohash.org/autemesseconsequatur.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 13,
    type:"Shared Room",
    price: 50,
    owner: 77,
    latitude: 45.508348,
    longitude: 14.9089902,
    description: "Health Care"
    },
    {
    id: 71,
    image: "https://robohash.org/voluptasconsequunturaccusamus.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Shared Room",
    price: 72,
    owner: 3,
    latitude: 9.3473628,
    longitude: 105.1726816,
    description: "Public Utilities"
    },
    {
    id: 72,
    image: "https://robohash.org/omnistemporibusid.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 6,
    type:"Shared Room",
    price: 143,
    owner: 90,
    latitude: 15.5946516,
    longitude: 120.7914484,
    description: "Public Utilities"
    },
    {
    id: 73,
    image: "https://robohash.org/sedrepudiandaemolestiae.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 9,
    type:"Shared Room",
    price: 92,
    owner: 50,
    latitude: 50.9092557,
    longitude: 21.4252753,
    description: "Energy"
    },
    {
    id: 74,
    image: "https://robohash.org/estsimiliquequos.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Shared Room",
    price: 36,
    owner: 47,
    latitude: 47.7963656,
    longitude: 67.7020019,
    description: "Health Care"
    },
    {
    id: 75,
    image: "https://robohash.org/velitaliquidaut.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Shared Room",
    price: 48,
    owner: 19,
    latitude: 59.9871162,
    longitude: 15.8125817,
    description: "Technology"
    },
    {
    id: 76,
    image: "https://robohash.org/quodvitaeatque.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Shared Room",
    price: 42,
    owner: 96,
    latitude: 41.2696994,
    longitude: -8.5743985,
    description: "Health Care"
    },
    {
    id: 77,
    image: "https://robohash.org/autemeosquas.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Shared Room",
    price: 149,
    owner: 49,
    latitude: "37.08571",
    longitude: "69.47958",
    description: "Energy"
    },
    {
    id: 78,
    image: "https://robohash.org/utvoluptasexcepturi.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Shared Room",
    price: 19,
    owner: 10,
    latitude: -0.819175,
    longitude: 120.167297,
    description: "Energy"
    },
    {
    id: 79,
    image: "https://robohash.org/aliasinqui.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 2,
    type:"Shared Room",
    price: 37,
    owner: 90,
    latitude: 20.6523028,
    longitude: -87.0696273,
    description: "n/a"
    },
    {
    id: 80,
    image: "https://robohash.org/enimnumquammolestias.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Shared Room",
    price: 49,
    owner: 88,
    latitude: 40.797661,
    longitude: 120.7511781,
    description: "Health Care"
    },
    {
    id: 81,
    image: "https://robohash.org/aliquamexercitationemtempora.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Shared Room",
    price: 130,
    owner: 34,
    latitude: 37.8010824,
    longitude: -97.3317391,
    description: "Energy"
    },
    {
    id: 82,
    image: "https://robohash.org/delectusvelitvoluptatem.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Shared Room",
    price: 26,
    owner: 2,
    latitude: 23.018033,
    longitude: -82.3343375,
    description: "Finance"
    },
    {
    id: 83,
    image: "https://robohash.org/abpossimusrepudiandae.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Shared Room",
    price: 123,
    owner: 9,
    latitude: 47.0201565,
    longitude: -68.1434988,
    description: "Basic Industries"
    },
    {
    id: 84,
    image: "https://robohash.org/vitaevoluptasqui.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 7,
    type:"Shared Room",
    price: 92,
    owner: 43,
    latitude: -7.3743397,
    longitude: 110.2648159,
    description: "n/a"
    },
    {
    id: 85,
    image: "https://robohash.org/suscipitvoluptatemdolores.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Shared Room",
    price: 74,
    owner: 11,
    latitude: 40.5329933,
    longitude: 50.0035678,
    description: "n/a"
    },
    {
    id: 86,
    image: "https://robohash.org/namtotamsit.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 13,
    type:"Shared Room",
    price: 138,
    owner: 82,
    latitude: 59.1631398,
    longitude: 17.1921015,
    description: "Finance"
    },
    {
    id: 87,
    image: "https://robohash.org/autemculpaat.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Shared Room",
    price: 48,
    owner: 66,
    latitude: 45.2379183,
    longitude: 38.9712949,
    description: "Consumer Services"
    },
    {
    id: 88,
    image: "https://robohash.org/optioetsoluta.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 8,
    type:"Shared Room",
    price: 79,
    owner: 74,
    latitude: 29.091586,
    longitude: 111.208469,
    description: "Technology"
    },
    {
    id: 89,
    image: "https://robohash.org/dolorevoluptatibusautem.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Shared Room",
    price: 18,
    owner: 84,
    latitude: 15.847683,
    longitude: 120.9187827,
    description: "Energy"
    },
    {
    id: 90,
    image: "https://robohash.org/ipsametcumque.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 14,
    type:"Shared Room",
    price: 45,
    owner: 97,
    latitude: -5.0636851,
    longitude: -73.8563741,
    description: "Public Utilities"
    },
    {
    id: 91,
    image: "https://robohash.org/dolorereiciendiseum.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Shared Room",
    price: 31,
    owner: 64,
    latitude: 15.1766973,
    longitude: 106.2345633,
    description: "Public Utilities"
    },
    {
    id: 92,
    image: "https://robohash.org/veromolestiaeblanditiis.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 9,
    type:"Shared Room",
    price: 127,
    owner: 68,
    latitude: 27.7537155,
    longitude: 68.4470397,
    description: "Energy"
    },
    {
    id: 93,
    image: "https://robohash.org/porroquisquamconsectetur.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 4,
    type:"Shared Room",
    price: 90,
    owner: 47,
    latitude: 13.5192458,
    longitude: -87.6001222,
    description: "Technology"
    },
    {
    id: 94,
    image: "https://robohash.org/harumullamdolor.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 12,
    type:"Shared Room",
    price: 113,
    owner: 43,
    latitude: 1.424768,
    longitude: 103.6487041,
    description: "Consumer Durables"
    },
    {
    id: 95,
    image: "https://robohash.org/reiciendiseosodio.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 5,
    type:"Shared Room",
    price: 58,
    owner: 63,
    latitude: -7.0827518,
    longitude: 108.5166348,
    description: "Consumer Services"
    },
    {
    id: 96,
    image: "https://robohash.org/sitminimaet.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Shared Room",
    price: 136,
    owner: 83,
    latitude: -15.8003597,
    longitude: -70.3435088,
    description: "Public Utilities"
    },
    {
    id: 97,
    image: "https://robohash.org/voluptatesatet.bmp?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 1,
    type:"Shared Room",
    price: 110,
    owner: 94,
    latitude: 39.596147,
    longitude: 112.670816,
    description: "n/a"
    },
    {
    id: 98,
    image: "https://robohash.org/suscipitexcepturiquia.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 3,
    type:"Shared Room",
    price: 70,
    owner: 30,
    latitude: 42.9577803,
    longitude: 19.0943627,
    description: "Health Care"
    },
    {
    id: 99,
    image: "https://robohash.org/nonlaborererum.png?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 4,
    type:"Shared Room",
    price: 149,
    owner: 55,
    latitude: -24.5415767,
    longitude: -56.8198691,
    description: "Health Care"
    },
    {
    id: 100,
    image: "https://robohash.org/nesciuntmaximeneque.jpg?size=50x50&set=set4", city:"Tel Aviv", pet:"pets are welcomed",beds:2,
    rooms: 11,
    type:"Shared Room",
    price: 23,
    owner: 94,
    latitude: 30.736899,
    longitude: 84.520832,
    description: "n/a"
    }
  ];


  homesFactory.addHomeToList = function(newHome){
     homes.push(newHome);
  };

  homesFactory.removeHomeFromList = function (index) {
      homes.splice(index, 1);
      console.log(index);
  };

  homesFactory.getHomes = function(){
      return homes;
  }

  homesFactory.sortBy = function(filterName){
    console.log(filterName);
    return filterName;
  }

  var counter = 0;
  var temp = [];

  homesFactory.getData = function() {
      temp = [];
      for (var i = counter; i < counter + 10 && i < homes.length; i++) {
          temp.push(homes[i]);
      }
      return temp;
  }

  homesFactory.nextHomes = function(){
    if (counter < homes.length) {
        counter += 10;
        console.log(counter);
        //when you reach the end..
        if (counter === 100) {
          homesFactory.prevHomes();
        }
    }
  }

  homesFactory.prevHomes = function(){
        if (counter > 0) {
            counter -= 10;
        }
  }

  return homesFactory;

});
