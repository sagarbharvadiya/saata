import React, { useState } from "react";
import logo from '../Images/logo.png';
import { Link, NavLink } from "react-router-dom";


const TopHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="Top-header-section-folder">
        <div className="Top-Header-wrapper-folder">
          <div className="logo">
            <Link to='/'><img src={logo} alt="Logo" /></Link>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <div className="menu-toggle-bar"></div>
            <div className="menu-toggle-bar"></div>
            <div className="menu-toggle-bar"></div>
          </button>
          <ul className={`menu-folder ${menuOpen ? 'menu-open' : ''}`}>
            <li className="Certifications menu_item">
              <NavLink to="">Certifications</NavLink>
              <ul className="Certifications-folder">
                <li><NavLink to="/basicpage/exam-dates" onClick={() => toggleMenu(false)}>Exam Dates</NavLink></li>
                <li><NavLink to="/basicpage/download-documents" onClick={() => toggleMenu(false)}>Download Documents</NavLink></li>
                <li><NavLink to="/basicpage/download-forms" onClick={() => toggleMenu(false)}>Download Forms</NavLink></li>
              </ul>
            </li>
            <li className="Membership menu_item">
              <NavLink to="">Membership</NavLink>
              <ul className="Membership-folder">
                <li><NavLink to='/basicpage/membership-details' onClick={() => toggleMenu(false)}>Membership Details</NavLink></li>
                <li><NavLink to="/membershipRegistration" onClick={() => toggleMenu(false)}>Registration</NavLink></li>
                <li><NavLink to="/basicpage/membership-renewal" onClick={() => toggleMenu(false)}>Renewal / Login</NavLink></li>
              </ul>
            </li>
            <li className="directory menu_item">
              <NavLink to="/basicpage/directory" >Directory</NavLink>
              <ul className="directory-folder" onClick={() => toggleMenu(false)}>
                <li><NavLink to="/CertifiedMembers" onClick={() => toggleMenu(false)}>Certified Members</NavLink></li>
                {/* <li><NavLink to="">Members</NavLink></li> */}
              </ul>
            </li>
            <li className="Programs menu_item">
              <NavLink to="">Programs</NavLink>
              <ul className="Programs-folder">
                <li><NavLink to='/basicpage/ta-101-program-details' onClick={() => toggleMenu(false)}>TA 101 - Program Details</NavLink></li>
                <li><NavLink to="/basicpage/saata-calendar-2021-2022" onClick={() => toggleMenu(false)}>SAATA Calendar 2021 - 2022</NavLink></li>
              </ul>
            </li>
            <li className="Awards menu_item">
              <NavLink to="">Awards</NavLink>
              <ul className="Awards-folder">
                <li><NavLink to="/basicpage/awards" onClick={() => toggleMenu(false)}>Professional Excellence Award</NavLink></li>
                <li><NavLink to="/basicpage/service-award" onClick={() => toggleMenu(false)}>Service Awards</NavLink></li>
                <li><NavLink to="/basicpage/call-for-nominations" onClick={() => toggleMenu(false)}>Call for Nominations</NavLink></li>
              </ul>
            </li>
            <li className="menu_item">
              <NavLink to="/Gallery" onClick={() => toggleMenu(false)}>Gallery</NavLink>
            </li>
            <li className="Newsletter menu_item">
              <NavLink to='/newsletterlist/' >Newsletter</NavLink>
              <ul className="Newsletter-folder">
                <li><NavLink to='/newsletterlist/' onClick={() => toggleMenu(false)}>Current and Previous Issues</NavLink></li>
              </ul>
            </li>
            <li className="Newsletter menu_item">
              <NavLink>Publications</NavLink>
              <ul className="Newsletter-folder">
                <li>
                  <NavLink to="/basicpage/journals" onClick={() => toggleMenu(false)}>Journals</NavLink>
                </li>
              </ul>
            </li>
            <li className="Newsletter menu_item">
              <NavLink>Resources </NavLink>
              <ul className="Newsletter-folder">
                <li>
                  <NavLink to="/Articles" onClick={() => toggleMenu(false)}>Articles</NavLink>
                </li>
              </ul>
            </li>
            <li className="login_btn">
              <a href="https://subscriptions.zoho.in/portal/saata1/login" target="_blank" rel="noreferrer" onClick={() => toggleMenu(false)}>Membership Details</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
