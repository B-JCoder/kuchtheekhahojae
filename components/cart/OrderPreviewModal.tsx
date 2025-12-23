import Image from "next/image";
import { Button } from "../ui/Button";

export const OrderPreviewModal = ({ order, onConfirm, onClose }: any) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 text-black shadow-2xl">
        {/* 🔰 Top Center Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/3dlogobgre.png"
            alt="Logo"
            width={80}
            height={80}
            className="drop-shadow-xl"
          />
        </div>

        <h2 className="text-xl font-bold text-center mb-4">
          Confirm Your Order
        </h2>

        {/* User Info */}
        <div className="text-sm space-y-2">
          <p>
            <strong>Name:</strong> {order.name}
          </p>
          <p>
            <strong>Phone:</strong> {order.phone}
          </p>
          <p>
            <strong>Area:</strong> {order.area}
          </p>
          <p>
            <strong>Address:</strong> {order.address}
          </p>
        </div>

        {/* Items */}
        <div className="border-t mt-4 pt-3 text-sm space-y-1">
          {order.items.map((i: any) => (
            <p key={i.id} className="text-red-600 font-medium">
              • {i.name} × {i.quantity} — Rs. {i.price * i.quantity}
            </p>
          ))}
        </div>

        {/* Total */}
        <div className="border-t mt-4 pt-3 font-bold text-lg">
          Total: Rs. {order.total}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          <Button fullWidth variant="outline" onClick={onClose}>
            Edit
          </Button>

          <Button
            fullWidth
            onClick={onConfirm}
            className="bg-green-600 text-white py-6 hover:bg-green-700 shadow-md"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
