import React, { useState } from "react";
import logo from '../Images/logo.png';
import { Link, NavLink } from "react-router-dom";

const TopHeader = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => { setModal(!modal) }


  return (
    <>
      <NavLink onClick={toggleModal} className="show-btn"><i className="fa-solid fa-bars"></i></NavLink>
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
                  <li><NavLink to="/basicpage/download-documents">Download Documents</NavLink></li>
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
                <NavLink to="/basicpage/directory">Directory</NavLink>
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
              <li className="Newsletter">
              <NavLink>Publications</NavLink>
              <ul className="Newsletter-folder">
                <li>
                  <NavLink to="/basicpage/journals">Journals</NavLink>
                </li>
              </ul>
            </li>
            <li className="Newsletter">
              <NavLink>Resources </NavLink>
              <ul className="Newsletter-folder">
                <li>
                  <NavLink to="/Articles">Articles</NavLink>
                </li>
              </ul>
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
                <li><NavLink to="/basicpage/download-documents">Download Documents</NavLink></li>
                <li><NavLink to="/basicpage/download-forms">Download Forms</NavLink></li>
              </ul>
            </li>
            <li className="Membership">
              <NavLink to="/basicpage/membership-details">Membership</NavLink>
              <ul className="Membership-folder">
                <li><NavLink to='/basicpage/membership-details'>Membership Details</NavLink></li>
                <li><NavLink to="/MembershipRegistration">Registration</NavLink></li>
                <li><NavLink to="/basicpage/membership-renewal">Renewal / Login</NavLink></li>
              </ul>
            </li>
            <li className="directory">
              <NavLink to="/basicpage/directory">Directory</NavLink>
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
              <NavLink to="/basicpage/awards">Awards</NavLink>
              <ul className="Awards-folder">
                <li><NavLink to="/basicpage/awards">Professional Excellence Award</NavLink></li>
                <li><NavLink to="/basicpage/service-award">Service Awards</NavLink></li>
                <li><NavLink to="/basicpage/call-for-nominations">Call for Nominations</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li className="Newsletter">
              <NavLink to='/newsletter/from-the-editorial-desk'>Newsletter</NavLink>
              <ul className="Newsletter-folder">
                <li><NavLink to='/newsletterlist/cpnews'>Current and Previous Issues</NavLink></li>
                <li><NavLink to="/newsletterTeam/infectious-workaholic">Newsletter Team</NavLink></li>
                <li><NavLink to="/basicpage/guidelines-for-content-contributors">Guidelines</NavLink></li>
                <li><NavLink to="/basicpage/newsletter-advertisement-policy">Advertisement Policy</NavLink></li>
                <li><NavLink to="/basicpage/team-that-was">Team that Was</NavLink></li>
              </ul>
            </li>
            <li className="Newsletter">
              <NavLink>Publications</NavLink>
              <ul className="Newsletter-folder">
                <li>
                  <NavLink to="/basicpage/journals">Journals</NavLink>
                </li>
              </ul>
            </li>
            <li className="Newsletter">
              <NavLink>Resources </NavLink>
              <ul className="Newsletter-folder">
                <li>
                  <NavLink to="/Articles">Articles</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <button className="login_btn">
          <a href="https://subscriptions.zoho.in/portal/saata1/login" target="_blank" rel="noreferrer">Membership Details</a>  
          </button>
        </div>
      </div>
    </>
  );
};

export default TopHeader;