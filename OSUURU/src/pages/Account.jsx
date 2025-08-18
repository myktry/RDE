export default function Account() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Account</h1>
      <div className="grid max-w-xl gap-4">
        <label className="grid gap-1">
          <span className="text-sm text-neutral-600">Full name</span>
          <input className="rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="John Henry Talite" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-neutral-600">Email</span>
          <input className="rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="john@example.com" />
        </label>
        <button className="w-fit rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">Save</button>
      </div>
    </div>
  )
}


