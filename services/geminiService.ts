
import { GoogleGenAI, Type } from "@google/genai";
import { EvidenceRecord } from "../types";

const API_KEY_ERROR_MESSAGE = "Google API key is required to use this feature. Please set GEMINI_API_KEY in your .env.local file.";

const checkApiKey = (): string | null => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here' || apiKey.trim() === '') {
    return null;
  }
  return apiKey;
};

export const analyzeAuditLogs = async (logs: EvidenceRecord[]) => {
  const apiKey = checkApiKey();
  if (!apiKey) {
    throw new Error(API_KEY_ERROR_MESSAGE);
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Analyze the following compliance evidence records from a medical device production facility.
    Provide a concise summary for an auditor highlighting:
    1. Overall traceability health.
    2. Any potential gaps or anomalies in the timestamp sequences.
    3. Consistency of SOP versions used.
    
    Data: ${JSON.stringify(logs)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "No summary available.";
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return "Failed to generate compliance summary.";
  }
};

export const suggestMitigation = async (alertTitle: string, alertDesc: string) => {
  const apiKey = checkApiKey();
  if (!apiKey) {
    throw new Error(API_KEY_ERROR_MESSAGE);
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The following compliance alert was triggered in a medical device facility:
        Title: ${alertTitle}
        Description: ${alertDesc}
        
        Suggest 3 immediate corrective actions based on ISO 13485 standards. Keep it professional and direct.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["suggestions"]
        }
      }
    });

    return JSON.parse(response.text).suggestions;
  } catch (error) {
    console.error("AI Mitigation suggestion failed:", error);
    throw error;
  }
};
