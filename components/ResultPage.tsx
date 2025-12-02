
import React, { useState, useEffect } from 'react';
import { getEncouragementMessage } from '../services/geminiService';

interface ResultPageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ score, totalQuestions, onRestart }) => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMessage = async () => {
            setIsLoading(true);
            const msg = await getEncouragementMessage(score, totalQuestions);
            setMessage(msg);
            setIsLoading(false);
        };
        fetchMessage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, totalQuestions]);

    return (
        <div className="flex flex-col items-center justify-center h-full text-center bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">퀴즈 결과</h1>
            <div className="bg-[#D98BAA] text-white rounded-full w-48 h-48 flex flex-col items-center justify-center mb-6 shadow-xl">
                <span className="text-2xl">총 점수</span>
                <span className="text-6xl font-bold">{score} <span className="text-3xl">/ {totalQuestions}</span></span>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg min-h-[100px] w-full mb-8 flex items-center justify-center">
                {isLoading ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                ) : (
                    <p className="text-gray-700 text-lg">{message}</p>
                )}
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
