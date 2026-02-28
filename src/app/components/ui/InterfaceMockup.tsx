import React from 'react';
import { Plus, Image, FileText } from 'lucide-react';

const InterfaceMockup = () => {
  return (
    <div className="relative flex items-center justify-center px-30 overflow-hidden mt-10">
      
      {/* Contenedor del Dispositivo (iPhone Frame Mockup) */}
      <div className="relative w-[300px] h-60 bg-blue-200 blur-xs rounded-b rounded-4xl shadow-2xl overflow-hidden flex flex-col items-center">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 w-24 h-7 bg-black rounded-full">
        </div>        
      </div>

    </div>
  );
};

export default InterfaceMockup;