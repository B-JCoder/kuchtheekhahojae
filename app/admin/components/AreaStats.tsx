export default function AreaStats({ orders }: { orders: any[] }) {
  const areaMap: Record<string, number> = {};
  orders.forEach((o) => {
    if (!areaMap[o.area]) areaMap[o.area] = 0;
    areaMap[o.area] += o.total;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {Object.entries(areaMap).map(([area, revenue]) => (
        <div
          key={area}
          className="bg-white border rounded-xl p-4 shadow-sm flex justify-between"
        >
          <span className="font-semibold">{area}</span>
          <span className="font-bold">Rs. {revenue}</span>
        </div>
      ))}
    </div>
  );
}
