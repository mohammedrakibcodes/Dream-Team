import dollar from "../../assets/dollar.png";
const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100 shadow-sm container mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <button class="flex justify-between items-center gap-2">
            {" "}
            0 Coins
            <img src={dollar} alt="Dollar" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
