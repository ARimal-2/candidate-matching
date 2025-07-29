import logo from "../img/notification_bell.png";
import profile from "../img/profile.png";
import { Separator } from "@/components/ui/separator";
const Navbar = () => {
  //     const [user, setUser] = useState({ name: "", email: "" });
  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);
  const userName = "Micheal Smith";
  const userEmail = "michaelsmith12@gmail.com";

  return (
    <nav className="flex justify-between items-center px-6 py-6 bg-white shadow">
      {/* Left - Logo */}
      <div className="flex items-center space-x-1 h-8 w-41">
        <svg
          width="28"
          height="29"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9997 1.33334V24.6667M21.2493 4.75043L4.7501 21.2496M24.6663 13H1.33301M21.2493 21.2496L4.7501 4.75043"
            stroke="#FF7614"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-sen flex items-center gap-1 font-bold"
          style={{
            fontSize: "28px",
            lineHeight: "100%",
            letterSpacing: "-0.04em",
            color: "#FF7614",
          }}
        >
          HireMatch
        </span>
      </div>

      <div className="flex items-center  gap-4">
        <div className=" h-6 w-6" title="Notifications">
          <img src={logo} alt="Notifications" />
        </div>
        <div className="h-[30px]">
          <Separator orientation="vertical" />
        </div>
        <div className="flex items-center gap-2">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="text-sm  mr-6 gap-1">
            <p className="text-600">{userName}</p>
            <p className="text-gray-400">{userEmail}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
