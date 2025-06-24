
import { Github, Twitter, Linkedin, Mail, Heart, Youtube, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-gray-400">Always excited to collaborate on new projects</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://x.com/KokoaInteractiv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
            >
              <X size={20} />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=L-HPxTs_5sI&ab_channel=KokoaInteractive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="mailto:community@kokoa-interactive.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-green-500 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by a passionate game developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
