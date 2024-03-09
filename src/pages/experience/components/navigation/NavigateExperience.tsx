import classes from "./navigation.module.scss"

interface FiltersType {
    id: number,
    content: string
}

const NavigateExperience = () => {
    const filters: FiltersType[] = [
        {
            id: 1,
            content: "Greate for groups"
        },
        {
            id: 2,
            content: "Family friendly"
        },
        {
            id: 3,
            content: "Animals"
        },
        {
            id: 4,
            content: "Arts & writing"
        },
        {
            id: 5,
            content: "Baking"
        },
        {
            id: 6,
            content: "Cooking"
        },
        {
            id: 7,
            content: "Dance"
        },
        {
            id: 8,
            content: "Drinks"
        },
        {
            id: 9,
            content: "Entertainment"
        },
        {
            id: 10,
            content: "Fitness"
        },
        {
            id: 11,
            content: "History & culture"
        },
        {
            id: 12,
            content: "Magic"
        },
        {
            id: 13,
            content: "Music"
        },
        {
            id: 14,
            content: "Social impact"
        },
        {
            id: 15,
            content: "Wellness"
        },
        {
            id: 16,
            content: "Olympians & Paralympians"
        },
        {
            id: 17,
            content: "Designed for accessibility"
        }
    ]

  return (
    <section className={classes['navigate_expereinces']}>
        {filters.map(filter => (
            <div key={filter.id}>
                <p>{filter.content}</p>
            </div>
        ))}
    </section>
  )
}

export default NavigateExperience