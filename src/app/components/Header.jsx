
import Button from "./Button";

export default function Hero() {
    return (
      <section
        className="relative left-0 right-0 top-0 h-screen opacity-90 flex items-center bg-current bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-2.png')" }} 
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div>  */}
        
        <div className="container mx-auto max-w-7xl z-10 flex items-center justify-center px-10">
          <div className="m text-white">
            <h1 className="text-3xl  lg:text-5xl   md:text-6xl font-bold text-center lg:leading-tight mb-4">
              Welcome to Semal-Dala Football Club
            </h1>
            <p className="text-lg lg:text-xl mb-6 text-center ">
              A dynamic football club promoting local talent and fostering community spirit through sports.
            </p>
           
           <div className="flex justify-center">
           <Button link="/fix-match" label="Play Now" />
           </div>
         
          </div>
        </div>
      </section>
    );
  }
  