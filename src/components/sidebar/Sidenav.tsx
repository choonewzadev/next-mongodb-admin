"use client";

import classNames from "classnames";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { setOpenSidenav, useUIController } from "@/context/UIContext";

interface Props {}
const Sidenav = ({}: Props) => {
  const { uiState, uiDispatch } = useUIController();

  const { sidenavColor, sidenavType, openSidenav } = uiState;

  const brandImg: string = useMemo(() => {
    return sidenavType === "dark"
      ? "/img/logo-ct.png"
      : "/img/logo-ct-dark.png";
  }, [sidenavType]);

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={classNames(
        sidenavTypes["dark"],
        "fixed inset-0 z-50 overflow-y-auto my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 md:translate-x-0",
        {
          "translate-x-0": openSidenav === true,
          "-translate-x-80": openSidenav === false,
        }
      )}
    >
      <div className={`relative border-b border-white/20`}>
        <Link href="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar src={brandImg} size="sm" />
          <Typography variant="h6" color="white">
            MongoDB Admin
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(uiDispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
    </aside>
  );
};

export default Sidenav;
