
import React from 'react';

interface StartPageProps {
  onStart: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-white p-8 rounded-2xl shadow-lg">
        <img src="https://picsum.photos/seed/brain/200/200" alt="Brain Health" className="rounded-full mb-6"/>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">두뇌 건강 퀴즈</h1>
        <p className="text-gray-600 text-lg mb-8">치매 예방을 위한 인지 능력 향상 퀴즈입니다.</p>
        <button
            onClick={onStart}
            className="bg-[#D98BAA] hover:bg-[#A96586] text-white font-bold text-2xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
            시작하기
        </button>
    </div>
  );
};

export default StartPage;
