import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import questionsAndAnsers from "../../../../lib/questions-and-ansers";
import classes from "./fqa.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const FQA = () => {
  const [expand, setExpand] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={classes["fqa-container"]}>
      <div>
        <div>
          <h3>Frequently</h3>
          <h3>asked questions</h3>
        </div>
        <p className={classes['desktop-para']}>For other questions visit our <Link to="/help">help center</Link></p>
      </div>

      <div className={classes["questions-wrapper"]}>
        {questionsAndAnsers.map((ques, index) => (
          <div key={ques.id} className={classes.wrap}>
            <div
              className={classes.question}
              onClick={() => {
                setCurrentIndex(index);
                setExpand((prev) => (currentIndex === index ? !prev : true));
              }}
            >
              <h5>{ques.question}</h5>
              {expand && currentIndex === index ? (
                <BiChevronUp size={30} color="#727272" />
              ) : (
                <BiChevronDown size={30} color="#727272" />
              )}
            </div>

            <p
              className={`${
                expand && currentIndex === index ? classes.show : classes.hide
              }`}
            >
              {ques.answer}
            </p>
          </div>
        ))}

        <p className={classes['mobile-para']}>For other questions visit our <Link to="/help">help center</Link></p>
      </div>
    </section>
  );
};

export default FQA;
