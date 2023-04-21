import React from 'react'
import "./NumbersCount.css"
import CountUp from 'react-countup'

const NumbersCount = () => {
  return (
    <section className="section section-work-data">
      <div className="container grid grid-four-column">
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={38.4} duration={0.8}/>k+</h2>
            <p>Instagram Followers</p>
          </div>
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={2500} duration={0.8} />+
            </h2>
            <p>Youtube Suscribers</p>
          </div>
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={500} duration={0.8} />+
            </h2>
            <p>Students Mentored</p>
          </div>
          <div>
            <h2 className="counter-numbers">
            <CountUp className="For-numbers" delay={0.2} end={70} duration={0.8} />+
            </h2>
            <p>SESSIONS FINISHED</p>
          </div>
      </div>

    </section>
  )
}

export default NumbersCount