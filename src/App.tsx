import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import PostsAll from "./features/posts/posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./features/user/user";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/user/:userId" Component={UserDetails} />
          <Route path="/" Component={PostsAll} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
