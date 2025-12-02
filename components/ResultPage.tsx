import React from 'react';

interface ResultPageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ score, totalQuestions, onRestart }) => {
    
    // 점수에 따른 메시지와 스타일 결정
    const getResultContent = (score: number, total: number) => {
        const percentage = score / total;
        if (percentage === 1) {
            return {
                message: "와우! 만점입니다! 뇌 건강이 아주 튼튼하시네요!",
                colorClass: "bg-green-500",
                bgClass: "bg-green-50",
                title: "최고예요!",
                emoji: "🏆"
            };
        }
        if (percentage >= 0.75) {
            return {
                message: "훌륭해요! 아주 잘하셨습니다. 조금만 더 하면 만점이에요!",
                colorClass: "bg-blue-500",
                bgClass: "bg-blue-50",
                title: "참 잘했어요!",
                emoji: "🌟"
            };
        }
        if (percentage >= 0.5) {
            return {
                message: "잘하셨어요! 꾸준히 연습하면 기억력이 더 좋아질 거예요.",
                colorClass: "bg-yellow-500",
                bgClass: "bg-yellow-50",
                title: "좋아요!",
                emoji: "👍"
            };
        }
        return {
            message: "수고하셨습니다! 매일매일 두뇌 운동을 하는 것이 중요해요.",
            colorClass: "bg-[#D98BAA]",
            bgClass: "bg-pink-50",
            title: "수고하셨어요",
            emoji: "👏"
        };
    };

    const { message, colorClass, bgClass, title, emoji } = getResultContent(score, totalQuestions);

    return (
        <div className="flex flex-col items-center justify-center h-full text-center bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">퀴즈 결과</h1>
            <p className="text-xl text-gray-500 mb-6">{title}</p>
            
            <div className={`${colorClass} text-white rounded-full w-48 h-48 flex flex-col items-center justify-center mb-6 shadow-xl transform transition-transform hover:scale-105 relative`}>
                <div className="absolute -top-4 -right-4 text-6xl drop-shadow-md animate-bounce">
                    {emoji}
                </div>
                <span className="text-2xl opacity-90">총 점수</span>
                <span className="text-6xl font-bold">{score} <span className="text-3xl opacity-80">/ {totalQuestions}</span></span>
            </div>
            
            <div className={`${bgClass} p-6 rounded-xl w-full mb-8 flex items-center justify-center shadow-inner border border-opacity-20 border-gray-400`}>
                <p className="text-gray-800 text-lg font-medium leading-relaxed break-keep">{message}</p>
            </div>

            <button
                onClick={onRestart}
                className="bg-[#A96586] hover:bg-[#864b66] text-white font-bold text-2xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
                다시하기
            </button>
        </div>
    );
};

export default ResultPage;