
import React, { useState, useMemo } from 'react';
import QuizHeader from './QuizHeader';

const steps = [
    { id: 1, text: '머리 헹구기', img: 'https://i.imgur.com/H1tq2xM.png' },
    { id: 2, text: '머리 말리기', img: 'https://i.imgur.com/K3f7F9z.png' },
    { id: 3, text: '샴푸로 거품내기', img: 'https://i.imgur.com/oA7z3iY.png' },
    { id: 4, text: '샴푸 손에 덜어내기', img: 'https://i.imgur.com/8Qz1q8p.png' },
];

const CORRECT_ORDER = [4, 3, 1, 2];

interface QuizPage3Props {
  onComplete: (isCorrect: boolean) => void;
  onGoHome: () => void;
}

const QuizPage3: React.FC<QuizPage3Props> = ({ onComplete, onGoHome }) => {
    const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const shuffledSteps = useMemo(() => [...steps].sort(() => Math.random() - 0.5), []);

    const handleSelect = (id: number) => {
        if (selectedOrder.length >= 4 || selectedOrder.includes(id) || isFinished) return;
        const newOrder = [...selectedOrder, id];
        setSelectedOrder(newOrder);

        if (newOrder.length === 4) {
            const correct = JSON.stringify(newOrder) === JSON.stringify(CORRECT_ORDER);
            setIsCorrect(correct);
            setIsFinished(true);
            onComplete(correct);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <QuizHeader 
                day={12} 
                category="순서 배열 훈련" 
                title="머리감는 과정을 순서대로 나열해 보세요." 
                onBack={onGoHome}
            />
            
            <div className="flex justify-center items-center space-x-2 md:space-x-4 my-6 h-20 md:h-24">
                {Array.from({ length: 4 }).map((_, index) => (
                    <React.Fragment key={index}>
                        <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 transition-colors ${selectedOrder[index] ? 'bg-[#D98BAA] border-[#A96586] text-white' : 'bg-pink-100 border-pink-200'}`}>
                            <span className="text-3xl font-bold">{selectedOrder[index]}</span>
                        </div>
                        {index < 3 && <div className="text-2xl text-pink-300 font-bold">&gt;</div>}
                    </React.Fragment>
                ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {shuffledSteps.map(step => (
                    <div
                        key={step.id}
                        onClick={() => handleSelect(step.id)}
                        className={`p-2 rounded-lg cursor-pointer transition-all duration-300 border-4 ${selectedOrder.includes(step.id) ? 'border-gray-400 opacity-50' : 'border-transparent hover:bg-pink-100'} ${isFinished && !selectedOrder.includes(step.id) ? 'opacity-50' : ''}`}
                    >
                        <div className={`rounded-lg overflow-hidden shadow-md ${isFinished && isCorrect ? 'ring-4 ring-green-500' : ''} ${isFinished && !isCorrect ? 'ring-4 ring-red-500' : ''}`}>
                            <img src={step.img} alt={step.text} className="w-full h-32 sm:h-40 object-cover" />
                            <div className="bg-[#A96586] text-white p-2 text-center">
                                <span className="font-bold text-base md:text-lg">{step.id}. {step.text}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizPage3;
