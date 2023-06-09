import React from "react";
import Pic from "../../public/images/profile_pic.png";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import {
  AiFillBank,
  AiOutlineLike,
  AiOutlineLock,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { MdOutlinePersonOutline, MdPayment } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import { logout } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  const logOut = () => {
    dispatch(logout())
  }
  return (
    <div className="border border-md border-none bg-white/90 rounded-md shadow-xl ">
      <div>
        <Link href="/consultant-dashboard">
          <div className="px-4 hover:bg-gray/10">
            <div className="flex flex-row gap-3 px-4 py-3 cursor-pointer ">
              <FiBookmark className="text-2xl" />{" "}
              <p className="-py-1 text-lg">Bookings</p>
            </div>
          </div>
        </Link>
        <hr className="text-gray/10" />
      </div>
      <div>
        <Link href="/consultant-dashboard/my-profile">
          <div className="px-4 hover:bg-gray/10">
            <div className="flex flex-row gap-3 px-4 py-3 cursor-pointer">
              <AiFillBank className="text-2xl" />{" "}
              <p className="-py-1 text-lg">My Profile</p>
            </div>
          </div>
        </Link>
        <hr className="text-gray/10" />
      </div>
      <div>
        <Link href="/consultant-dashboard/industries">
          <div className="px-5 hover:bg-gray/10">
            <div className="flex flex-row gap-3 px-4 py-3 cursor-pointer">
              <MdOutlinePersonOutline className="text-2xl" />{" "}
              <p className="-py-1 text-lg">Active Industries</p>{" "}
            </div>
          </div>
        </Link>
        <hr className="text-gray/10" />
      </div>
      <div>
        <Link href="/consultant-dashboard/review">
          <div className="px-5 hover:bg-gray/10">
            <div className="flex flex-row gap-3 px-4 py-3 cursor-pointer">
              <BiLike className="text-2xl" />
              <p className="-py-1 text-lg">Review</p>
            </div>
          </div>
        </Link>
        <hr className="text-gray/10" />
      </div>
      <div>
        <Link href="/consultant-dashboard/bank-details">
          <div className="px-5 hover:bg-gray/10">
            <div className="flex flex-row gap-3 px-4 py-3 cursor-pointer">
              <MdPayment className="text-2xl" />
              <p className="-py-1 text-lg">Bank Details</p>
            </div>
          </div>
        </Link>
        <hr className="text-gray/10" />
      </div>
      <div>
        <Link href="/consultant-dashboard/schedule-timing">
          <div className="px-5 hover:bg-gray/10">
            <div className="flex flex-row gap-3 px-4 py-3 cursor-pointer">
              <AiOutlineFieldTime className="text-2xl" />
              <p className="-py-1 text-lg">Schedule Timings</p>
            </div>
          </div>
        </Link>
        <hr className="text-gray/10" />
      </div>



      <div>
        <div className="px-5 hover:bg-gray/10" onClick={logOut}>
          <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer">
            <RiLogoutCircleRLine className="text-2xl" />
            <p className="-py-1 text-lg">Logout</p>
          </div>
        </div>
        <hr className="text-gray/10" />
      </div>
    </div>
  );
};

export default Sidebar;
