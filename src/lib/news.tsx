import news_one from "/news/news_one.webp"
import news_two from "/news/news_two.webp"
import news_three from "/news/news_three.webp"
import news_four from "/news/news_four.webp"
import news_five from "/news/news_five.webp"
import news_six from "/news/news_six.webp"
import news_seven from "/news/news_seven.webp"
import news_eight from "/news/news_eight.webp"
import news_nine from "/news/news_nine.webp"
import news_ten from "/news/news_ten.webp"
import news_eleven from "/news/news_eleven.webp"
import news_twelve from "/news/news_twelve.webp"
import news_thirteen from "/news/news_thirteen.webp"
import news_fourteen from "/news/news_fourteen.webp"
import news_fifteen from "/news/news_fifteen.webp"
import news_sixteen from "/news/news_sixteen.webp"

export interface NewsType {
    id: number,
    title: string,
    image: string
    date: string
    type: "latest" | "later"
}

const newsData: NewsType[] = [
    {
        id: 1,
        title: "Airbnb 2024 spring update",
        image: news_one,
        date: "February 28, 2024",
        type: "latest"
    },
    {
        id: 2,
        title: "Airbnb welcomes EU agreement on new STR rules",
        image: news_two,
        date: "February 29, 2024",
        type: "latest"
    },
    {
        id: 3,
        title: "Searches surge 1,000% ahead of upcoming US solar eclipse",
        image: news_three,
        date: "February 29, 2024",
        type: "latest"
    },
    {
        id: 4,
        title: "Announcing our 2024 Preferred Software Partners ",
        image: news_four,
        date: "February 28, 2024",
        type: "latest"
    },
    {
        id: 5,
        title: "Discover the architectural marvels concentrated in this picturesque Canadian town",
        image: news_five,
        date: "February 26, 2024",
        type: "later"
    },
    {
        id: 6,
        title: "Last year, Airbnb guests traveled to more cities than ever before",
        image: news_six,
        date: "February 22, 2024",
        type: "later"
    },
    {
        id: 7,
        title: "New City Portal features to help governments manage short-term rentals",
        image: news_seven,
        date: "February 22, 2024",
        type: "later"
    },
    {
        id: 8,
        title: "Make Sin City your playground with Christina Aguilera, now on Airbnb",
        image: news_eight,
        date: "February 20, 2024",
        type: "later"
    },
    {
        id: 9,
        title: "Airbnb.org support for evacuees impacted by the Noto Peninsula earthquake",
        image: news_nine,
        date: "February 15, 2024",
        type: "later"
    },
    {
        id: 10,
        title: "Celebrating our community milestone of 5 million Hosts",
        image: news_ten,
        date: "February 15, 2024",
        type: "later"
    },
    {
        id: 11,
        title: "Airbnb Q4-2023 and full-year financial results",
        image: news_eleven,
        date: "February 13, 2024",
        type: "later"
    },
    {
        id: 12,
        title: "Airbnb to collect and remit tourist taxes across Italy",
        image: news_twelve,
        date: "February 8, 2024",
        type: "later"
    },
    {
        id: 13,
        title: "From Rio to San Diego, explore the top searched carnival destinations",
        image: news_thirteen,
        date: "February 4, 2024",
        type: "later"
    },
    {
        id: 14,
        title: "Searches for Las Vegas stays are spiking ahead of the Big Game",
        image: news_fourteen,
        date: "January 29, 2024",
        type: "later"
    },
    {
        id: 15,
        title: "Airbnb proposals on the rise: Here are the top stays to pop the question",
        image: news_fifteen,
        date: "January 28, 2024",
        type: "later"
    },
    {
        id: 16,
        title: "New EU STR rules a step closer after European Parliament vote",
        image: news_sixteen,
        date: "January 23, 2024",
        type: "later"
    }
]

export default newsData