
import { GoogleGenAI, Type } from "@google/genai";
import { EvidenceRecord } from "../types";

export const analyzeAuditLogs = async (logs: EvidenceRecord[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
};
