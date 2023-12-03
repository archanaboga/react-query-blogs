import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import GoogleMapReact from "google-map-react";
import { useParams, Link } from "react-router-dom";
import { getAllUsers } from "../apis";
import { IUser } from "../interfaces";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import Header from "../header";

const UserDetails = () => {
  const users = useQuery({
    queryKey: ["get-all-users"],
    queryFn: getAllUsers,
  });

  const [currentUser, setCurrentUser] = useState<IUser>(null);
  const { userId } = useParams();

  useEffect(() => {
    if (users?.data?.length) {
      const res = currentUserDetails(+userId);
      setCurrentUser(res);
    }
  }, [userId, users?.data]);

  const currentUserDetails = (userId: number): IUser => {
    return users?.data?.find((item) => +item?.id === +userId);
  };

  return (
    <div
      style={{ overflow: "hidden" }}
      className="bg-slate-400 overflow-hidden h-screen"
    >
      <Header />
      <div className="  m-auto  p-6 rounded hover:shadow text-2xl  text-left flex  items-center justify-evenly w-4/5 mt-32 ">
        <div className="flex  gap-4 items-center">
          <div className="text-3xl flex  gap-4 flex-col">
            <h1 className="font-semibold ">{currentUser?.name}</h1>
            <h1>{currentUser?.email}</h1>
            <h1>{currentUser?.phone}</h1>
            <h1>{currentUser?.website}</h1>
          </div>
          <div className="flex flex-col">
            <div className="  w-fit p-4 ml-0">
              <p className="font-semibold">Address</p>
              <p>{currentUser?.address?.city}</p>
              <p>{currentUser?.address?.street}</p>
              <p>{currentUser?.address?.zipcode}</p>
              <p>{currentUser?.address?.suite}</p>
              <p>{currentUser?.address?.geo.lat}</p>
            </div>
          </div>
          <div className="">
            <Link
              target="_blank"
              to={`https://www.google.com/maps/place/${currentUser?.address?.geo?.lat},${currentUser?.address?.geo?.lng}`}
            >
              <span className="rounded-3xl bg-slate-600 p-3 border text-white flex items-center justify-center gap-3 w-[300px] h-[200px]">
                Find me here <MyLocationOutlinedIcon />
              </span>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

// {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//       street: string;
//       suite: string;
//       city: string;
//       zipcode: string;
//       geo: {
//           lat: string;
//           lng: string;
//       };
//   };
//   phone: string;
//   website: string;
//   company: {
//       name: string;
//       catchPhrase: string;
//       bs: string;
//   };
// }
