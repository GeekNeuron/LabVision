// File: /api/interpret.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { labText, gender, lang } = req.body;
        const apiKey = process.env.GEMINI_API_KEY; // خواندن کلید از متغیرهای محیطی امن

        if (!apiKey) {
            throw new Error("API key is not configured.");
        }
        if (!labText) {
            return res.status(400).json({ error: 'Lab text is required.' });
        }
        
        const prompt = `
            You are a helpful medical assistant named LabVision. Your task is to interpret the following lab results for a user.
            The user's gender is: ${gender}.
            The desired language for the explanation is: ${lang === 'fa' ? 'Persian (Farsi)' : 'English'}.

            Here are the lab results:
            ---
            ${labText}
            ---

            Please provide a response in a valid JSON format. The JSON object must have two keys: "summary" and "details".
            1. "summary": A brief, one or two-sentence overall summary of the results in simple terms.
            2. "details": An array of objects, where each object represents a single test result and has the following keys:
               - "testName": The name of the test.
               - "value": The user's value as a string (e.g., "14.5 g/dL").
               - "status": A simple status like "Normal", "High", "Low", "Borderline".
               - "interpretation": A clear, simple explanation of what this test means and what the result indicates, in the requested language.

            IMPORTANT: Start your response with "⚠️ Disclaimer: This is an AI-generated interpretation for educational purposes and is not a substitute for professional medical advice." in the requested language.
            Analyze each item provided by the user.
        `;

        const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                 generationConfig: {
                    responseMimeType: "application/json",
                }
            }),
        });
        
        if (!apiResponse.ok) {
            const error = await apiResponse.json();
            throw new Error(error.error.message);
        }

        const responseData = await apiResponse.json();
        const aiResponseText = responseData.candidates[0].content.parts[0].text;
        
        // Return the structured JSON from the AI
        res.status(200).json(JSON.parse(aiResponseText));

    } catch (error) {
        console.error('Error calling Gemini API:', error);
        res.status(500).json({ error: 'Failed to interpret results. ' + error.message });
    }
}
