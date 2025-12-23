import { NextResponse } from "next/server";

let ORDERS: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.orderId || !body.phone || !body.items?.length) {
    return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
  }

  // Anti-duplicate protection
  const recent = ORDERS.find(
    (o) => o.phone === body.phone && Date.now() - o.timestamp < 120000
  );

  if (recent) {
    return NextResponse.json(
      { error: "Duplicate order detected" },
      { status: 429 }
    );
  }

  ORDERS.unshift({
    ...body,
    status: "NEW",
    timestamp: Date.now(),
  });

  return NextResponse.json({ success: true });
}

// ✅ ADD THIS
export async function GET() {
  return NextResponse.json(ORDERS);
}
