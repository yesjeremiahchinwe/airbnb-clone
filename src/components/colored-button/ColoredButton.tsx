import classes from "./color-btn.module.scss";

interface ButtonProps {
  title: string;
}

const ColoredButton = ({ title }: ButtonProps) => {
  return (
    <button className={classes['custom_btn']}>
      <span>{title}</span>
    </button>
  );
};

export default ColoredButton;
