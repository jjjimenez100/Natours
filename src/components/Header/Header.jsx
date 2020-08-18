import React from 'react';
import {
    header,
    logo,
    logoContainer,
    primaryHeading,
    primaryHeadingMain,
    primaryHeadingSub,
    contentContainer,
    btn,
    btnWhite,
    btnAnimated,
} from './Header.module.css';

export default function Header() {
    return (
        <header className={header}>
            <div className={logoContainer}>
                <img src="/images/logo-white.png" alt="Logo" className={logo} />
            </div>

            <div className={contentContainer}>
                <h1 className={primaryHeading}>
                    <span className={primaryHeadingMain}>Outdoors</span>
                    <span className={primaryHeadingSub}>is where life happens</span>
                </h1>

                <a href="#" className={`${btn} ${btnWhite} ${btnAnimated}`}>Discover our tours</a>
            </div>
        </header>
    )
};