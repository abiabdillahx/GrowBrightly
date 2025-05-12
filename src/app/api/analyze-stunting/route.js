// src/app/api/analyze-stunting/route.js

import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config'; // Load environment variables

export async function POST(request) {
  try {
    const { weight, height, age, gender } = await request.json();

    if (!weight || !height || !age) {
      return new Response(JSON.stringify({ error: 'Data tidak lengkap.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `Analisis status stunting seorang anak dengan data berikut:
Berat badan: ${weight} kg
Tinggi badan: ${height} cm
Usia: ${age} bulan
Jenis Kelamin: ${gender}

Berikan **hanya** output dalam format JSON seperti ini, tanpa ada penjelasan atau kalimat pembuka/penutup lainnya:
{
  "status": "...(Iya/Tidak)",
  "tingkat_keparahan": "...",
  "saran_menu": [...],
  "analisa_ai": "..."
}
  Pada bagian analisa_ai, berikan penjelasan mendalam mengapa anak tersebut termasuk stunting atau tidak. Seharusnya anak tersebut (dengan usia dan gender demikian) memiliki berat dan tinggi berapa
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