import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "components/icon";

const SidebarLink = () => {
  const links = [
    {
      title: "Dashboard",
      icon: "home",
      path: "/admin/dashboard"
    },
    {
      title: "Books",
      icon: "book",
      path: "/admin/books"
    },
    {
      title: "Categories",
      icon: "slider",
      path: "/admin/categories"
    },
    {
      title: "Users",
      icon: "users",
      path: "/admin/users"
    }
  ];

  return (
    <nav className="mt-2 px-1 text-gray-600 font-medium">
      {links.map(link => (
        <NavLink
          key={link.title}
          to={link.path}
          activeClassName="bg-gray-100 text-gray-900"
          className="mt-1 flex items-center hover:bg-gray-100 px-2 py-2 rounded transition duration-150 ease-in-out"
        >
          <Icon icon={link.icon} className="h-6 w-6 text-gray-400" />
          <span className="pl-2">{link.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarLink;
