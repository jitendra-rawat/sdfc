import React from 'react';

const About = () => {
  const sections = [
    {
      title: "Our Vision & Mission",
      content: [
        "Our vision is to inspire the next generation of football players and fans by cultivating a culture of excellence and teamwork. We aim to provide opportunities for young athletes to develop their skills and represent our community with pride.",
        "Through our mission, we seek to create a competitive yet inclusive environment where everyone, from players to fans, can experience the joy and unity that football brings. We strive to become a leading force in regional and national football while remaining dedicated to our roots."
      ],
    },
    {
      title: "Achievements",
      content: [
        "Regional League Champions (2015, 2018, 2020)",
        "State Cup Winners (2016, 2019)",
        "Top 3 finish in National Football Tournament (2021)",
        "Recognized for Excellence in Youth Development by the Indian Football Association"
      ],
    }
  ];

  return (
    <section className="py-20 bg-current  bg-center bg-no-repeat opacity-90" style={{ backgroundImage: "url('/bg-3.png')" }}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* About the Club Section */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-white mb-6">
            About SDFC Pipalkoti
          </h2>
          <p className="text-lg text-white text-center max-w-2xl mx-auto">
            SDFC Pipalkoti is a dynamic football club based in Pipalkoti, India. Founded in 2020, the club has been committed to promoting local talent and building a strong community through the sport of football. Our passion for the game drives us to compete at the highest levels while nurturing future stars.
          </p>
        </div>

        <div>
          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">{section.title}</h3>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-white mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
