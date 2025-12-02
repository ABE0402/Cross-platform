
import React, { useState } from 'react';
import QuizHeader from './QuizHeader';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1535532230282-3d1d3224de56?q=80&w=600&auto=format&fit=crop', alt: '기차역' },
    { id: 2, src: 'https://images.unsplash.com/photo-1582172284920-f49514d48a27?q=80&w=600&auto=format&fit=crop', alt: '댐' },
    { id: 3, src: 'https://images.unsplash.com/photo-1533616688484-4b4a693248c9?q=80&w=600&auto=format&fit=crop', alt: '꽃집' },
    { id: 4, src: 'https://images.unsplash.com/photo-1605057134416-2f3b9a7d3f8a?q=80&w=600&auto=format&fit=crop', alt: '우체국' },
];
const CORRECT_ANSWER_ID = 4;

interface QuizPage1Props {
  onComplete: (isCorrect: boolean) => void;
}

const QuizPage1: React.FC<QuizPage1Props> = ({ onComplete }) => {
    const [selection, setSelection] = useState<{id: number, isCorrect: boolean} | null>(null);

    const handleSelect = (id: number) => {
        if (selection) return;
        const isCorrect = id === CORRECT_ANSWER_ID;
        setSelection({ id, isCorrect });
        onComplete(isCorrect);
    };

    const getBorderColor = (id: number) => {
        if (!selection) return 'border-transparent';
        if (selection.id !== id) return 'border-transparent';
        return selection.isCorrect ? 'border-green-500' : 'border-red-500';
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <QuizHeader day={12} title="편지를 보내려면 어디로 가야 할까요?" subtitle="아래 사진 중에서 정답을 골라보세요." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        onClick={() => handleSelect(image.id)}
                        className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-4 ${getBorderColor(image.id)} ${selection ? 'opacity-70' : 'hover:scale-105'}`}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                        <div className="absolute bottom-0 left-0 bg-[#A96586] text-white px-3 py-1 rounded-tr-lg">
                            <span className="font-bold text-lg">{image.id}. {image.alt}</span>
                        </div>
                         {selection && selection.id === image.id && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <span className="text-white text-5xl font-bold">{selection.isCorrect ? 'O' : 'X'}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizPage1;
