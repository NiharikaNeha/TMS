import "./requested_reviews_styles.css";
import { React, useState } from "react";

const Cards_array = [
  {
    name: "James Corden",
    mail: "oyo1@oyorooms.com",
    status: "Completed"
  },
  {
    name:"Jackie Stewart",
    mail:"oyo4@oyorooms.com",
    status: "Pending"
  },
  {
    name: "James Key",
    mail: "oyo2@oyorooms.com",
    status: "Completed"
  },
  {
    name: "Lewis Hamilton",
    mail: "oyo11@oyorooms.com",
    status: "Pending"
  },
  {
    name:"Damon Hill",
    mail:"oyo3@oyorooms.com",
    status: "Completed"
  },
  {
    name:"George Russell",
    mail:"oyo12@oyorooms.com",
    status: "Pending"
  },
  {
    name:"Nicholas Latifi",
    mail:"oyo13@oyorooms.com",
    status: "Completed"
  }
];

export default function App() {
  const [cards, setCards] = useState(Cards_array);

  return (
    <div className="App">
      <table>
        <tbody>
          <th className="left-menu-bar">
            <tr>
              <button className="my-profile-text">My Profile</button>
            </tr>
            <tr>
              <button className="review">Review</button>
            </tr>
            <tr>
              <button className="reviews">Reviews</button>
            </tr>
            <tr>
              <button className="requested_reviews">Requested Reviews</button>
            </tr>
            <tr>
              <button className="add_review">Add Review</button>
            </tr>
            <tr>
              <button className="review-results">Review Results</button>
            </tr>
          </th>
          <th className="right-info-page">
            <tr>
              <CardList cards = {cards}/>
            </tr>
          </th>
        </tbody>
      </table>
    </div>
  );
}

function CardList({cards}) {
  return (
    <div>
      {
        cards.map(card => {
          return <Card card = {card} key = {card.name} />
        })}
    </div>
  );
}

function Card({card}) {
  return (
    <div className="card-template">
      <th className="card-info">
        <tr>
          <p className="card-info-name">{card.name}</p>
        </tr>
        <tr>
          <p className="card-info-mail">{card.mail}</p>
        </tr>
      </th>
      <th>
        <p className="card-button">{card.status}</p>
      </th>
    </div>
  );
}