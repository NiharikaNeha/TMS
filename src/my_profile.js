import "./my_profile_styles.css";
import { React, useState} from 'react';

export default function App() {
  const [name, setName] = useState("James Corden");
  const [mail, setMail] = useState("oyo1@oyorooms.com");
  const [dept, setDept] = useState("SDE");
  const [desg, setDesg] = useState("Employee");
  const [dob, setDob] = useState("07-10-1984");
  const [manager, setManager] = useState("Torben Devin");
  
  return (
    <div className="App">
      <table>
        <tbody>
          <th className="left-menu-bar">
            <tr>
              <button className="my-profile-text">My Profile</button>
            </tr>
            <tr>
              <th>
                <button className="review">Review</button>
              </th>
            </tr>
            <tr>
              <button className="review-results">Review Results</button>
            </tr>
          </th>
          <th className="right-info-page">
            <tr className="profile-bar">
              <th className="name-mail-section">
                <tr><p className="name">{name}</p></tr>
                <tr className="mail">{mail}</tr>
              </th>
              <th><img className="profile-photo" src="https://thumbs.dreamstime.com/b/profile-icon-vector-male-user-person-avatar-flat-color-glyph-pictogram-illustration-117610301.jpg" alt=""></img></th>
            </tr>
            <tr className="dept-desg-bar">
              <th className="dept-bar">
                <th><img className="photo" src="https://cdn1.vectorstock.com/i/1000x1000/18/85/department-structure-icon-in-trendy-flat-style-vector-30501885.jpg" alt=""></img></th>
                <th className="title-description">
                  <tr><p className="title">Department</p></tr>
                  <tr><p className="description">{dept}</p></tr>
                </th>
              </th>
              <th className="desg-bar">
                <th><img className="photo" src="https://as2.ftcdn.net/v2/jpg/03/05/75/77/1000_F_305757777_8zQDaRz3Y9tW8Jpd0jdC5NQoCQPgav5Z.jpg" alt=""></img></th>
                <th className="title-description">
                  <tr><p className="title">Designation</p></tr>
                  <tr><p className="description">{desg}</p></tr>
                </th>
              </th>
            </tr>
            <tr className="dept-desg-bar">
              <th className="dept-bar">
                <th><img className="photo" src="https://as1.ftcdn.net/v2/jpg/02/24/47/16/1000_F_224471646_jDVPhDImzvvQAejjW9bFfPOwcqnPr6sQ.jpg" alt=""></img></th>
                <th className="title-description"> 
                  <tr><p className="title">Date of Birth</p></tr>
                  <tr><p className="description">{dob}</p></tr>
                </th>
              </th>
              <th className="desg-bar">
                <th><img className="photo" src="https://cdn3.vectorstock.com/i/1000x1000/70/52/executive-manager-icon-simple-style-vector-27507052.jpg" alt=""></img></th>
                <th className="title-description">
                  <tr><p className="title">Manager Name</p></tr>
                  <tr><p className="description">{manager}</p></tr>
                </th>
              </th>
            </tr>
          </th>
        </tbody>
      </table>
    </div>
  );
}