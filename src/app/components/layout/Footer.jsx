//function to inject footer in the layout.js
export function FooterBar() {
  return (
    <div className="flex px-8 py-6 mt-8 items-center justify-between bg-slate-900 sticky bottom-0 z-50">
      <span className="text-xs font-bold italic">API Provided by TMDB</span>
      <span className="text-xs font-bold italic">Coded By Waiyan Min Thant</span>
    </div>
  );
}