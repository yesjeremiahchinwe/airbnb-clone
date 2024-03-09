import classes from "./filter.module.scss"


const Filter = () => {
  return (
    <div className={classes["filter-button"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "#000",
              height: "18px",
              width: "18px",
              stroke: "#717171",
              strokeWidth: "3",
              overflow: "visible",
            }}
          >
            <path
              fill="#333"
              d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
            ></path>
          </svg>
          <span>Filters</span>
      </div>
  )
}

export default Filter