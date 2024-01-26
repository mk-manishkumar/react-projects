/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function List({ buddies }) {
  return (
    <>
      {buddies.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} className="img"/>
            <div className="details">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
