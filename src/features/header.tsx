import React from "react";
import { useLocation, Link } from "react-router-dom";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";

const Header = () => {
  return (
    <div className="h-[50px] px-4 w-full hover:shadow flex items-center justify-start hover:bg-slate-500">
      <Link to={"/"}>
        <CottageOutlinedIcon className="hover:scale-110" fontSize="large" />{" "}
      </Link>
    </div>
  );
};

export default Header;
