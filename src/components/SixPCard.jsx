import React from "react";

export default function SixPCard({ icon, label, value }) {
  return (
    <div className="bg-white p-5 rounded shadow text-center">
      <div className="text-xl mb-2 text-red-700">{icon}</div>
      <div className="text-2xl font-bold text-red-800">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}