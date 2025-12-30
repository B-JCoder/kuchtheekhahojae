import { z } from "zod";

// --- Zod Schemas ---

export const CartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
  image: z.string().optional(),
});

export const OrderSchema = z.object({
  // We don't validate 'id' or 'created_at' for input, as they are generated server/db side
  order_id: z.string(), // Custom ID ORD-xxxx
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^03\d{9}$/, "Invalid Pakistani phone number"),
  area: z.string().min(1, "Area is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  items: z.array(CartItemSchema).min(1, "Order must have at least one item"),
  subtotal: z.number().min(0),
  delivery_fee: z.number().min(0),
  total: z.number().min(0),
  status: z
    .enum(["pending", "processing", "completed", "cancelled"])
    .default("pending"),
  payment_method: z.string().default("COD"),
});

// --- TypeScript Types ---

export type CartItem = z.infer<typeof CartItemSchema>;
export type OrderInput = z.infer<typeof OrderSchema>;

export interface Order extends OrderInput {
  id: string; // UUID from Supabase
  created_at: string;
  updated_at: string;
}

export type OrderStatus = Order["status"];
