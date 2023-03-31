import React, { useState } from "react";
import logo from '../Images/logo.png';
import { Link, NavLink } from "react-router-dom";

const TopHeader = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => { setModal(!modal) }


  return (
    <>
      <NavLink  onClick={toggleModal} className="show-btn"><i className="fa-solid fa-bars"></i></NavLink>
      {modal && (
        <div className="Top-header-section">
          <div className="Top-Header-wrapper">
            <div className="logo">
              <Link to='/'><img src={logo} alt="Logo" /></Link>
            </div>
              <ul onClick={toggleModal} className="menu">
            <li className="Certifications">
              <NavLink to="">Certifications</NavLink>
              <ul className="Certifications-folder">
                <li><NavLink to="/basicpage/exam-dates">Exam Dates</NavLink></li>
                <li><NavLink to="">Download Documents</NavLink></li>
                <li><NavLink to="/basicpage/download-forms">Download Forms</NavLink></li>
              </ul>
            </li>
            <li className="Membership">
              <NavLink to="">Membership</NavLink>
              <ul className="Membership-folder">
                <li><NavLink to='/basicpage/membership-details'>Membership Details</NavLink></li>
                <li><NavLink to="/membershipRegistration">Registration</NavLink></li>
                <li><NavLink to="">Renewal / Login</NavLink></li>
              </ul>
            </li>
            <li className="directory">
              <NavLink to="directory">Directory</NavLink>
              <ul className="directory-folder">
                <li><NavLink to="/CertifiedMembers">Certified Members</NavLink></li>
                <li><NavLink to="">Members</NavLink></li>
              </ul>
            </li>
            <li className="Programs">
              <NavLink to="">Programs</NavLink>
              <ul className="Programs-folder">
                <li><NavLink to='/basicpage/ta-101-program-details'>TA 101 - Program Details</NavLink></li>
                <li><NavLink to="/basicpage/saata-calendar-2021-2022">SAATA Calendar 2021 - 2022</NavLink></li>
              </ul>
            </li>
            <li className="Awards">
              <NavLink to="">Awards</NavLink>
              <ul className="Awards-folder">
                <li><NavLink to="">Professional Excellence Award</NavLink></li>
                <li><NavLink to="">Service Awards</NavLink></li>
                <li><NavLink to="">Call for Nominations</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li className="Newsletter">
              <NavLink to='/newsletter/from-the-editorial-desk'>Newsletter</NavLink>
              <ul className="Newsletter-folder">
                <li><NavLink to='/newsletterlist/cpnews'>Current and Previous Issues</NavLink></li>
                <li><NavLink to="">Newsletter Team</NavLink></li>
                <li><NavLink to="">Guidelines</NavLink></li>
                <li><NavLink to="">Advertisement Policy</NavLink></li>
                <li><NavLink to="">Team that Was</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Articles">Articles</NavLink>
            </li>
            <li>
              <NavLink to="">Journals</NavLink>
            </li>
          </ul>
          </div>
        </div>
      )}

      <div className="Top-header-section-folder">
        <div className="Top-Header-wrapper-folder">
          <div className="logo">
            <Link to='/'><img src={logo} alt="Logo" /></Link>
          </div>
          <ul className="menu-folder">
            <li className="Certifications">
              <NavLink to="">Certifications</NavLink>
              <ul className="Certifications-folder">
                <li><NavLink to="/basicpage/exam-dates">Exam Dates</NavLink></li>
                <li><NavLink to="">Download Documents</NavLink></li>
                <li><NavLink to="/basicpage/download-forms">Download Forms</NavLink></li>
              </ul>
            </li>
            <li className="Membership">
              <NavLink to="member">Membership</NavLink>
              <ul className="Membership-folder">
                <li><NavLink to='/basicpage/membership-details'>Membership Details</NavLink></li>
                <li><NavLink to="/membershipRegistration">Registration</NavLink></li>
                <li><NavLink to="">Renewal / Login</NavLink></li>
              </ul>
            </li>
            <li className="directory">
              <NavLink to="directory">Directory</NavLink>
              <ul className="directory-folder">
                <li><NavLink to="/CertifiedMembers">Certified Members</NavLink></li>
                <li><NavLink to="">Members</NavLink></li>
              </ul>
            </li>
            <li className="Programs">
              <NavLink to="">Programs</NavLink>
              <ul className="Programs-folder">
                <li><NavLink to='/basicpage/ta-101-program-details'>TA 101 - Program Details</NavLink></li>
                <li><NavLink to="/basicpage/saata-calendar-2021-2022">SAATA Calendar 2021 - 2022</NavLink></li>
              </ul>
            </li>
            <li className="Awards">
              <NavLink to="">Awards</NavLink>
              <ul className="Awards-folder">
                <li><NavLink to="">Professional Excellence Award</NavLink></li>
                <li><NavLink to="">Service Awards</NavLink></li>
                <li><NavLink to="">Call for Nominations</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li className="Newsletter">
              <NavLink to='/newsletter/from-the-editorial-desk'>Newsletter</NavLink>
              <ul className="Newsletter-folder">
                <li><NavLink to='/newsletterlist/cpnews'>Current and Previous Issues</NavLink></li>
                <li><NavLink to="">Newsletter Team</NavLink></li>
                <li><NavLink to="">Guidelines</NavLink></li>
                <li><NavLink to="">Advertisement Policy</NavLink></li>
                <li><NavLink to="">Team that Was</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Articles">Articles</NavLink>
            </li>
            <li>
              <NavLink to="jour">Journals</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopHeader;