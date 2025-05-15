// src/app/api/analyze-stunting/route.js

import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config'; // Load environment variables

// error handle
export function GET() {
  return new Response(
    JSON.stringify({
      message: 'Method Not Allowed',
      hint: 'Use POST instead',
    }),
    {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(request) {
  try {
    const { weight, height, age, gender, birthWeight, isPremature, feedingFrequency, breastfeedingPattern, domisili, currency, incomePerMonth, kiaInformation, muac, headCircumference } = await request.json();

    if (!weight || !height || !age) {
      return new Response(JSON.stringify({ error: 'Data tidak lengkap.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `Analyze the stunting status of a child with the following data:
      Weight: ${weight} kg
      Height: ${height} cm
      Age: ${age} months
      Gender: ${gender}
      Birth weight: ${birthWeight} grams
      History of prematurity: ${isPremature} (yes/no)
      Daily feeding frequency: ${feedingFrequency} times
      Breastfeeding pattern (for infants < 6 months): ${breastfeedingPattern} (Exclusive/Mixed)
      Domicile: ${domisili}
      Monthly income: ${incomePerMonth} ${currency}

      (Optional)
      Upper Arm Circumference (MUAC): ${muac} cm
      Head Circumference: ${headCircumference} cm

      Provide **only** the output in JSON format like this, without any explanation or other opening/closing sentences:
      {
      "status": "...(Yes/No)",
      "tingkat_keparahan": "...",
      "negara_asal": "...",
      "saran_menu": [
          {
            "nama": "...",
            "deskripsi": "...",
            "harga": ...,
            "reason": "...",
            "cara_memasak": "...", (with newline with per number)
            "ingredients": "how to cook it..." (with newline with per number)
          },
          {
            "nama": "...",
            "deskripsi": "...",
            "harga": ...,
            "reason": "...",
            "cara_memasak": "...",
            "ingredients": "how to cook it..."()
          },
          // ... (other menu suggestion items)
          ],
      "analisa_ai": "...",
      "rekomendasi_dokter": "...(Yes/No)",
      "additional_solution": "another solution in points...)"(with newline)
      }
      **But**, if you think the provided data is not make sense (like, 2 months kid with hundreds kg weight or something, just give me the 'status' and 'tingkat_keparahan' in english that says the provided data is not make sense).
      Also provide a price for the menu suggestion provided. Don't forget, just use english.
      In the menu suggestion, display nutritional suggestions that support growth, adjusted to the child's condition. Adjust the menu to income (the menu must be standard even if the income is relatively too low) and the child's country of origin. The price you provide must also be adjusted to the currency provided, not according to the country of domicile. For each menu, also include a simple step-by-step cooking tutorial (key: cara_memasak) and a summarized recipe (key: resep) based on local ingredients. Please make it step by step and comprehensive.
      In the analysis_ai section, provide an in-depth explanation of why the child is stunted or not (Generate a convincing statement : "After analysis, the child is stunted or not stunted."), considering all the data provided (including birth weight, history of prematurity, feeding frequency, and breastfeeding pattern). How much weight and height should the child (with that age and gender) have. Also include considerations about whether the data on upper arm circumference and head circumference (if available) support or not the diagnosis of stunting. Provide a recommendation of "Yes" in the "doctor_recommendation" key if there is a strong indication of stunting or risk factors that require further examination.
      `;

    const result = await model.generateContent({
      contents: [{ parts: [{ text: prompt }] }],
    });

    let response = await result.response.text();
    console.log('Respon mentah dari Gemini:', response);

    // Bersihkan respon dari ```json dan ```
    response = response.replace('```json', '').replace('```', '').trim();

    try {
      const parsedResponse = JSON.parse(response);
      return new Response(JSON.stringify(parsedResponse), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Gagal mem-parse respon JSON dari Gemini:', error);
      return new Response(JSON.stringify({ error: 'Gagal memproses respon dari Gemini.', details: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error saat memanggil Gemini API:', error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan saat memproses permintaan.', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}