import { SocialIcon } from "@/components/SocialIcon";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://v3.fal.media/files/panda/cpD51JFheWZlLq02KjGdD_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Main Title */}
        <div className="text-center mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Senia's Site
          </h1>
          
          {/* Contact Me Text */}
          <p className="text-2xl md:text-3xl font-script text-white mb-12" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Contact me
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 items-center justify-center">
          <SocialIcon 
            type="instagram" 
            href="https://instagram.com" 
          />
          <SocialIcon 
            type="pinterest" 
            href="https://pinterest.com" 
          />
          <SocialIcon 
            type="linkedin" 
            href="https://linkedin.com" 
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-gentle-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-secondary/50 rounded-full animate-gentle-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-12 w-5 h-5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Minimal Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className="text-center">
          <p className="text-sm text-white/80 font-light" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
            © 2024 Senia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;