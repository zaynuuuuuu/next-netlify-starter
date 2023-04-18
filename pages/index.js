'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";


export default function Home() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link href="/">
        
           <h1> Logo</h1>
        </Link>
        <button
          onClick={toggleMenu}
          className={`navbar-toggle ${
            isMenuOpen ? "navbar-toggle-active" : ""
          }`}
        >
          <FaChevronDown className="navbar-toggle-icon" />
        </button>
      </div>
      <ul
        className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}
      >
        <li className="navbar-item">
          <Link href="#" className="navbar-link">
          Accidents + Personal
          </Link>
          <ul className="navbar-submenu">
            <li>
              <Link href="#" className="navbar-submenu-link">
              Immigration
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Housing Disrepair
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Conveyancing
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Driving Offences
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Accidents at Work
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Property Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Data Breach
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Unlawful Evictions
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Retaliatory Evictions
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Motorbike injury claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Car accident claims
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Bicycle injury claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Pedestrian injury claims
              </Link>
            </li>
            <li>
              <Link href="/" className="navbar-submenu-link">
              Taxi accident claims
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar-item">
          <Link href="#" className="navbar-link">
          Replacement Vehicle + Repair
          </Link>
          <ul className="navbar-submenu">
            <li>
              <Link href="#" className="navbar-submenu-link">
              24/7 Accident Support
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Free Replacement Vehicle
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Free Recovery
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar-item">
          <Link href="#" className="navbar-link">
          Clinical + Medical negligence
          </Link>
          <ul className="navbar-submenu">
            <li>
              <Link href="#" className="navbar-submenu-link">
              Personal Injury
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Serious Injury Claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Fatal Injury Claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Criminal Injury Claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Slips, Trips and Falls
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Clinical Negligence / Dental Negligence
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Cosmetic Surgery Claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Professional Negligence Claims
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar-item">
          <Link href="#" className="navbar-link">
          Financial + Business
          </Link>
          <ul className="navbar-submenu">
            <li>
              <Link href="#" className="navbar-submenu-link">
              Commerical Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              PPI Tax Reclaim
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Marriage Tax Allowance Claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Mediation Services
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Translation Services
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Property Surveys
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Mis Sold Financial Product
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Employment Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Mortgage advice
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Property damage claims
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar-item">
          <Link href="#" className="navbar-link">
          Legal
          </Link>
          <ul className="navbar-submenu">
            <li>
              <Link href="#" className="navbar-submenu-link">
              Family Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Criminal Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Commerical Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Tenancy Deposit Law
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Court Repersentation
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Wills Trusts & Probate
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Free Legal Advice
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Pcp claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Stamp duty land tax claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Civil disputes
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Police station representation
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              All litigation matters
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Boundary disputes
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              Industrial disease claims
              </Link>
            </li>
            <li>
              <Link href="#" className="navbar-submenu-link">
              All types of form filling
              </Link>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <Link href="/services" className="navbar-link">
          Why Choose Us?
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/About" className="navbar-link">
          About Us
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/services" className="navbar-link">
          Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
