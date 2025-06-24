import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const mettaMuse = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerSubscribe}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p style={{ textWrap: "balance" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className={styles.footerForm}>
            <input
              className={styles.footerFormEmail}
              type="email"
              placeholder="Enter your email"
              id="formEmail"
            />
            <button className={styles.footerFormButton}>Subscribe</button>
          </div>
        </div>
        <div className={styles.footerCallUs}>
          <h3>CALL US</h3>
          <div className={styles.footerCallUsDetails}>
            <p>+44 221 133 5360</p>
            <Image src="/assets/dot.svg" alt="dot" width={6} height={6} />
            <p>customercare@mettamuse.com</p>
          </div>
        </div>
        <div className={styles.currency}>
          <h3>CURRENCY</h3>
          <div className={styles.currencyDetails}>
            <Image
              src="/assets/usflag.svg"
              alt="us flag"
              width={24}
              height={24}
            />
            <Image src="/assets/dot.svg" alt="dot" width={6} height={6} />
            <p>USD</p>
          </div>

          <span>
            Transactions will be completed in Euros and a currency reference is
            available on hover
          </span>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.mettaMuse}>
          <h3>mettā muse</h3>
          {mettaMuse.map((item, index) => (
            <Link href="/" key={index}>
              {item}
            </Link>
          ))}
        </div>
        <div className={styles.quickLinks}>
          <h3>QUICK LINKS</h3>
          {quickLinks.map((item, index) => (
            <Link href="/" key={index}>
              {item}
            </Link>
          ))}
        </div>
        <div>
          <div className={styles.followUs}>
            <h3>Follow Us</h3>
            <div className={styles.socials}>
              <Image
                src="/assets/insta.svg"
                alt="instagram"
                width={34}
                height={34}
              />
              <Image
                src="/assets/linkdIn.svg"
                alt="linkedin"
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className={styles.paymentAccepts}>
            <h3>mettā muse Accepts</h3>
            <div className={styles.paymentMethods}>
              <Image
                src="/assets/gpay.png"
                alt="googlepay"
                width={50}
                height={30}
              />
              <Image
                src="/assets/mastercard.png"
                alt="mastercard"
                width={50}
                height={30}
              />
              <Image
                src="/assets/paypal.png"
                alt="paypal"
                width={50}
                height={30}
              />
              <Image src="/assets/amex.png" alt="amex" width={50} height={30} />
              <Image
                src="/assets/amazonpay.png"
                alt="amazonpay"
                width={50}
                height={30}
              />
              <Image
                src="/assets/paytm.png"
                alt="paytm"
                width={50}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
