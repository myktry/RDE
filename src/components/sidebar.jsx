// File: src/components/Sidebar.jsx

<div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
  <Sidebar className="hidden md:block w-full md:w-64" />
  ...
</div>

export default function Sidebar() {
  return (
    <aside className="w-64 bg-red-900 text-white p-5 space-y-4 fixed h-full">
      <h1 className="text-lg font-bold">📊 Statistics</h1>
      <button className="block hover:text-yellow-300">Proposals</button>
      <button className="block hover:text-yellow-300">Account</button>
    </aside>
  );
}