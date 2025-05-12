// src/app/page.js
'use client'; // Ini penting untuk komponen yang interaktif
import Head from 'next/head';
import { useState } from 'react';

export default function Stuntcheck() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/analyze-stunting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weight, height, age }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Terjadi kesalahan saat mengirim data.');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>StuntCheck</title>
    </Head>
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Deteksi Stunting pada Anak</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4 border rounded px-20 py-5">
        <div>
          <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Berat Badan (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Tinggi Badan (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Usia (bulan):</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Jenis Kelamin:</label>
            <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
                <option value="">-- Pilih Jenis Kelamin --</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
            </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Menganalisis...' : 'Analisis'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {result && (
        <div className="mt-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">Hasil Analisis</h2>
          <p>Status Stunting: <span className="font-semibold">{result.status}</span></p>
          <p>Tingkat Keparahan: <span className="font-semibold">{result.tingkat_keparahan}</span></p>
          {result.saran_menu && result.saran_menu.length > 0 && (
            <div>
              <h3 className="font-bold mt-4 mb-2">Saran Menu:</h3>
              <ul className="list-disc pl-5">
                {result.saran_menu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            <p className='font-bold'>Analisa AI: 
                <div className='font-normal'>
                    {result.analisa_ai}
                </div>
            </p>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
}