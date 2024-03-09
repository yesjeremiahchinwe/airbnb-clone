import aguanga from "/accomodation-images/aguanga.webp"
import bewerley from "/accomodation-images/bewerley.webp"
import bryson from "/accomodation-images/bryson.webp"
import burke from "/accomodation-images/burke.webp"
import calaca from "/accomodation-images/calaca.webp"
import california from "/accomodation-images/california.webp"
import canes from "/accomodation-images/canes.webp"
import canyon from "/accomodation-images/canyon.webp"
import cayman from "/accomodation-images/cayman.webp"
import county from "/accomodation-images/county.webp"
import cripple from "/accomodation-images/cripple.webp"
import east from "/accomodation-images/east.webp"
import ernen from "/accomodation-images/ernen.webp"
import finland from "/accomodation-images/finland.jpeg"
import goldboro from "/accomodation-images/goldboro.webp"
import iceland from "/accomodation-images/iceland.webp"
import italy from "/accomodation-images/italy.webp"
import korea from "/accomodation-images/korea.jpeg"
import loutraki from "/accomodation-images/loutraki.webp"
import malibu from "/accomodation-images/malibu.webp"
import mickleton from "/accomodation-images/mickleton.webp"
import norway from "/accomodation-images/norway.jpeg"
import palmer from "/accomodation-images/palmer.webp"
import paris from "/accomodation-images/paris.webp"
import poland from "/accomodation-images/poland.webp"
import provincia from "/accomodation-images/provincia.webp"
import saint from "/accomodation-images/saint.webp"
import skykomish from "/accomodation-images/skykomish.webp"
import spain from "/accomodation-images/spain.webp"
import stresa from "/accomodation-images/stresa.webp"
import switzerland from "/accomodation-images/switzerland.webp"
import terri from "/accomodation-images/terri.webp"
import terricciola from "/accomodation-images/terricciola.jpg"
import tree from "/accomodation-images/tree.webp"
import tucson from "/accomodation-images/tucson.webp"
import varenna from "/accomodation-images/varenna.webp"
import walden from "/accomodation-images/walden.jpg"
import washington from "/accomodation-images/washington.webp"
import windsor from "/accomodation-images/windsor.webp"
import wisconsin from "/accomodation-images/wisconsin.webp"


export interface ImageType {
    id: number
    src: string
}

export interface AccomodationType {
    id: number
    images: ImageType[]
    location: string
    rating: number | string,
    description: string,
    date: string,
    price: number,
    favorite: boolean
}


const accomodationData: AccomodationType[] = [
    {
        id: 1,
        images: [
            { id: 1, src: aguanga },
            { id: 2, src: wisconsin }
        ],
        location: "Terricciola, Italy",
        rating: "5.0",
        description: "Viewed 31,841 times last week",
        date: "Apr 5-10",
        price: 147,
        favorite: true
    },
    {
        id: 2,
        images: [
            { id: 1, src: bewerley },
            { id: 2, src: windsor }
        ],
        location: "Walden, Colorado, US",
        rating: 4.94,
        description: "Viewed 7,361 times last week",
        date: "Mar 3-8",
        price: 121,
        favorite: true
    },
    {
        id: 3,
        images: [
            { id: 1, src: bryson },
            { id: 2, src: washington }
        ],
        location: "Inderoy, Norway",
        rating: 4.88,
        description: "Viewed 3,232 times last week",
        date: "Mar 10-15",
        price: 125,
        favorite: false
    },
    {
        id: 4,
        images: [
            { id: 1, src: burke },
            { id: 2, src: walden }
        ],
        location: "Budens, Portugal",
        rating: "5.0",
        description: "3,623 Kilometers away",
        date: "Mar 1-6",
        price: 1_622,
        favorite: true
    },
    {
        id: 5,
        images: [
            { id: 1, src: tree },
            { id: 2, src: varenna }
        ],
        location: "Santa Cruz de Tenerife, Spain",
        rating: 4.95,
        description: "Playa Berruguete",
        date: "May 5-10",
        price: 108,
        favorite: true
    },
    {
        id: 6,
        images: [
            { id: 1, src: calaca },
            { id: 2, src: tucson }
        ],
        location: "Lagoa, Portugal",
        rating: "5.0",
        description: "3,612 Kilometers away",
        date: "May 10-17",
        price: 864,
        favorite: false
    },
    {
        id: 7,
        images: [
            { id: 1, src: california },
            { id: 2, src: tree }
        ],
        location: "La Lajita, Spain",
        rating: "5.0",
        description: "3,042 Kilometers away",
        date: "Oct 31-Nov 7",
        price: 187,
        favorite: true
    },
    {
        id: 8,
        images: [
            { id: 1, src: canes },
            { id: 2, src: terricciola }
        ],
        location: "Nerja, Spain",
        rating: "5.0",
        description: "Playa de las Alberquillas",
        date: "Jun 8-13",
        price: 185,
        favorite: false
    },
    {
        id: 9,
        images: [
            { id: 1, src: canyon },
            { id: 2, src: terri }
        ],
        location: "Pantelleria, Italy",
        rating: "5.0",
        description: "3,482 Kilometers away",
        date: "May 6-13",
        price: 163,
        favorite: true
    },
    {
        id: 10,
        images: [
            { id: 1, src: cayman },
            { id: 2, src: switzerland }
        ],
        location: "Castillo Caleta de Fuste, Spain",
        rating: 4.89,
        description: "3,041 Kilometers away",
        date: "Apr 13-18",
        price: 409,
        favorite: true
    },
    {
        id: 11,
        images: [
            { id: 1, src: county },
            { id: 2, src: stresa }
        ],
        location: "Albufeira, Portugal",
        rating: "5.0",
        description: "3,607 Kilometers away",
        date: "Jun 20-25",
        price: 784,
        favorite: false
    },
    {
        id: 12,
        images: [
            { id: 1, src: cripple },
            { id: 2, src: spain }
        ],
        location: "Santa Cruz de Tenerife, Spain",
        rating: "5.0",
        description: "3,192 Kilometers away",
        date: "Mar 2-7",
        price: 876,
        favorite: true
    },
    {
        id: 13,
        images: [
            { id: 1, src: east },
            { id: 2, src: skykomish }
        ],
        location: "Corralejo, Spain",
        rating: 4.87,
        description: "Puerto Remedios",
        date: "Apr 24-29",
        price: 409,
        favorite: true
    },
    {
        id: 14,
        images: [
            { id: 1, src: ernen },
            { id: 2, src: saint }
        ],
        location: "San Bartolome de Tirajana, Spain",
        rating: "5.0",
        description: "3,100 Kilometers away",
        date: "Apr 1-6",
        price: 1_142,
        favorite: false
    },
    {
        id: 15,
        images: [
            { id: 1, src: finland },
            { id: 2, src: provincia }
        ],
        location: "Marbella, Spain",
        rating: "",
        description: "3,447 Kilometers away",
        date: "Mar 1-8",
        price: 683,
        favorite: true
    },
    {
        id: 16,
        images: [
            { id: 1, src: goldboro },
            { id: 2, src: poland }
        ],
        location: "Mogan, Spain",
        rating: "5.0",
        description: "3,111 Kilometers away",
        date: "Apr 18-23",
        price: 313,
        favorite: true
    },
    {
        id: 17,
        images: [
            { id: 1, src: iceland },
            { id: 2, src: paris }
        ],
        location: "Carvoeiro, Portugal",
        rating: "",
        description: "3,613 Kilometers away",
        date: "Mar 1-7",
        price: 271,
        favorite: false
    },
    {
        id: 18,
        images: [
            { id: 1, src: italy },
            { id: 2, src: palmer }
        ],
        location: "Bubaque, Guinea-Bissau",
        rating: "",
        description: "2,190 Kilometers away",
        date: "Mar 1-6",
        price: 86,
        favorite: true
    },
    {
        id: 19,
        images: [
            { id: 1, src: korea },
            { id: 2, src: norway }
        ],
        location: "Albufeira, Portugal",
        rating: "",
        description: "3,605 Kilometers away",
        date: "Mar 1-8",
        price: 1_061,
        favorite: true
    },
    {
        id: 20,
        images: [
            { id: 1, src: loutraki },
            { id: 2, src: mickleton }
        ],
        location: "Salobrena, Spain",
        rating: 4.93,
        description: "3,443 Kilometers away",
        date: "Jun 16-21",
        price: 678,
        favorite: false
    },
    {
        id: 21,
        images: [
            { id: 1, src: malibu },
            { id: 2, src: loutraki }
        ],
        location: "Calahonda, Spain",
        rating: "New",
        description: "3,441 Kilometers away",
        date: "Mar 12-17",
        price: 64,
        favorite: true
    },
    {
        id: 22,
        images: [
            { id: 1, src: mickleton },
            { id: 2, src: malibu }
        ],
        location: "Bahia Dorada, Spain",
        rating: 4.89,
        description: "3,443 Kilometers away",
        date: "Mar 1-6",
        price: 178,
        favorite: true
    },
    {
        id: 23,
        images: [
            { id: 1, src: norway },
            { id: 2, src: korea }
        ],
        location: "Fuengirola, Spain",
        rating: 4.88,
        description: "3,444 Kilometers away",
        date: "Mar 1-6",
        price: 140,
        favorite: false
    },
    {
        id: 24,
        images: [
            { id: 1, src: palmer },
            { id: 2, src: italy }
        ],
        location: "Tanger, Morocco",
        rating: 4.91,
        description: "Plage Municipale",
        date: "Mar 1-6",
        price: 98,
        favorite: true
    },
    {
        id: 25,
        images: [
            { id: 1, src: paris },
            { id: 2, src: iceland }
        ],
        location: "Guimar, Spain",
        rating: 4.97,
        description: "3,197 Kilometers away",
        date: "Mar 6-11",
        price: 74,
        favorite: false
    },
    {
        id: 26,
        images: [
            { id: 1, src: poland },
            { id: 2, src: goldboro }
        ],
        location: "Oued Laou, Morocco",
        rating: 4.82,
        description: "3,339 Kilometers away",
        date: "Mar 1-6",
        price: 62,
        favorite: true
    },
    {
        id: 27,
        images: [
            { id: 1, src: provincia },
            { id: 2, src: finland }
        ],
        location: "Albufeira, Portugal",
        rating: 4.88,
        description: "3,606 Kilometers away",
        date: "Mar 2-7",
        price: 212,
        favorite: true
    },
    {
        id: 28,
        images: [
            { id: 1, src: saint },
            { id: 2, src: ernen }
        ],
        location: "Armacao de Pera, Portugal",
        rating: "5.0",
        description: "3,611 Kilometers away",
        date: "Mar 9-14",
        price: 195,
        favorite: true
    },
    {
        id: 29,
        images: [
            { id: 1, src: skykomish },
            { id: 2, src: east }
        ],
        location: "Torremolinos, Spain",
        rating: "5.0",
        description: "3,449 Kilometers away",
        date: "June 6-12",
        price: 279,
        favorite: false
    },
    {
        id: 30,
        images: [
            { id: 1, src: spain },
            { id: 2, src: cripple }
        ],
        location: "Tanger, Morocco",
        rating: 4.79,
        description: "Plage Municipale",
        date: "Dec 1-6",
        price: 63,
        favorite: true
    },
    {
        id: 31,
        images: [
            { id: 1, src: stresa },
            { id: 2, src: county }
        ],
        location: "Benalmadena, Spain",
        rating: 4.86,
        description: "3,446 Kilometers away",
        date: "Mar 26-31",
        price: 132,
        favorite: false
    },
    {
        id: 32,
        images: [
            { id: 1, src: switzerland },
            { id: 2, src: cayman }
        ],
        location: "San Bartolome de Tirajana, Spain",
        rating: 4.89,
        description: "Playa del Aguila",
        date: "Mar 17-22",
        price: 155,
        favorite: true
    },
    {
        id: 33,
        images: [
            { id: 1, src: terri },
            { id: 2, src: canyon }
        ],
        location: "El Morche, Spain",
        rating: 4.86,
        description: "3,450 Kilometers away",
        date: "May 1-6",
        price: 106,
        favorite: true
    },
    {
        id: 34,
        images: [
            { id: 1, src: terricciola },
            { id: 2, src: canes }
        ],
        location: "Benalmadena, Spain",
        rating: 4.82,
        description: "Playa de Carvajal",
        date: "Mar 7-12",
        price: 133,
        favorite: true
    },
    {
        id: 35,
        images: [
            { id: 1, src: tree },
            { id: 2, src: california }
        ],
        location: "Porches, Portugal",
        rating: 4.95,
        description: "Beijinhos beach",
        date: "Mar 8-13",
        price: 286,
        favorite: true
    },
    {
        id: 36,
        images: [
            { id: 1, src: tucson },
            { id: 2, src: calaca }
        ],
        location: "Chiclana de la Frontera, Spain",
        rating: 4.75,
        description: "Playa de la Barrosa",
        date: "Mar 11-16",
        price: 504,
        favorite: false
    },
    {
        id: 37,
        images: [
            { id: 1, src: varenna },
            { id: 2, src: burke }
        ],
        location: "Torremolinos, Spain",
        rating: 4.99,
        description: "3,449 Kilometers away",
        date: "Apr 27-May 2",
        price: 177,
        favorite: true
    },
    {
        id: 38,
        images: [
            { id: 1, src: walden },
            { id: 2, src: bryson }
        ],
        location: "Tarifa, Spain",
        rating: 4.87,
        description: "3,413 Kilometers away",
        date: "May 18-23",
        price: 173,
        favorite: true
    },
    {
        id: 39,
        images: [
            { id: 1, src: washington },
            { id: 2, src: bewerley }
        ],
        location: "Mojacar, Spain",
        rating: 4.87,
        description: "Playa La Parata",
        date: "Apr 30 - May 6",
        price: 89,
        favorite: false
    },
    {
        id: 40,
        images: [
            { id: 1, src: wisconsin },
            { id: 2, src: aguanga }
        ],
        location: "Site archeologique de Carthage, Tunisia",
        rating: 4.84,
        description: "3,457 Kilometers away",
        date: "Jul 9-14 ",
        price: 51,
        favorite: true
    },
]

export default accomodationData