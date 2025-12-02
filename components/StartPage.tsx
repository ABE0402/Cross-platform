
import React from 'react';
import type { Page } from '../types';

interface StartPageProps {
  onStart: (page: Page) => void;
  completedQuizzes: Page[];
  onViewResults: () => void;
  allCompleted: boolean;
}

const StartPage: React.FC<StartPageProps> = ({ onStart, completedQuizzes, onViewResults, allCompleted }) => {
  const menuItems = [
    { id: 'quiz1', title: '1. 지각력 훈련', subtitle: '장소 인식' },
    { id: 'quiz2', title: '2. 판단력 훈련', subtitle: '도형 찾기' },
    { id: 'quiz3', title: '3. 순서 배열 훈련', subtitle: '머리 감기 순서' },
    { id: 'memory', title: '4. 기억력 훈련', subtitle: '기억력 테스트' },
  ] as const;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-white p-6 rounded-2xl shadow-lg relative min-h-[500px]">
        <img src="https://picsum.photos/seed/brain/150/150" alt="Brain Health" className="rounded-full mb-6 shadow-md"/>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">두뇌 건강 퀴즈</h1>
        <p className="text-gray-500 mb-8">오늘 진행할 훈련을 선택해주세요.</p>
        
        <div className="w-full space-y-3 max-w-md mb-8">
            {menuItems.map((item) => {
                const isCompleted = completedQuizzes.includes(item.id as Page);
                return (
                    <button
                        key={item.id}
                        onClick={() => onStart(item.id as Page)}
                        className={`w-full border-2 border-dashed rounded-xl p-4 text-left transition-all group flex items-center justify-between relative
                            ${isCompleted 
                                ? 'bg-green-50 border-green-500 text-green-800 hover:bg-green-100' 
                                : 'bg-white border-gray-300 hover:border-[#A96586] hover:bg-pink-50 hover:text-[#A96586]'
                            }`}
                    >
                        <div className="flex items-center">
                            <span className={`text-lg font-bold mr-2 ${isCompleted ? 'text-green-700' : 'text-gray-700 group-hover:text-[#A96586]'}`}>
                                {item.title}
                            </span>
                            <span className={`text-sm font-normal ${isCompleted ? 'text-green-600' : 'text-gray-400 group-hover:text-[#D98BAA]'}`}>
                                ({item.subtitle})
                            </span>
                        </div>
                        {isCompleted && (
                            <div className="bg-green-500 text-white rounded-full p-1 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                        )}
                    </button>
                );
            })}
        </div>

        {allCompleted && (
            <div className="w-full max-w-md animate-fade-in-up mt-2">
                <button
                    onClick={onViewResults}
                    className="w-full bg-[#A96586] hover:bg-[#864b66] text-white font-bold text-xl py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                >
                    <span>결과 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        )}
    </div>
  );
};

export default StartPage;
