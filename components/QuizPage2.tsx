
import React, { useState } from 'react';
import QuizHeader from './QuizHeader';
import { CircleIcon, TriangleIcon, SquareIcon, DiamondIcon } from './icons';

const gridShapes = [
    [<SquareIcon />, <CircleIcon />, <DiamondIcon />, <TriangleIcon />],
    [<TriangleIcon />, <TriangleIcon />, <SquareIcon />, <DiamondIcon />],
    [<DiamondIcon />, <SquareIcon />, <DiamondIcon />, <CircleIcon />],
    [<SquareIcon />, <TriangleIcon />, <DiamondIcon />, <TriangleIcon />],
    [<DiamondIcon />, <CircleIcon />, <SquareIcon />, <CircleIcon />]
];

const CORRECT_COLUMN_INDEX = 1;

interface QuizPage2Props {
  onComplete: (isCorrect: boolean) => void;
}

const QuizPage2: React.FC<QuizPage2Props> = ({ onComplete }) => {
    const [selection, setSelection] = useState<{index: number, isCorrect: boolean} | null>(null);

    const handleSelect = (index: number) => {
        if (selection) return;
        const isCorrect = index === CORRECT_COLUMN_INDEX;
        setSelection({ index, isCorrect });
        onComplete(isCorrect);
    };

    const getBorderColor = (index: number) => {
        if (!selection) return 'border-transparent';
        if (selection.index !== index) return 'border-transparent';
        return selection.isCorrect ? 'border-green-500' : 'border-red-500';
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <QuizHeader day={12} title="예시와 똑같은 모양을 찾아보세요." subtitle="동그라미와 세모의 순서가 같아야 합니다." />
            
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-6">
                <div className="bg-[#D98BAA] p-4 rounded-lg flex flex-col items-center gap-2 shadow-inner">
                    <span className="text-white font-bold mb-2">예시</span>
                    <CircleIcon />
                    <TriangleIcon />
                </div>
                <div className="flex flex-1 border-t-2 border-b-2 border-gray-300 py-2">
                    <div className="grid grid-cols-4 gap-2 md:gap-4 w-full">
                        {Array.from({ length: 4 }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                onClick={() => handleSelect(colIndex)}
                                className={`flex flex-col items-center gap-2 md:gap-4 p-2 rounded-lg cursor-pointer transition-all duration-300 border-4 ${getBorderColor(colIndex)} ${selection ? '' : 'hover:bg-pink-100'}`}
                            >
                                {gridShapes.map((row, rowIndex) => (
                                    <div key={rowIndex} className="flex justify-center items-center h-16 md:h-20">
                                        {row[colIndex]}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPage2;
