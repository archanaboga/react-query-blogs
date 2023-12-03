import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RedirectToPost = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/posts");
    }
  }, [pathname]);

  return <div> </div>;
};

export default RedirectToPost;
