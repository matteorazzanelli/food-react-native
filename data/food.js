const baseUrl = 'https://images.openfoodfacts.org/images/products/';

const foodItems = [
  {
    id: '0',
    title: 'Mensa',
    data: [
      {
        id: '0',
        title: 'Pane',
        uri: `${baseUrl}807/680/957/7465/front_it.35.400.jpg`
      },
      {
        id: '1',
        title: 'Pasta',
        uri: `${baseUrl}807/680/208/5738/front_it.3333.400.jpg`,
      },
      {
        id: '2',
        title: 'Biscotti',
        uri: `${baseUrl}801/335/599/9143/front_it.49.400.jpg`,
      },
    ],
  },
  {
    id: '1',
    title: 'Pizzeria',
    data: [
      {
        id: '0',
        title: 'Pizza',
        uri: `${baseUrl}801/567/302/9595/front_it.3.400.jpg`,
      },
      {
        id: '1',
        title: 'Piadine',
        uri: `${baseUrl}800/778/050/1354/front_it.14.400.jpg`,
      },
    ],
  },
  {
    id: '2',
    title: 'Ristorante Onnivoro',
    data: [
      {
        id: '0',
        title: 'Tagliata di Pollo',
        uri: `${baseUrl}405/648/909/7785/front_it.3.400.jpg`,
      },
      {
        id: '1',
        title: 'Arista di Maiale',
        uri: `${baseUrl}206/003/300/3490/front_it.4.400.jpg`,
      },
      {
        id: '2',
        title: 'Tonno in scatola',
        uri: `${baseUrl}800/403/038/1681/front_it.8.400.jpg`,
      },
      {
        id: '3',
        title: 'Manzo',
        uri: `${baseUrl}405/648/909/8249/front_it.3.400.jpg`,
      },
    ],
  },
  {
    id: '3',
    title: 'Ristorante vegano',
    data: [
      {
        id: '0',
        title: 'Insalata',
        uri: `${baseUrl}20823931/front_it.8.400.jpg`,
      },
      {
        id: '1',
        title: 'Humus di ceci',
        uri: `${baseUrl}405/809/430/0502/front_it.50.400.jpg`,
      },
      {
        id: '2',
        title: 'Riso alle verdure',
        uri: `${baseUrl}800/186/018/6691/front_it.3.400.jpg`,
      },
    ],
  }
]

export default foodItems;