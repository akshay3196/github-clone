import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiFillGithub, AiOutlineBell } from "react-icons/ai";

import { UserProfile, UserButton, useClerk } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUsername } from "../store/userInfoSlice";

const FullHeader = () => {
  const router = useRouter();

  // Getting the active session and user
  const { session: activeSession, user: activeUser } = useClerk();
  const dispatch = useDispatch();

  console.log(activeUser);

  useEffect(() => {
    dispatch(setUsername(activeUser?.username));
  }, [activeSession]);

  return (
    <div className="w-full  items-center bg-black p-3 text-white hidden md:inline-flex ">
      <div className="w-1/4 flex justify-center items-center px-4 ">
        <AiFillGithub
          className="text-white h-9 w-9"
          onClick={() => router.push("/")}
        />

        <input
          type="text"
          className="bg-black border ml-3 rounded-md border-gray-600 placeholder:text-gray-300 text-xs p-2 w-full focus:outline-none "
          placeholder="Saerch or jump to..."
        />
      </div>

      <div className="w-2/4 flex items-center justify-start space-x-5 px-4 text-sm font-bold text-white ">
        <span>
          {" "}
          <Link href="/pulls">Pull Request</Link>
        </span>
        <span>
          <Link href="/issues">Issues</Link>
        </span>
        <span>
          {" "}
          <a href="https://github.com/marketplace">Marketplace</a>{" "}
        </span>
        <span>
          {" "}
          <a href="https://github.com/explore">Explore</a>
        </span>
      </div>
      <div className="w-1/4 flex justify-end items-center space-x-4  ">
        <AiOutlineBell className="h-5 w-5" />
        <div className="flex items-center border p-1 rounded-md ">
          <select name="+" id="plus" className="bg-black text-xs outline-none">
            <option value="new repository">new repository</option>
            <option value="new repository">import repository</option>
            <option value="new repository">new gist</option>
            <option value="new repository">new organization</option>
            <option value="new repository">new project</option>
          </select>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default FullHeader;
