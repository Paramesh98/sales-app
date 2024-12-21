import React from "react";
import Logo from "@/assets/jpg/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
type Menu = {
  label: string;
  url: string;
  children?: Menu[];
};

function Header() {
  const menu: Menu[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Products", url: "/products" },
    {
      label: "Categories",
      url: "/products",
      children: [
        { label: "Mens", url: "/products" },
        { label: "Woments", url: "/products" },
        { label: "Kids", url: "/products" },
      ],
    },
    {
      label: "Contact Us",
      url: "/contact",
    },
  ];

  const MenuItem = ({ menu }: { menu: Menu }) => {
    return (
      <li className="scroll-to-section">
        <Link
          className={menu.label === "Home" ? "active" : ""}
          href={`${menu.url}`}
        >
          {menu.label}
        </Link>
      </li>
    );
  };
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link href="/" className="logo">
                <Image className="pt-3" src={Logo} alt={"logo"} title="logo" />
              </Link>
              <ul className="nav">
                {menu.map((menuItem, index) => {
                  if (menuItem.children) {
                    return (
                      <li className="submenu" key={index}>
                        <Link
                          className="flex justify-center items-center sublink"
                          href={menuItem.url}
                        >
                          <span> {menuItem.label}</span>{" "}
                        </Link>
                        <ul className="pl-0">
                          {menuItem.children.map((menu, index) => (
                            <MenuItem menu={menu} key={index} />
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return <MenuItem menu={menuItem} key={index} />;
                })}
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
