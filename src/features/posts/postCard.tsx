import React, { useState } from "react";
import { IComments, IGetPost, IUser } from "../interfaces";
import { useNavigate, Link } from "react-router-dom";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface IPostCard extends IGetPost {
  userDetails: IUser;
  comments: IComments[];
}

const PostCard = ({
  body,
  id,
  title,
  userId,
  userDetails,
  comments,
}: IPostCard) => {
  const [isCommentsOn, setCommentsOn] = useState(false);
  return (
    <div className=" border max-w-xl min-h-[200px] rounded flex flex-col justify-between p-4 hover:shadow hover:shadow-white m-5">
      <Link
        replace
        to={`user/${userId}`}
        role="button"
        className="font-semibold text-md flex items-center justify-start hover:underline"
      >
        {userDetails?.name}
      </Link>
      <hr />
      <div className="">
        <h2 className="font-semibold text-base ">{title}</h2>
        <p className="text-ellipsis text-xs font-normal">{body}</p>
      </div>
      <div className=" justify-end flex w-full items-end">
        {!isCommentsOn ? (
          <CommentOutlinedIcon
            onClick={() => {
              setCommentsOn(true);
            }}
            fontSize="small"
            className="cursor-pointer"
          />
        ) : (
          <CloseOutlinedIcon
            onClick={() => {
              setCommentsOn(false);
            }}
            fontSize="small"
            className="cursor-pointer"
          />
        )}
      </div>

      {isCommentsOn && (
        <div className="p-2 pt-3 my-3">
          <p className="font-bold">Comments</p>
          {comments?.map((commentItem, index) => (
            <div className="">
              <hr className="my-3" />
              <h2 className="text-sm font-semibold ">{commentItem?.name}</h2>
              <p className="text-ellipsis text-xs">{commentItem?.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
