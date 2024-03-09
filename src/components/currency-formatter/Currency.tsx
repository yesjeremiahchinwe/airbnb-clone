
interface CurrencyProps {
    value?: string | number
}

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})


const Currency = ({ value }: CurrencyProps) => {

  return (
    <div className="fw-semibold">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency