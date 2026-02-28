import React from 'react';
import { Plus, Image, FileText } from 'lucide-react';

const InterfaceMockup = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-30 overflow-hidden">
      
      {/* Contenedor del Dispositivo (iPhone Frame Mockup) */}
      <div className="relative w-[300px] h-90 bg-blue-200 rounded-b rounded-[50px] shadow-2xl overflow-hidden flex flex-col items-center">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 w-24 h-7 bg-black rounded-full">
        </div>        
      </div>

      {/* --- FLOATING MODALS --- */}

      {/* Editar Texto (Superior Derecha) */}
      <div className="absolute top-[34%] translate-x-[110px] z-30">
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-white">
          <div className="w-12 h-12 bg-[#D1EEFF] rounded-full flex items-center justify-center">
            <FileText className="text-[#3BB2F9] w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-[#4A4A4A] text-2xl font-bold tracking-tight">Editar Texto</span>
        </div>
      </div>

      {/* Reemplazar Imagen (Centro) */}
      <div className="absolute top-[48%] -translate-x-0 z-30">
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-white">
          <div className="w-12 h-12 bg-[#FFE9D6] rounded-full flex items-center justify-center">
            <Image className="text-[#F99E66] w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-[#4A4A4A] text-2xl font-bold tracking-tight leading-none text-center">
            Reemplazar<br /><span className="inline-block -mt-1">Imagen</span>
          </span>
        </div>
      </div>

      {/* Agregar item (Inferior Izquierda) */}
      <div className="absolute bottom-[27%] -translate-x-[90px] z-30">
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-4 py-4 pr-8 rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-white">
          <div className="w-12 h-12 border-2 border-[#D99DFF] rounded-xl flex items-center justify-center">
            <Plus className="text-[#C66FFF] w-7 h-7" strokeWidth={3} />
          </div>
          <span className="text-[#4A4A4A] text-2xl font-bold tracking-tight">Agregar item</span>
        </div>
      </div>

    </div>
  );
};

export default InterfaceMockup;