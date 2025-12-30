import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { OrderSchema } from "@/types/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate data with Zod
    const result = OrderSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid order data",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const orderData = result.data;

    // 2. Check for recent duplicates (Anti-Spam / Idempotency)
    // We check if an order with same phone exists created in last 2 minutes
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000).toISOString();
    const { data: recentOrders } = await supabase
      .from("orders")
      .select("id")
      .eq("phone", orderData.phone)
      .gt("created_at", twoMinutesAgo);

    if (recentOrders && recentOrders.length > 0) {
      return NextResponse.json(
        {
          error: "Duplicate order detected. Please wait before ordering again.",
        },
        { status: 429 }
      );
    }

    // 3. Insert into Supabase
    const { error: insertError } = await supabase.from("orders").insert([
      {
        order_id: orderData.order_id,
        name: orderData.name,
        phone: orderData.phone,
        area: orderData.area,
        address: orderData.address,
        items: orderData.items, // JSONB
        subtotal: orderData.subtotal,
        delivery_fee: orderData.delivery_fee,
        total: orderData.total,
        status: "pending", // Force status to pending on create
        payment_method: orderData.payment_method,
      },
    ]);

    if (insertError) {
      console.error("Supabase Write Error:", insertError);
      return NextResponse.json(
        { error: "Failed to save order. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, orderId: orderData.order_id });
  } catch (err) {
    console.error("Order API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple protection: Check for session?
  // Ideally this should be protected by Middleware, but RLS also protects the data.
  // If we try to fetch with anon key and no session, RLS 'select' policy will return empty or error if configured to 'authenticated' only.

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
