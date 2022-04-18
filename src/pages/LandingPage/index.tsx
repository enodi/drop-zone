import React from 'react';

import Countdown from '../../components/Countdown';
import Header from '../../components/Header';

const LandingPage: React.FC = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1152725); // Convert 13 days, 8 hours, 12 minutes and 5 seconds to seconds

  return (
    <div className='background'>
      <div className='wrapper'>
        <Header />
        <section className='container'>
          <div className='content'>
            <h1>Leezy Boost 103</h1>
            <Countdown expiryTimestamp={time} />
            <p className='drop'>Until Drop</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage;