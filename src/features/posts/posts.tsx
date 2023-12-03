import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { getAllComments, getAllPosts, getAllUsers } from "../apis";
import PostCard from "./postCard";
import { IComments, IUser } from "../interfaces";

const PostsAll = () => {
  const users = useQuery({
    queryKey: ["get-all-users"],
    queryFn: getAllUsers,
  });

  const posts = useQuery({
    queryKey: ["get-all-posts"],
    queryFn: getAllPosts,
  });

  const allComments = useQuery({
    queryFn: getAllComments,
    queryKey: "get-all-comments",
  });

  const currentUserDetails = (userId: number): IUser => {
    return users?.data?.find((item) => +item?.id === +userId);
  };

  const filterCommentsByPost = (postId: number): IComments[] => {
    return allComments?.data?.filter((item) => item?.postId === postId);
  };

  return (
    <div className="bg-[#222] ">
      <div className="flex flex-col items-center justify-center gap-3  text-white    p-4 bg-[#222] ">
        <p
          style={{ position: "fixed" }}
          className="text-center  font-bold top-0 text-3xl bg-[#222] w-full h-[80px]"
        >
          Hello, Welcome
        </p>
        <div className="mt-[80px]">
          {posts?.data?.map((postItem, index) => (
            <PostCard
              comments={filterCommentsByPost(postItem?.id)}
              userDetails={currentUserDetails(postItem?.userId)}
              key={postItem?.id + index + 1}
              userId={postItem?.userId}
              id={postItem?.id}
              title={postItem?.title}
              body={postItem?.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsAll;
