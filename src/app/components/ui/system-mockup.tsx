export function SystemMockup() {
  return (
    <div className="relative w-full max-w-4xl group perspective-1000">
      {/* Contenedor Principal con efecto de inclinación sutil */}
      <div className="relative aspect-[16/10] w-full rounded-2xl border border-[#5E6472]/10 bg-white shadow-2xl overflow-hidden transition-transform duration-700 group-hover:rotate-x-1">
        
        {/* Top Bar: Estilo Browser Pro */}
        <div className="h-10 border-b border-[#5E6472]/5 bg-[#F6F8FB]/50 flex items-center justify-between px-4">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#0B0D12]/10" />
            <div className="h-2 w-2 rounded-full bg-[#0B0D12]/20" />
            <div className="h-2 w-2 rounded-full bg-[#0B0D12]/30" />
          </div>
          <div className="h-4 w-32 rounded-md bg-[#0B0D12]/15 animate-pulse" />
          <div className="w-6" /> {/* Spacer */}
        </div>

        <div className="flex h-full">
          {/* Sidebar Técnica */}
          <div className="w-1/4 border-r border-[#5E6472]/10 p-4 space-y-6 hidden md:block">
            <div className="space-y-3">
              <div className="h-2 w-full rounded-full bg-[#0B0D12]/10" />
              <div className="h-2 w-[80%] rounded-full bg-[#0B0D12]/5" />
            </div>
            <div className="space-y-4 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-sm bg-[#5E6472]/10" />
                  <div className="h-1.5 flex-1 rounded-full bg-[#5E6472]/5" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Canvas */}
          <div className="flex-1 p-6 space-y-6">
            {/* Header de sección interno */}
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <div className="h-4 w-32 rounded-full bg-[#0B0D12]/10" />
                <div className="h-2 w-20 rounded-full bg-[#0B0D12]/5" />
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#0B0D12]/5" />
            </div>

            {/* Grid de KPIs Rápidos */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 rounded-xl border border-[#5E6472]/5 bg-white p-3 space-y-2">
                  <div className="h-1.5 w-1/2 rounded-full bg-[#5E6472]/10" />
                  <div className="h-3 w-3/4 rounded-full bg-[#0B0D12]/5" />
                </div>
              ))}
            </div>

            {/* Gráfico Principal Evolucionado */}
            <div className="h-40 w-full rounded-2xl border border-[#5E6472]/5 bg-[#F6F8FB]/30 p-6">
              <div className="flex items-end gap-3 h-full w-full">
                {[30, 50, 40, 80, 60, 90, 70, 85, 45, 65, 55, 75].map((h, i) => (
                  <div key={i} className="relative flex-1 group/bar">
                    <div 
                      className="w-full bg-[#0B0D12]/5 rounded-t-[2px] transition-all duration-1000 ease-out group-hover:bg-[#0B0D12]/20" 
                      style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }} 
                    />
                    {/* Tooltip simulado al hacer hover */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-2 w-4 rounded-full bg-[#0B0D12]/20 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabla de Datos / Lista de Actividad */}
            <div className="space-y-3 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#5E6472]/5">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-[#F6F8FB]" />
                    <div className="h-2 w-24 rounded-full bg-[#5E6472]/10" />
                  </div>
                  <div className="h-2 w-12 rounded-full bg-[#5E6472]/5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* El Degradado de salida para fundir con el Hero */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F6F8FB] via-[#F6F8FB]/90 to-transparent pointer-events-none" />
      </div>

      {/* Sombras de apoyo para realismo */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-[#0B0D12]/5 blur-3xl rounded-full -z-10" />
    </div>
  );
}