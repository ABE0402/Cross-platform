
import React from 'react';

interface QuizHeaderProps {
    day: number;
    category: string;
    title: string;
    subtitle?: string;
    onBack: () => void;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ day, category, title, subtitle, onBack }) => (
    <div className="mb-6">
        <button 
            onClick={onBack}
            className="mb-2 text-gray-500 hover:text-[#A96586] flex items-center gap-1 text-sm font-medium transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            목록으로
        </button>
        <div className="flex justify-between items-center text-gray-500 text-lg mb-4 px-2">
            <span className="text-2xl font-bold text-[#D98BAA]">{category}</span>
            <span className="font-semibold">{day}일차</span>
        </div>
        <div className="bg-[#A96586] text-white p-4 rounded-lg text-center shadow-md">
            <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
            {subtitle && <p className="mt-1 text-sm md:text-base">{subtitle}</p>}
        </div>
    </div>
);

export default QuizHeader;
