import { MenuItem } from "./MenuItem";
import { FaHouse, FaFilm, FaTv, FaCircleInfo } from "react-icons/fa6";

export function HeaderBar() {
  return (
    <div className="fixed w-full z-50">
      <div className="flex px-8 py-4 justify-between bg-slate-900">
        <div className="flex gap-8">
          <MenuItem title={'Home'} url={'/'} Icon={FaHouse} />
          <MenuItem title={'About'} url={'/about'} Icon={FaCircleInfo} />
          <MenuItem title={'Movies'} url={'/movies?type=popular'} Icon={FaFilm} />
          <MenuItem title={'Shows'} url={'/shows?type=popular'} Icon={FaTv} />
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xl font-bold bg-teal-700 px-2 py-1 rounded">YoteShin</span>
        </div>
      </div>
    </div>
  );
}