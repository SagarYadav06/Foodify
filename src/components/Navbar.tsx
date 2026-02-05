import { Link } from "react-router-dom";

const Navbar = () => {

  interface MenuItem {
    label: string;
    path: string;
  }

  const navbar: MenuItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <div>
      <nav className="h-16 bg-orange-400 text-white flex items-center gap-6 px-6">
        {navbar.map((item: MenuItem, index: number) => (
          <Link
            key={index}
            to={item.path}
            className="font-medium hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
