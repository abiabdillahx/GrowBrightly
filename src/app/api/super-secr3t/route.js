export async function GET(request) {
  const url = new URL(request.url);
  const accessCode = url.searchParams.get('access'); 

  const validAccessCode = process.env.ACCESS_CODE;

  if (accessCode === validAccessCode) {
    const flag = process.env.FLAG;  
    const desc = process.env.DESC;
    return new Response(JSON.stringify({ desc, flag }, null, 2), { status: 200 });
  } else {
    return new Response('Unauthorized', { status: 403 });
  }
}