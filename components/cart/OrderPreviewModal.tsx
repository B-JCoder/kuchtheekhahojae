import Image from "next/image";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export const OrderPreviewModal = ({
  order,
  onConfirm,
  onClose,
  isLoading = false,
}: any) => {
  if (!order) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-[110] flex items-center justify-center px-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-[2rem] max-w-md w-full p-8 text-black shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        {/* 🔰 Top Center Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/3dlogobgre.png"
            alt="Logo"
            width={70}
            height={70}
            className="drop-shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-black text-center mb-6 text-brand-dark">
          Confirm Your Order
        </h2>

        {/* User Info */}
        <div className="bg-gray-50 rounded-2xl p-5 space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">Name</span>
            <span className="text-brand-dark font-bold">{order.name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">Phone</span>
            <span className="text-brand-dark font-bold">{order.phone}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">Address</span>
            <span className="text-brand-dark font-bold text-right max-w-[180px] line-clamp-2">
              {order.address}
            </span>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-2 mb-6 max-h-[120px] overflow-y-auto pr-2 custom-scrollbar">
          {order.items.map((i: any) => (
            <div
              key={i.id}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-gray-600">
                <span className="text-brand-red font-bold">{i.quantity}x</span>{" "}
                {i.name}
              </span>
              <span className="font-bold text-brand-dark">
                Rs. {i.price * i.quantity}
              </span>
            </div>
          ))}
        </div>

        {/* Total Amount */}
        <div className="border-t border-dashed pt-4 flex justify-between items-center mb-8">
          <span className="text-gray-500 font-bold">Total Amount</span>
          <span className="text-2xl font-black text-brand-red">
            Rs. {order.total}
          </span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            fullWidth
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            className="rounded-2xl border-gray-200 text-gray-500 h-16 font-bold hover:bg-gray-50"
          >
            Edit
          </Button>

          <motion.div whileTap={{ scale: 0.97 }} className="w-full">
            <Button
              fullWidth
              onClick={onConfirm}
              isLoading={isLoading}
              className="bg-brand-green text-white h-16 rounded-2xl shadow-xl shadow-green-100 font-black text-lg hover:bg-green-700 transition-all border-none"
            >
              Confirm
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
