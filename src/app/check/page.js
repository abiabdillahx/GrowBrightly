'use client'; // Ini penting untuk komponen yang interaktif
import Head from 'next/head';
import { useState } from 'react';

export default function Stuntcheck() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [birthWeight, setBirthWeight] = useState('');
  const [isPremature, setIsPremature] = useState('');
  const [feedingFrequency, setFeedingFrequency] = useState('');
  const [breastfeedingPattern, setBreastfeedingPattern] = useState('');
  const [kiaInformation, setKiaInformation] = useState(''); // Tambahan untuk informasi buku KIA
  const [muac, setMuac] = useState(''); // Opsional
  const [headCircumference, setHeadCircumference] = useState(''); // Opsional
  const [domisili, setDomisili] = useState('');
  const [incomePerMonth, setIncomePerMonth] = useState(''); // State untuk pendapatan bulanan
  const [currency, setCurrency] = useState('IDR'); // State untuk mata uang, default IDR
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    const payload = {
      weight,
      height,
      age,
      gender,
      birthWeight,
      isPremature,
      feedingFrequency,
      breastfeedingPattern,
      kiaInformation,
      muac: muac || undefined, // Sertakan jika tidak kosong
      headCircumference: headCircumference || undefined, // Sertakan jika tidak kosong
      domisili,
      incomePerMonth,
      currency,
    };

    try {
      const response = await fetch('/api/analyze-stunting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
      <div className="p-8 flex justify-center bg-gray-100 min-h-screen"> {/* Container utama di tengah */}
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-5xl"> {/* Container form & hasil */}
          <h1 className="text-3xl font-bold mb-6 text-center text-emerald-600">Deteksi Stunting pada Anak</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Layout form menggunakan Grid */}
            <div className="space-y-2">
              <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-1">Berat Badan (kg):</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-1">Tinggi Badan (cm):</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-1">Usia (bulan):</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-1">Jenis Kelamin:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- Pilih --</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="birthWeight" className="block text-gray-700 text-sm font-bold mb-1">Berat Lahir (gram):</label>
              <input
                type="number"
                id="birthWeight"
                value={birthWeight}
                onChange={(e) => setBirthWeight(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="isPremature" className="block text-gray-700 text-sm font-bold mb-1">Riwayat Prematur (lahir &lt; 37 minggu):</label>
              <select
                id="isPremature"
                value={isPremature}
                onChange={(e) => setIsPremature(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- Pilih --</option>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="feedingFrequency" className="block text-gray-700 text-sm font-bold mb-1">Frekuensi Makan/Hari:</label>
              <input
                type="number"
                id="feedingFrequency"
                value={feedingFrequency}
                onChange={(e) => setFeedingFrequency(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="breastfeedingPattern" className="block text-gray-700 text-sm font-bold mb-1">Pola ASI (bayi &lt; 6 bulan):</label>
              <select
                id="breastfeedingPattern"
                value={breastfeedingPattern}
                onChange={(e) => setBreastfeedingPattern(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- Pilih --</option>
                <option value="Eksklusif">Eksklusif</option>
                <option value="Campuran">Campuran</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="domisili" className="block text-gray-700 text-sm font-bold mb-1">Domisili:</label>
              <input
                type="text"
                id="domisili"
                value={domisili}
                onChange={(e) => setDomisili(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="incomePerMonth" className="block text-gray-700 text-sm font-bold mb-1">Pendapatan Bulanan:</label>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="number"
                  id="incomePerMonth"
                  value={incomePerMonth}
                  onChange={(e) => setIncomePerMonth(e.target.value)}
                  className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="shadow appearance-none border rounded-r py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="IDR">IDR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  {/* Tambahkan opsi mata uang lain sesuai kebutuhan */}
                </select>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-2">
              <label htmlFor="kiaInformation" className="block text-gray-700 text-sm font-bold mb-1">Informasi Buku KIA:</label>
              <textarea
                id="kiaInformation"
                value={kiaInformation}
                onChange={(e) => setKiaInformation(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Informasi tambahan dari buku KIA (opsional)"
                rows="3"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="muac" className="block text-gray-700 text-sm font-bold mb-1">Lingkar Lengan Atas (MUAC) (cm) - Opsional:</label>
              <input
                type="number"
                id="muac"
                value={muac}
                onChange={(e) => setMuac(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="headCircumference" className="block text-gray-700 text-sm font-bold mb-1">Lingkar Kepala (cm) - Opsional:</label>
              <input
                type="number"
                id="headCircumference"
                value={headCircumference}
                onChange={(e) => setHeadCircumference(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                {loading ? 'Menganalisis...' : 'Analisis'}
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {result && (
            <div className="mt-8 p-6 border rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-4 text-emerald-600">Hasil Analisis</h2>
              <p>Status Stunting: <span className="font-semibold">{result.status}</span></p>
              <p>Tingkat Keparahan: <span className="font-semibold">{result.tingkat_keparahan}</span></p>
              {result.saran_menu && result.saran_menu.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold mb-2 text-gray-800">Saran Menu:</h3>
                  <ul>
                    {result.saran_menu.map((menuItem, index) => (
                      <li key={index} className="mb-3 p-3 border rounded-md bg-gray-50">
                        <h4 className="font-semibold text-emerald-500">{menuItem.nama} ({currency} {menuItem.harga})</h4>
                        <p className="text-gray-700 text-sm italic">{menuItem.deskripsi}</p>
                        <p className="text-gray-600 text-xs mt-1">Alasan: {menuItem.alasan}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4">
                <p className='font-bold text-gray-800'>Analisa AI: <br/>
                  <span className='font-normal text-gray-700'>
                    {result.analisa_ai}
                  </span>
                </p>
              </div>
              {result.rekomendasi_dokter && (
                <p className="font-semibold text-orange-600 mt-2">Rekomendasi Dokter: {result.rekomendasi_dokter}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}