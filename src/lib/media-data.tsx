import media_One from "/media/media_one.jpg"
import media_two from "/media/media_two.jpg"
import media_three from "/media/media_three.jpg"
import media_four from "/media/media_four.jpeg"
import media_five from "/media/media_five.png"
import media_six from "/media/media_one.jpg"
import media_seven from "/media/media_seven.jpg"
import media_eight from "/media/media_eight.png"
import media_nine from "/media/media_nine.jpg"
import media_ten from "/media/media_ten.jpg"
import media_eleven from "/media/media_eleven.jpg"
import media_twelve from "/media/media_twelve.jpg"

interface MediaType {
    id: number
    title: string
    image: string
}

const mediaData: MediaType[] = [
    {
        id: 1,
        title: "2023 Winter Release",
        image: media_One
    },
    {
        id: 2,
        title: "2023 Summer Release",
        image: media_two
    },
    {
        id: 3,
        title: "2022 Winter Release",
        image: media_three
    },
    {
        id: 4,
        title: "2022 Summer Release",
        image: media_four
    },
    {
        id: 5,
        title: "2021 Winter Release",
        image: media_five
    },
    {
        id: 6,
        title: "2021 Summer Release",
        image: media_six
    },
    {
        id: 7,
        title: "Airbnb.org",
        image: media_seven
    },
    {
        id: 8,
        title: "Brand",
        image: media_eight
    },
    {
        id: 9,
        title: "Guests",
        image: media_nine
    },
    {
        id: 10,
        title: "Homes",
        image: media_ten
    },
    {
        id: 11,
        title: "Hosts",
        image: media_eleven
    },
    {
        id: 12,
        title: "Work from anywhere",
        image: media_twelve
    },
]

export default mediaData