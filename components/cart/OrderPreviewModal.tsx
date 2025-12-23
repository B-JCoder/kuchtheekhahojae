import { Button } from "../ui/Button";

export const OrderPreviewModal = ({ order, onConfirm, onClose }: any) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4">
        <h2 className="text-xl font-bold">Confirm Your Order</h2>

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

        <div className="border-t pt-3 text-sm">
          {order.items.map((i: any) => (
            <p key={i.id}>
              • {i.name} x {i.quantity} — Rs. {i.price * i.quantity}
            </p>
          ))}
        </div>

        <div className="border-t pt-3 font-bold">Total: Rs. {order.total}</div>

        <div className="flex gap-3">
          <Button fullWidth variant="outline" onClick={onClose}>
            Edit
          </Button>
          <Button
            fullWidth
            onClick={onConfirm}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Confirm & WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
