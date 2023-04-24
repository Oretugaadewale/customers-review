import React from "react";
import { useState } from "react";
//you will have to person here cos we are working on person/people review
import person from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// because it a review page we don't need to iterate/map
const Review = () => {
  const [index, setIndex] = useState(0);
  //we set people to index because we the data to start from index zero as an array

  const { name, job, image, text } = person[index];

  // This to set the random number of the review so when clicked it wont show 1 page twice

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * person.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber + 1));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  // it means if no is greater than the length of what is in the data go back to 0 to re display
  const checkNumber = (number) => {
    if (number > person.length - 1) {
      return 0;
    }
    if (number < 0) {
      return person.length - 1;
    }
    // return no if no if no is nor grater or lower
    return number;
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
