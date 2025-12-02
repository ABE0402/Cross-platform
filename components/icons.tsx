
import React from 'react';

// Icons for Quiz 2
export const CircleIcon: React.FC<{ className?: string }> = ({ className }) => <div className={`w-16 h-16 md:w-20 md:h-20 bg-gray-500 rounded-full ${className}`}></div>;
export const TriangleIcon: React.FC<{ className?: string }> = ({ className }) => <div className={`w-0 h-0 border-l-[32px] md:border-l-[40px] border-l-transparent border-b-[55.4px] md:border-b-[69.3px] border-b-gray-500 border-r-[32px] md:border-r-[40px] border-r-transparent ${className}`}></div>;
export const SquareIcon: React.FC<{ className?: string }> = ({ className }) => <div className={`w-16 h-16 md:w-20 md:h-20 bg-gray-500 ${className}`}></div>;
export const DiamondIcon: React.FC<{ className?: string }> = ({ className }) => <div className={`w-12 h-12 md:w-14 md:h-14 bg-gray-500 rotate-45 ${className}`}></div>;


// Icons for Memory Quiz
export const ClubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 512 512" className={className || "w-24 h-24 fill-current text-black"}>
        <path d="M256 416c-25.2 0-46.3-17.3-51.6-40H144a16 16 0 01-16-16v-16a16 16 0 0116-16h40.3c-2.3-6.4-3.6-13.2-3.6-20.2 0-35.3 28.7-64 64-64s64 28.7 64 64c0 7-1.3 13.8-3.6 20.2H400a16 16 0 0116 16v16a16 16 0 01-16 16h-60.4c-5.3 22.7-26.4 40-51.6 40zM192 256a48 48 0 1196 0 48 48 0 11-96 0z" />
        <path d="M288 96a64 64 0 10-128 0 64 64 0 10128 0zM352 240a64 64 0 100-128 64 64 0 100 128z"/>
    </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg viewBox="0 0 24 24" className={className || "w-24 h-24 text-black"} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const DiamondCardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className || "w-24 h-24 text-black"} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.32 1.011l-4.218 4.111a.563.563 0 00-.162.521l1.257 5.273c.099.416-.362.768-.71.521l-4.992-3.232a.563.563 0 00-.527 0l-4.992 3.232c-.348.247-.81-.105-.71-.521l1.257-5.273a.563.563 0 00-.162-.521l-4.218-4.111c-.38-.348-.179-.971.32-1.011l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" transform="scale(0.8) translate(2.5, 2.5) rotate(45 12 12)"/>
         <path transform="translate(4.5, -4.5) scale(0.7)" d="M12 2.25l.94 2.288 2.52.366-1.824 1.778.43 2.51L12 7.875l-2.266 1.19.43-2.51-1.824-1.778 2.52-.366L12 2.25z" fill="none"/>
         <path d="M12 2L2 12l10 10L22 12 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
