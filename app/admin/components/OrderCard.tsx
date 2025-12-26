export default function OrderCard({ order }: { order: any }) {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-black">🧾 {order.orderId}</h3>
        <span
          className={`text-sm font-bold ${
            order.status === "pending" ? "text-orange-600" : "text-green-600"
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="mt-3 text-sm space-y-1 text-black">
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
        <p>
          <strong>Payment:</strong> {order.paymentMethod}
        </p>
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="font-bold text-lg text-black">Total: Rs. {order.total}</p>
      </div>
    </div>
  );
}
