'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

export default function SecretPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RealSecretPage />
    </Suspense>
  );
}
function RealSecretPage() {
  const params = useSearchParams();
  const [accessCode, setAccessCode] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const code = params.get('access');
    setAccessCode(code);

    if (code) {
      fetch('/api/validate-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access: code }),
      })
        .then(res => res.json())
        .then(data => setIsAuthorized(data.authorized))
        .catch(() => setIsAuthorized(false));
    }
  }, [params]);

  if (accessCode === null) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4 text-gray-600">
          The gate remains closed. Only those who know the <code>access</code> keyword may enter. 🔐
        </p>
      </main>
    );
  }

  if (isAuthorized === null) {
    return <p className="p-4">Checking access...</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-green-700">
        {isAuthorized ? 'Welcome, Agent.' : 'Almost there...'}
      </h1>
      <p className="mt-4 text-gray-600">
        {isAuthorized
          ? 'Go to the API and claim your reward.'
          : 'Keep digging, try checking the API... maybe you missed a parameter? 🔍'}
      </p>
    </main>
  );
}
