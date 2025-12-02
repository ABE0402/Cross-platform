
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
    // Store results as a map: { 'quiz1': true(correct), 'quiz2': false(incorrect) }
    const [quizResults, setQuizResults] = useState<Record<string, boolean>>({});

    const handleStart = (targetPage: Page) => {
        setPage(targetPage);
    };

    const handleQuizComplete = useCallback((isCorrect: boolean) => {
        // Record the result (correct or incorrect)
        setQuizResults(prev => ({
            ...prev,
            [page]: isCorrect
        }));

        // Always go back to the menu after a short delay
        setTimeout(() => {
            setPage('start');
        }, 1500); 
    }, [page]);

    const handleViewResults = () => {
        setPage('results');
    };

    const handleGoHome = () => {
        setPage('start');
    };

    const handleFullReset = () => {
        setQuizResults({});
        setPage('start');
    };

    // Calculate derived state
    const completedQuizzes = Object.keys(quizResults) as Page[];
    const score = Object.values(quizResults).filter(result => result === true).length;
    const allCompleted = completedQuizzes.length >= TOTAL_QUESTIONS;

    const renderPage = () => {
        switch (page) {
            case 'start':
                return (
                    <StartPage 
                        onStart={handleStart} 
                        completedQuizzes={completedQuizzes}
                        onViewResults={handleViewResults}
                        allCompleted={allCompleted}
                    />
                );
            case 'quiz1':
                return <QuizPage1 onComplete={handleQuizComplete} onGoHome={handleGoHome} />;
            case 'quiz2':
                return <QuizPage2 onComplete={handleQuizComplete} onGoHome={handleGoHome} />;
            case 'quiz3':
                return <QuizPage3 onComplete={handleQuizComplete} onGoHome={handleGoHome} />;
            case 'memory':
                return <MemoryPage onComplete={handleQuizComplete} onGoHome={handleGoHome} />;
            case 'results':
                return <ResultPage score={score} totalQuestions={TOTAL_QUESTIONS} onRestart={handleFullReset} />;
            default:
                return (
                    <StartPage 
                        onStart={handleStart} 
                        completedQuizzes={completedQuizzes}
                        onViewResults={handleViewResults}
                        allCompleted={allCompleted}
                    />
                );
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
