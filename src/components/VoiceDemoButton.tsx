import { Mic } from 'lucide-react';

interface VoiceDemoButtonProps {
  onClick: () => void;
}

export function VoiceDemoButton({ onClick }: VoiceDemoButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative group"
      aria-label="Try voice AI demo"
    >
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-terracotta blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

      {/* Main button */}
      <div className="relative px-6 md:px-8 py-3 md:py-4 bg-terracotta border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
        {/* Live badge */}
        <div className="absolute -top-3 -right-3 flex items-center space-x-1 bg-terracotta border-2 border-charcoal px-2 py-1 rounded-full">
          <span className="w-2 h-2 bg-off-white rounded-full animate-pulse"></span>
          <span className="text-xs font-black uppercase text-off-white">Live</span>
        </div>

        {/* Button content */}
        <div className="flex items-center justify-center space-x-2">
          {/* Animated microphone icon */}
          <div className="relative">
            <Mic className="w-5 h-5 md:w-6 md:h-6 text-off-white" />
            {/* Animated sound waves */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-2 border-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-150"></div>
            </div>
          </div>

          {/* Button text - solid, always readable */}
          <div className="text-center">
            <div className="font-black uppercase text-sm md:text-base text-off-white tracking-tight-lg">
              Try Voice AI Demo
            </div>
            <div className="hidden md:block text-xs text-off-white">
              No signup required
            </div>
          </div>
        </div>
      </div>

      {/* Supporting text for mobile */}
      <div className="md:hidden text-center text-xs text-charcoal font-bold mt-2">
        Free instant demo
      </div>
    </button>
  );
}
