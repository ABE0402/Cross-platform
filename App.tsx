
import React, { useState, useCallback } from 'react';
import type { Page } from './types';
import StartPage from './components/StartPage';
import QuizPage1 from './components/QuizPage1';
import QuizPage2 from './components/QuizPage2';
import QuizPage3 from './components/QuizPage3';
import MemoryPage from './components/MemoryPage';
import ResultPage from './components/ResultPage';

const TOTAL_QUESTIONS = 4;

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('start');
    const [score, setScore] = useState(0);

    const handleStart = () => {
        setScore(0);
        setPage('quiz1');
    };

    const handleQuizComplete = useCallback((isCorrect: boolean) => {
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            setPage(currentPage => {
                switch (currentPage) {
                    case 'quiz1': return 'quiz2';
                    case 'quiz2': return 'quiz3';
                    case 'quiz3': return 'memory';
                    case 'memory': return 'results';
                    default: return 'results';
                }
            });
        }, 1500); // Wait 1.5s to show feedback before moving on
    }, []);

    const handleRestart = () => {
        setPage('start');
    };

    const renderPage = () => {
        switch (page) {
            case 'start':
                return <StartPage onStart={handleStart} />;
            case 'quiz1':
                return <QuizPage1 onComplete={handleQuizComplete} />;
            case 'quiz2':
                return <QuizPage2 onComplete={handleQuizComplete} />;
            case 'quiz3':
                return <QuizPage3 onComplete={handleQuizComplete} />;
            case 'memory':
                return <MemoryPage onComplete={handleQuizComplete} />;
            case 'results':
                return <ResultPage score={score} totalQuestions={TOTAL_QUESTIONS} onRestart={handleRestart} />;
            default:
                return <StartPage onStart={handleStart} />;
        }
    };

    return (
        <div className="bg-[#FDF6F6] min-h-screen flex items-center justify-center p-4 font-sans antialiased">
            <main className="container mx-auto max-w-2xl lg:max-w-3xl">
                {renderPage()}
            </main>
        </div>
    );
};

export default App;
