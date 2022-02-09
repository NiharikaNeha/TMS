import "./add_review_styles.css";
import { React} from 'react';

export default function App() {

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
            <h1>This is Add Review section</h1>
          </th>
        </tbody>
      </table>
    </div>
  );
}