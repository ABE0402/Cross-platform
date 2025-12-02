
import { GoogleGenAI } from "@google/genai";

export const getEncouragementMessage = async (score: number, totalQuestions: number): Promise<string> => {
    try {
        if (!process.env.API_KEY) {
            console.warn("API_KEY environment variable not set. Using fallback message.");
            return "훌륭해요! 꾸준한 두뇌 활동은 건강에 큰 도움이 됩니다. 다시 한 번 도전해보세요!";
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `You are a friendly and encouraging assistant for an elderly person using a brain-training app. Their score is ${score} out of ${totalQuestions}. Write a short, positive, and encouraging message for them in Korean. Keep it simple, warm, and under 3 sentences.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error fetching encouragement message from Gemini:", error);
        return "수고하셨습니다! 다음 퀴즈도 기대해주세요.";
    }
};
