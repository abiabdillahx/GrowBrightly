// src/app/api/validate-access/route.js
export async function POST(request) {
  const { access } = await request.json();
  if (access === process.env.ACCESS_CODE) {
    return new Response(JSON.stringify({ authorized: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ authorized: false }), { status: 401 });
  }
}
