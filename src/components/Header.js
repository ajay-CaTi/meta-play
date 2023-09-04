import BG_IMG from "./image/Netflix_Logo.png";
const Header = () => {
  return (
    <div className="z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={BG_IMG} alt="meta_play" />
    </div>
  );
};
export default Header;
