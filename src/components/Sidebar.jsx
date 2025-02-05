import React, { useState } from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import { RiLineLine } from "react-icons/ri";
import { StateContext } from "../contexts/ContextProvider";
import { useContext } from "react";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useContext(StateContext);
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 pb-8 h-screen relative md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 z-50">
      {activeMenu && (
        <>
          <div
            className="top-sidebar flex left-0 justify-between items-center fixed z-50 bg-white"
            style={{ backgroundColor: currentColor }}>
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <div className="tooltip">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="text-xl relative rounded-full p-3  hover:bg-light-gray mt-4 block">
                <MdOutlineCancel className="bg-white rounded-full" />
              </button>
            </div>
          </div>
          <div className="absolute top-20 pr-4 w-full">
            {links.map((item, index) => (
              <div key={index}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={`/${link.name}`}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }>
                    {link.icon}
                    <span className="capitalize w-full">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
