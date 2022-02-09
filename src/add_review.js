import "./add_review_styles.css";
import useCollapse from 'react-collapsed';
import { React, useState} from 'react';

export default function App() {

  return (
    <div className="App">
      <table>
        <tbody>
          <th className="left-menu-bar">
            <tr>
              <button className="my-profile-text">My Profile</button>
            </tr>
            <Collapsible/>
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

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div >
      <div {...getToggleProps()}>
              {
              <div className="left-menu-bar">
                <th>
              <button className="review">Review</button>
            </th>
              </div>
              }
          </div>
          <div {...getCollapseProps()}>
          <tr>
            <th>
              <button className="reviews">Reviews</button>
            </th>
          </tr>
          <tr>
            <th>
              <button className="requested_reviews">Requested Reviews</button>
            </th>
          </tr>
          <tr>
            <th>
              <button className="add_review">Add Review</button>
            </th>
          </tr>
          </div> 
    </div>
  );
}