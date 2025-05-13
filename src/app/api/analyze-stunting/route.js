// src/app/api/analyze-stunting/route.js

import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config'; // Load environment variables

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

    const prompt = `Analisis status stunting seorang anak dengan data berikut:
      Berat badan: ${weight} kg
      Tinggi badan: ${height} cm
      Usia: ${age} bulan
      Jenis Kelamin: ${gender}
      Berat lahir: ${birthWeight} gram
      Riwayat premature: ${isPremature} (ya/tidak)
      Frekuensi makan per hari: ${feedingFrequency} kali
      Pola ASI (untuk bayi < 6 bulan): ${breastfeedingPattern} (Eksklusif/Campuran)
      Informasi dari buku KIA: ${kiaInformation}
      Domisili: ${domisili}
      Pendapatan bulanan: ${incomePerMonth} ${currency}

      (Opsional)
      Lingkar Lengan Atas (MUAC): ${muac} cm
      Lingkar Kepala: ${headCircumference} cm

      Berikan **hanya** output dalam format JSON seperti ini, tanpa ada penjelasan atau kalimat pembuka/penutup lainnya:
      {
        "status": "...(Iya/Tidak)",
        "tingkat_keparahan": "...",
        "negara_asal": "...",
        "saran_menu": [
          {
            "nama": "...",
            "deskripsi": "...",
            "harga": ...,
            "alasan": "..."
          },
          {
            "nama": "...",
            "deskripsi": "...",
            "harga": ...,
            "alasan": "..."
          },
          // ... (item saran menu lainnya)
        ],
        "analisa_ai": "...",
        "rekomendasi_dokter": "...(Ya/Tidak)"
      }
      Berikan juga harga pada saran_menu yg diberikan.
      Pada saran_menu, tampilkan saran nutrisi bergizi yang menunjang pertumbuhan, disesuaikan dengan kondisi anak. sesuaikan menu dengan pendapatan (menu harus standar walaupun pendapatan relative terlalu rendah) dan negara asal anak. Harga yang anda berikan juga harus disesuaikan dengan currency yang diberikan, bukan sesuai domisili negara.
      Pada bagian analisa_ai, berikan penjelasan mendalam mengapa anak tersebut termasuk stunting atau tidak, dengan mempertimbangkan semua data yang diberikan (termasuk berat lahir, riwayat premature, frekuensi makan, dan pola ASI). Seharusnya anak tersebut (dengan usia dan gender demikian) memiliki berat dan tinggi berapa. Sertakan juga pertimbangan apakah data lingkar lengan atas dan lingkar kepala (jika tersedia) mendukung atau tidak diagnosis stunting. Berikan rekomendasi "Ya" pada kunci "rekomendasi_dokter" jika ada indikasi kuat stunting atau faktor risiko yang memerlukan pemeriksaan lebih lanjut.
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