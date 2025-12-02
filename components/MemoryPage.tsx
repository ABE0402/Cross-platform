
import React, { useState, useEffect } from 'react';
import QuizHeader from './QuizHeader';
import { ClubIcon, HeartIcon, DiamondCardIcon } from './icons';

const options = [
    { id: 1, content: <div className="flex items-center gap-4"><DiamondCardIcon /><span className="text-4xl font-bold">-</span><ClubIcon /></div> },
    { id: 2, content: <div className="flex items-center gap-4"><DiamondCardIcon /><span className="text-4xl font-bold">-</span><HeartIcon /></div> },
    { id: 3, content: <div className="flex items-center gap-4"><ClubIcon /><span className="text-4xl font-bold">-</span><HeartIcon /></div> },
    { id: 4, content: <div className="flex items-center gap-4"><HeartIcon /><span className="text-4xl font-bold">=</span></div> },
];

const CORRECT_ANSWER_ID = 3;

interface MemoryPageProps {
  onComplete: (isCorrect: boolean) => void;
  onGoHome: () => void;
}

const MemoryPage: React.FC<MemoryPageProps> = ({ onComplete, onGoHome }) => {
    const [phase, setPhase] = useState<'memorize' | 'recall'>('memorize');
    const [selection, setSelection] = useState<{ id: number; isCorrect: boolean } | null>(null);

    useEffect(() => {
        if (phase === 'memorize') {
            const timer = setTimeout(() => {
                setPhase('recall');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    const handleSelect = (id: number) => {
        if (selection) return;
        const isCorrect = id === CORRECT_ANSWER_ID;
        setSelection({ id, isCorrect });
        onComplete(isCorrect);
    };

    const getBorderColor = (id: number) => {
        if (!selection) return 'border-gray-200';
        if (selection.id !== id) return 'border-gray-200';
        return selection.isCorrect ? 'border-green-500' : 'border-red-500';
    };

    if (phase === 'memorize') {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full text-center">
                <QuizHeader 
                    day={12} 
                    category="기억력 훈련" 
                    title="아래 모양 2개를 잘 기억해 보세요." 
                    onBack={onGoHome}
                />
                <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg p-8 my-8 min-h-[200px]">
                    <div className="flex items-center gap-8 animate-pulse">
                        <ClubIcon className="w-32 h-32 text-black" />
                        <span className="text-6xl font-bold text-gray-400">-</span>
                        <HeartIcon className="w-32 h-32 text-black" />
                    </div>
                </div>
                <div className="text-lg text-gray-500">5초 후에 다음 문제로 넘어갑니다.</div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <QuizHeader 
                day={12} 
                category="기억력 훈련" 
                title="앞에서 보았던 모양을 찾아 주세요." 
                onBack={onGoHome}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {options.map(option => (
                    <div
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`flex items-center justify-center p-4 min-h-[120px] rounded-lg border-4 transition-all duration-300 cursor-pointer ${getBorderColor(option.id)} ${selection ? '' : 'hover:bg-pink-100'}`}
                    >
                        <div className="relative">
                            {option.content}
                            <div className="absolute -top-4 -left-4 bg-[#A96586] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                                {option.id}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryPage;
