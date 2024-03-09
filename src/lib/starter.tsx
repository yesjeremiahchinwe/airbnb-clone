import start_one from "/starter/start_one.webp"
import start_two from "/starter/start_two.webp"
import start_three from "/starter/start_three.webp"
import start_four from "/starter/start_four.webp"
import start_five from "/starter/start_five.jpeg"
import start_six from "/starter/start_six.webp"
import start_seven from "/starter/start_seven.webp"
import start_eight from "/starter/start_eight.webp"
import start_nine from "/starter/start_nine.webp"
import start_ten from "/starter/start_ten.webp"
import start_eleven from "/starter/start_eleven.webp"
import start_twelve from "/starter/start_twelve.webp"
import start_thieteen from "/starter/start_thieteen.webp"
import start_fourtheen from "/starter/start_fourtheen.webp"
import start_fifteen from "/starter/start_fifteen.webp"
import start_sixteen from "/starter/start_sixteen.webp"
import start_seventeen from "/starter/start_seventeen.webp"
import start_eighteen from "/starter/start_eighteen.jpeg"
import start_nineteen from "/starter/start_nineteen.webp"
import start_twenty from "/starter/start_twenty.jpeg"


interface OnlineType {
    id: number
    rating?: number
    rate_count?: number,
    location: string,
    title: string,
    image: string
    price: number
    start?: string,
    end?: string
}

const starters: OnlineType[] = [
    {
        id: 1,
        rating: 4.99,
        rate_count: 334,
        location: "India",
        title: "Chai Tea Masterclass - Vegan Friendly",
        image: start_one,
        price: 16,
        start: "8:30 PM",
        end: "10:30 PM"
    },
    {
        id: 2,
        rating: 4.91,
        rate_count: 323,
        location: "India",
        title: "Walk in to the Taj Mahal with a professional Tour Guide",
        image: start_two,
        price: 15,
        start: "8:30 PM",
        end: "9:30 PM"
    },
    {
        id: 3,
        rating: 4.93,
        rate_count: 29,
        location: "South Africa",
        title: "Experience the Magic of Zendoodling",
        image: start_three,
        price: 16,
        start: "9:00 PM",
    },
    {
        id: 4,
        rating: 5.0,
        rate_count: 870,
        location: "India",
        title: "Make Samosa & Cilantro Chutney From Scratch - Vegan Friendly",
        image: start_four,
        price: 25,
        start: "9:00 PM",
        end: "11:30 PM"
    },
    {
        id: 5,
        rating: 5.0,
        rate_count: 7,
        location: "Turkey",
        title: "Turkish ravioli - Manti with Turkish mon",
        image: start_five,
        price: 40,
        start: "9:00 PM",
    },
    {
        id: 6,
        rating: 4.95,
        rate_count: 98,
        location: "Thailand",
        title: "Discover Terracotta Warriors With a Professional Guide",
        image: start_six,
        price: 19,
        start: "9:00 PM",
        end: "10:00 PM"
    },
    {
        id: 7,
        location: "Kenya",
        title: "Nairobi City Virtual Tour In A Nutshell",
        image: start_seven,
        price: 13,
        start: "9:00 PM",
    },
    {
        id: 8,
        rating: 4.93,
        rate_count: 439,
        location: "Thailand",
        title: "Fun Giant Panda Time With a Nature Guide",
        image: start_eight,
        price: 19,
        start: "9:00 PM",
        end: "10:00 PM"
    },
    {
        id: 9,
        rating: 4.99,
        rate_count: 87,
        location: "Romania",
        title: "Tarot and Energy Readings for groups and individuals",
        image: start_nine,
        price: 55,
        start: "9:30 PM"
    },
    {
        id: 10,
        rating: 4.93,
        rate_count: 398,
        location: "India",
        title: "Crack the Mystery Escape Room - Team Bonding Game",
        image: start_ten,
        price: 19,
        start: "9:30 PM",
        end: "12:30 AM"
    },
    {
        id: 11,
        rating: 4.96,
        rate_count: 498,
        location: "Kenya",
        title: "Learn Kenya Culture & Cook authentic African cuisines",
        image: start_eleven,
        price: 20,
        start: "10:00 PM",
        end: "1:00 AM"
    },
    {
        id: 12,
        rating: 4.97,
        rate_count: 323,
        location: "United States",
        title: "Fun Group Tarot with a therapy dog",
        image: start_twelve,
        price: 28,
        start: "10:00 PM",
    },
    {
        id: 13,
        rating: 4.89,
        rate_count: 91,
        location: "Italy",
        title: "Italian party with Spritz, fresh ravioli and tiramisu",
        image: start_thieteen,
        price: 33,
        start: "10:00 PM",
        end: "10:00 PM"
    },
    {
        id: 14,
        rating: 4.96,
        rate_count: 609,
        location: "Germany",
        title: "Creative Smartphone Photography at Home, Work &...",
        image: start_fourtheen,
        price: 20,
        start: "10:00 PM",
        end: "11:00 PM"
    },
    {
        id: 15,
        rating: 4.97,
        rate_count: 155,
        location: "Italy",
        title: "Tiramisu, ice cream & sorbet, all secrets",
        image: start_fifteen,
        price: 33,
        start: "10:00 PM"
    },
    {
        id: 16,
        rating: 4.96,
        rate_count: 210,
        location: "Colombia",
        title: "Medellin: from voilence to innovation",
        image: start_sixteen,
        price: 17,
        start: "10:00 PM",
        end: "12:00 AM"
    },
    {
        id: 17,
        rating: 4.99,
        rate_count: 227,
        location: "Italy",
        title: "Handmade carbonara pasta, Spritz & Rossini",
        image: start_seventeen,
        price: 33,
        start: "10:00 PM",
        end: "10:00 PM"
    },
    {
        id: 18,
        rating: 5.0,
        rate_count: 11,
        location: "United Kingdom",
        title: "Tailor-Made Trivia Quiz",
        image: start_eighteen,
        price: 20,
        start: "10:00 PM",
        end: "11:00 PM"
    },
    {
        id: 19,
        rating: 5.0,
        rate_count: 27,
        location: "Canada",
        title: "The Majinx Impossible Show",
        image: start_nineteen,
        price: 26,
        start: "10:00 PM",
        end: "12:00 AM"
    },
    {
        id: 20,
        rating: 4.94,
        rate_count: 17,
        location: "Colombia",
        title: "Discover the wonders of Colombia",
        image: start_twenty,
        price: 17,
        start: "10:00 PM",
        end: "12:00 AM"
    }
]

export default starters