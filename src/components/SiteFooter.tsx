import React from "react";
import "./SiteFooter.css";

const SiteFooter: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <div className="footer__logo">Meister <span>Ware</span></div>
                    <p>Gute Technik. Fairer Service. Schneller Versand.</p>
                    <ul className="footer__contact">
                        <li>info@meisterware.de</li>
                        <li>+49 (0)69 000 000</li>
                        <li>Offenbach am Main</li>
                    </ul>
                </div>

                <nav className="footer__col">
                    <h4>Menü</h4>
                    <ul>
                        <li><a href="/about">Über uns</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Kontakt</a></li>
                    </ul>
                </nav>

                <div className="footer__col">
                    <h4>Service</h4>
                    <ul>
                        <li><a href="/shipping">Versand & Lieferzeit</a></li>
                        <li><a href="/returns">Rückgabe & Garantie</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/payment">Zahlungsarten</a></li>
                    </ul>
                    <div className="footer__hours">
                        <div>Mo–Fr: 9:00–18:00</div>
                        <div>Sa: 10:00–14:00</div>
                    </div>
                </div>

                <div className="footer__newsletter">
                    <h4>Newsletter</h4>
                    <p>Erhalte Angebote und Neuheiten zuerst.</p>
                    <form onSubmit={(e) => e.preventDefault()} className="footer__form">
                        <input type="email" placeholder="E-Mail" aria-label="E-Mail" required />
                        <button type="submit">Abonnieren</button>
                    </form>
                    <small>Mit der Anmeldung akzeptierst du unsere Datenschutzerklärung.</small>
                </div>
            </div>

            <div className="footer__bottom">
                <div>© {new Date().getFullYear()} Meister Ware. Alle Rechte vorbehalten.</div>
                <ul className="footer__payments">
                    <li>VISA</li>
                    <li>Mastercard</li>
                    <li>PayPal</li>
                    <li>Klarna</li>
                </ul>
            </div>
        </footer>
    );
};

export default SiteFooter;
