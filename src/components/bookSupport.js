import React from 'react';
// import { useSelector } from 'react-redux';

const OtherInfoSection = () => (

  <>
    <section className="progress">
      <div className="perDisplay" />
      <article className="percentagesData">
        <span className="per">64%</span>
        <span className="comp">Complete</span>
      </article>
    </section>
    <div className="separatorLine" />
    <section className="otherImfo">
      <span className="Curchapter">CURRENT CHAPTER</span>
      <span className="chapter">CHAPTER 17</span>
      <button type="submit">UPDATE PROGRESS</button>
    </section>
  </>
);
export default OtherInfoSection;
