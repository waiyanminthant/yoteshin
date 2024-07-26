export function PageButton({ current, total }) {

  if (total > 6) {
    return <div>There is more than 6 pages</div>
  }

  if (total < 6) {
    const buttons = [];
    for (let i = 0; i < total; i++) {
      buttons.push(
        <span
          key={i}
          className="px-2 py-1 bg-slate-300 font-bold text-sm text-slate-900 rounded-sm hover:opacity-80 cursor-pointer"
        >
          {i + 1}
        </span>
      );
    }
    return <div className="flex mt-4 gap-4">{buttons}</div>;
  }
}
