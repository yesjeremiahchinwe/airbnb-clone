import classes from "./button.module.scss";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {

  return (
    <button className={classes.button}>
      <span>{title}</span>
    </button>
  );
};

export default Button;
