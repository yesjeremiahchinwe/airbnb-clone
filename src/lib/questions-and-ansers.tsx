import { Link } from "react-router-dom"

interface QuestionsAndAnswers {
    id: number,
    question: string,
    answer: string
}

const questionsAndAnsers: QuestionsAndAnswers[] = [
    {
        id: 1, 
        question: "Are gift cards physical or digital?",
        answer: `Gift cards bought on Airbnb.com are digital only. However, physical gift cards are available at participating stores.`
    },
    {
        id: 2, 
        question: "Where can I buy a physical gift card?",
        answer: "You can buy a physical gift card at participating Target, Walmart, Best Buy, CVS, Walgreens, Kroger, Safeway, and Whole Foods store locations."
    },
    {
        id: 3, 
        question: "What can gift cards be used for?",
        answer: "Gift cards can be used for any stay, Experience, or Online Experience on Airbnb."
    },
    {
        id: 4, 
        question: "Do gift cards expire?",
        answer: "Once a gift card has been added to your Airbnb account, the funds won’t expire."
    },
    {
        id: 5, 
        question: "Where are gift cards available?",
        answer: `Airbnb gift cards are available in many countries around the world. You can find the full list of available countries and applicable Gift Card Terms ${<Link to="#">Here</Link>}.`
    },
    {
        id: 6, 
        question: "Can I send a gift card to someone who lives in a different country?",
        answer: "Gift cards purchased in the United States can only be redeemed by users who reside in the United States. The gift card recipient must also have a valid payment method in the United States. The gift card value can be spent on any stay or Experience around the world."
    },
    {
        id: 7, 
        question: "How can I check my gift card balance?",
        answer: "Once you redeem your card and add the funds from the card to your account, you can go to Payment methods in your Account and check your balance."
    },
    {
        id: 8, 
        question: "Which payment methods does Airbnb accept?",
        answer: "We currently accept major credit cards and Apple Pay for digital gift cards purchased on Airbnb."
    }
]

export default questionsAndAnsers