export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method === "POST") {
    console.log("✅ Accepted!"); // shows in Vercel Logs
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response("Method Not Allowed", { status: 405 });
}
