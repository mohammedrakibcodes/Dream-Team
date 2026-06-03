import dollar from "../../assets/dollar.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="navbar bg-base-100">
        {/* Logo */}
        <div className="flex-1">
          <img src={logo} alt="Logo" className="max-w-[120px] md:max-w-full" />
        </div>

        {/* Menu */}
        <div className="flex-none">
          <ul className="flex items-center gap-3 md:gap-8 text-gray-500 font-medium text-sm md:text-base">
            <li>
              <button className="hover:text-black active:scale-95 transition cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button className="hover:text-black active:scale-95 transition cursor-pointer">
                Fixture
              </button>
            </li>
            <li>
              <button className="hover:text-black active:scale-95 transition cursor-pointer">
                Teams
              </button>
            </li>
            <li>
              <button className="hover:text-black active:scale-95 transition cursor-pointer">
                Schedules
              </button>
            </li>
          </ul>
        </div>

        {/* Coin Button */}
        <div className="flex-none ml-3 md:ml-8">
          <button className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 border border-gray-200 rounded-xl font-semibold text-sm md:text-base">
            <span className="hidden sm:inline">0 Coin</span>
            <span className="sm:hidden">0</span>
            <img src={dollar} alt="Coin" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
