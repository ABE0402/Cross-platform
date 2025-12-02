
import React from 'react';

interface QuizHeaderProps {
    day: number;
    title: string;
    subtitle?: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ day, title, subtitle }) => (
    <div className="mb-6">
        <div className="flex justify-between items-center text-gray-500 text-lg mb-4 px-2">
            <span className="text-2xl font-bold text-[#D98BAA]">지각력</span>
            <span className="font-semibold">{day}일차</span>
        </div>
        <div className="bg-[#A96586] text-white p-4 rounded-lg text-center shadow-md">
            <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
            {subtitle && <p className="mt-1 text-sm md:text-base">{subtitle}</p>}
        </div>
    </div>
);

export default QuizHeader;
