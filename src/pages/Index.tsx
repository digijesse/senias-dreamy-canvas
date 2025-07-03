import { ArrowDown } from "lucide-react";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://v3.fal.media/files/panda/cpD51JFheWZlLq02KjGdD_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Header */}
      <header className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 
          className="text-6xl md:text-8xl font-serif font-bold text-white mb-4"
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}
        >
          Senia's Site
        </h1>
        
        {/* Bouncing Down Arrow */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center cursor-pointer animate-bounce"
          onClick={scrollToContact}
        >
          <p 
            className="text-xl font-script mb-2"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            Contact Me
          </p>
          <ArrowDown className="mx-auto" size={32} />
        </div>
      </header>

      {/* Contact Section */}
      <div 
        id="contact" 
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
        style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      >
        <img
          src="/lovable-uploads/22453cf6-9f50-4e16-85c5-abd65819d280.png"
          alt="Senia"
          className="w-36 h-36 rounded-full object-cover mb-6 border-3 border-white"
        />
        
        <h2 
          className="text-4xl font-serif font-bold text-white mb-3"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          Senia
        </h2>
        
        <p 
          className="text-lg text-white mb-8 max-w-md leading-relaxed"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt blandit.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white/80 hover:bg-white text-gray-800 rounded-full font-semibold transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white/80 hover:bg-white text-gray-800 rounded-full font-semibold transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white/80 hover:bg-white text-gray-800 rounded-full font-semibold transition-colors duration-300"
          >
            Pinterest
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;