import React from 'react';
import Button from './Button';

const JoinClub = () => {
  return (
    <section
      className="py-20 bg-current bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-7xl container mx-auto px-4 text-white">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
          Join the Club Community
        </h2>

        <div className="mb-10">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Membership Program</h3>
          <p className="mb-2">
            Join our membership program to enjoy exclusive benefits including:
          </p>
          <ul className="list-disc list-inside">
            <li>Special access to events and matches</li>
            <li>Discounts on merchandise</li>
            <li>Members-only newsletters and updates</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Supporters Group</h3>
          <p className="mb-2">
            Our passionate fanbase is the heart of our club! Join our supporters group to:
          </p>
          <ul className="list-disc list-inside">
            <li>Participate in fan events and activities</li>
            <li>Engage in discussions and share your club spirit</li>
            <li>Receive updates about club news and events</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Volunteer & Donation Opportunities</h3>
          <p className="mb-2">
            Support our community outreach initiatives by getting involved:
          </p>
          <ul className="list-disc list-inside">
            <li>Volunteer at club events and matches</li>
            <li>Contribute to local charity programs</li>
            <li>Make a donation to help us grow and support local talent</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Button label="Join Now" link="/" />
        </div>
      </div>
    </section>
  );
};

export default JoinClub;
