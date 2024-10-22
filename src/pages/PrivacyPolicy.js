// src/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file
import Contentsection from "../components/contentbg";
import bg1 from "../assets/img/nature.jpg";

const PrivacyPolicy = () => {
  return (
    <>
     <Contentsection heading={"Privacy Policy"} backgroundImage={bg1} />
    
     <div class="container-fluid  new-privacy">
  <div class="row justify-content-center">
    <div class="col-lg-10 col-md-12">
      <div class="privacy-policy">
        {/* <h1></h1> */}
        <p>
          At Capstone Holidays, we are committed to protecting the privacy and security of the personal
          information of our customers and website visitors. This Privacy Policy outlines the types of
          personal information we collect, how we use and protect that information, and your rights
          regarding your personal data. By using our website or providing us with your personal
          information, you agree to the practices described in this Privacy Policy.
        </p>
        <h2>Information We Collect</h2>
      <ul>
        <li>Personal Information: such as your name, email address, phone number, postal address, date of birth, passport information, and other details you provide to us voluntarily.</li>
        <li>Payment Information: such as your credit card details, bank account information, and billing address, which are necessary for processing your payments for our services.</li>
        <li>Booking Information: such as details about your travel plans, including destinations, dates, accommodation preferences, and any other relevant information required for booking your travel arrangements.</li>
        <li>Communication Information: such as the content of your messages, emails, or other communications you send us, including any feedback, inquiries, or requests for assistance.</li>
        <li>Technical Information: such as your IP address, browser type, operating system, device information, and other technical details that are automatically collected when you visit our website.</li>
      </ul>

      <h2>Use of Information</h2>
      <ul>
        <li>Providing Services: to process your bookings, reservations, and payments, and to deliver the travel services you have requested.</li>
        <li>Communication: to communicate with you regarding your travel arrangements, respond to your inquiries, provide customer support, and send you relevant information about our services, promotions, and offers.</li>
        <li>Improving User Experience: to enhance and personalize your experience on our website, customize the content and services we offer, and analyze website usage and trends.</li>
        <li>Marketing and Advertising: to send you marketing communications about our services, promotions, and offers that may be of interest to you, unless you have opted out of receiving such communications.</li>
        <li>Legal Compliance: to comply with applicable laws, regulations, or legal processes, and to protect our rights, property, or safety, and the rights, property, or safety of our customers or others.</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information from unauthorized
        access, loss, misuse, alteration, or disclosure. We use industry-standard security technologies and
        procedures to safeguard your data. However, please note that no method of transmission over the
        internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Data Retention</h2>
      <p>
        We will retain your personal information only for as long as necessary to fulfill the purposes
        outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
      </p>

      <h2>Sharing of Information</h2>
      <p>
        We may share your personal information with trusted third parties only for the purposes described in this Privacy Policy. These may include:
      </p>
      <ul>
        <li>Service Providers: such as hotels, airlines, car rental agencies, and other travel service providers necessary for fulfilling your travel bookings.</li>
        <li>Payment Processors: to process your payments securely.</li>
        <li>Legal Requirements: when required by law or in response to a valid legal process, including to government authorities or other third parties in connection with an investigation of fraud, intellectual property infringement, or other activity that is illegal or may expose us to legal liability.</li>
        <li>Business Transfers: in the event of a merger, acquisition, or sale of our business or assets, your personal information may be transferred to the new entity or buyer.</li>
      </ul>

      <h2>Your Rights</h2>
      <p>You have certain rights regarding your personal information, which may include:</p>
      <ul>
        <li>Access and Rectification: the right to request access to the personal information we hold about you and to update or correct any inaccuracies.</li>
        <li>Erasure: the right to request the deletion of your personal information, subject to legal obligations or legitimate interests.</li>
        <li>Restriction of Processing: the right to request the restriction of processing your personal information in certain circumstances.</li>
        <li>Objection to Processing: the right to object to the processing of your personal information based on legitimate interests, unless we demonstrate compelling legitimate grounds or legal obligations for processing.</li>
        <li>Data Portability: the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format, and to transmit that information to another data controller.</li>
        <li>Withdrawal of Consent: if we rely on your consent to process your personal information, you have the right to withdraw that consent at any time.</li>
      </ul>
      <p>
        To exercise your rights or if you have any questions or concerns about our Privacy Policy, please contact us using the contact information provided at the end of this document.
      </p>

      <h2>Cookies and Tracking Technologies</h2>
      <p>
        We may use cookies and similar tracking technologies to collect information about your interactions
        with our website. You can manage your cookie preferences through your browser settings.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites or services. This Privacy Policy does not
        apply to those third-party websites or services, and we are not responsible for their privacy
        practices. We encourage you to review the privacy policies of those third parties before providing
        any personal information.
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on our website,
        and the revised version will be effective as of the “Effective Date” mentioned at the beginning
        of the policy.
      </p>
      </div>
    </div>
  </div>
</div>
    </>

  );
};

export default PrivacyPolicy;
