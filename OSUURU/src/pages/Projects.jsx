export default function Projects() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="text-sm text-neutral-600">Overview of ongoing and completed projects.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((id) => (
          <div key={id} className="rounded-lg border border-neutral-200 p-4">
            <div className="mb-2 text-sm font-medium">Project {id}</div>
            <div className="text-sm text-neutral-600">Short description of the project goes here.</div>
          </div>
        ))}
      </div>
    </div>
  )
}


