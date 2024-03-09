import { Link } from "react-router-dom"
import classes from "./articles.module.scss"

interface TopArticlesType {
    id: number
    title: string
    parag: string
}

const Articles = () => {
    const topArticles: TopArticlesType[] = [
        {
            id: 1,
            title: "Canceling your reservation for a stay",
            parag: "Your plans have changed and now you need to cancel your reservation. No problem. You can go to your Trips to cancel or make changes to"
        },
        {
            id: 2,
            title: "Change the date or time of your Experience reservation",
            parag: "You booked an Experience, but the date or time no longer works for you? Do not worry, yo"
        },
        {
            id: 3,
            title: "If your Host cancels your reservation",
            parag: "While it is rare, sometimes a Host may need to cancel a reservation. We understand this can"
        },
        {
            id: 4,
            title: "Payment methods accepted",
            parag: "Airbnb supports different payment methods, depending on the country your payment"
        },
        {
            id: 5,
            title: "Editing, removing, or adding a payment method",
            parag: "If an existing payment method on your account is incorrect (ex: an expired credit"
        },
        {
            id: 6,
            title: "When you will pay for your reservation",
            parag: "You just made a reservation—congrats! So, what happens next? Your payment method"
        }
    ]


  return (
    <section className={classes['top_articles_container']}>
        <h3>Top Articles</h3>

        <div className={classes['top_articles']}>
            {topArticles.map(article => (
                <Link to="#" key={article.id}>
                    <h6>{article.title}</h6>
                    <p>{article.parag}...</p>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Articles