const baseUrl = 'https://images.openfoodfacts.org/images/products/';

const foodItems = [
  {
    id: '0',
    title: 'Mensa',
    rating: '5,0',
    distance: '1.0 km',
    data: [
      {
        id: '0',
        title: 'Pane',
        pickup: '19:30-20:00',
        uri: `${baseUrl}807/680/957/7465/front_it.35.400.jpg`,
        price: '0€',
        remaining: '10'
      },
      {
        id: '1',
        title: 'Pasta',
        pickup: '19:30-20:00',
        uri: `${baseUrl}807/680/208/5738/front_it.3333.400.jpg`,
        price: '0€',
        remaining: '10'
      },
      {
        id: '2',
        title: 'Biscotti',
        pickup: '00:00-23:59',
        uri: `${baseUrl}801/335/599/9143/front_it.49.400.jpg`,
        price: '0€',
        remaining: '10'
      },
    ],
  },
  {
    id: '1',
    title: 'Pizzeria',
    rating: '4,2',
    distance: '1.5 km',
    data: [
      {
        id: '0',
        title: 'Pizza',
        pickup: '10:00-12:00',
        uri: `${baseUrl}801/567/302/9595/front_it.3.400.jpg`,
        price: '3€',
        remaining: '1'
      },
      {
        id: '1',
        title: 'Piadine',
        pickup: '12:00-14:00',
        uri: `${baseUrl}800/778/050/1354/front_it.14.400.jpg`,
        price: '1€',
        remaining: '2'
      },
    ],
  },
  {
    id: '2',
    title: 'Ristorante Onnivoro',
    rating: '4,7',
    distance: '2.0 km',
    data: [
      {
        id: '0',
        title: 'Tagliata di Pollo',
        pickup: '12:00-14:00',
        uri: `${baseUrl}405/648/909/7785/front_it.3.400.jpg`,
        price: '5€',
        remaining: '2'
      },
      {
        id: '1',
        title: 'Arista di Maiale',
        pickup: '20:00-22:00',
        uri: `${baseUrl}206/003/300/3490/front_it.4.400.jpg`,
        price: '4€',
        remaining: '1'
      },
      {
        id: '2',
        title: 'Tonno in scatola',
        pickup: '00:00-23:59',
        uri: `${baseUrl}800/403/038/1681/front_it.8.400.jpg`,
        price: '2€',
        remaining: '5'
      },
      {
        id: '3',
        title: 'Manzo',
        pickup: '12:00-13:00',
        uri: `${baseUrl}405/648/909/8249/front_it.3.400.jpg`,
        price: '5€',
        remaining: '2'
      },
    ],
  },
  {
    id: '3',
    title: 'Ristorante vegano',
    rating: '4,5',
    distance: '1.3 km',
    data: [
      {
        id: '0',
        title: 'Insalata',
        pickup: '10:00-14:00',
        uri: `${baseUrl}20823931/front_it.8.400.jpg`,
        price: '2€',
        remaining: '5'
      },
      {
        id: '1',
        title: 'Humus di ceci',
        pickup: '06:00-14:00',
        uri: `${baseUrl}405/809/430/0502/front_it.50.400.jpg`,
        price: '1€',
        remaining: '5'
      },
      {
        id: '2',
        title: 'Riso alle verdure',
        pickup: '10:00-14:00',
        uri: `${baseUrl}800/186/018/6691/front_it.3.400.jpg`,
        price: '3€',
        remaining: '3'
      },
    ],
  }
]

export default foodItems;