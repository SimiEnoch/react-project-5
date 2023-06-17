import React, { useState } from 'react';
import { data } from './data';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';

export const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, description, post, img, id } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
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
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review" key={id}>
      <div className="img">
        <div className="img-container">
          <img src={img} alt={name} className="person-img" />
        </div>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="post">{post}</p>
      <p className="description">{description}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <AiOutlineLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <AiOutlineRight />
        </button>
      </div>
      <div className="random-class">
        <button className="random-btn" onClick={randomPerson}>
          Suprise me
        </button>
      </div>
    </article>
  );
};
