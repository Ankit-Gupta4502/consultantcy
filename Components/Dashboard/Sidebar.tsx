import React from "react";
import Pic from "../../public/images/profile_pic.png";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import { AiFillBank, AiOutlineLike, AiOutlineLock } from "react-icons/ai";
import { MdOutlinePersonOutline, MdPayment } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import { useAppSelector } from "../../hooks";
import NoSSR from "../../utils/NoSSR";
import { logout } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { AuthReducer: { user, auth } } = useAppSelector(state => state)
  const logOut = () => {
    dispatch(logout())
  }
  return (
    <div>
      <div>
        <div className="border border-md border-none bg-gray/10 rounded-md  grid-cols-1">
          <div className="px-4 py-4 flex gap-4 pb-10">
            <NoSSR>
              <div>
                <Image src={Pic} alt="pic" height={70} width={70} />
              </div>
            </NoSSR>
            <div className="flex flex-col justify-center">
              <h5> {user?.name} </h5>
            </div>
          </div>
          <div>
            <div>
              <Link href="/dashboard">
                <div className="px-5 hover:bg-gray/10">
                  <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer ">
                    <FiBookmark className="text-2xl" />{" "}
                    <p className="-py-1 text-lg">Bookings</p>
                  </div>
                </div>
              </Link>
              <hr className="text-gray/10" />
            </div>
            <div>
              <Link href="/dashboard/my-profile">
                <div className="px-5 hover:bg-gray/10">
                  <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer">
                    <AiFillBank className="text-2xl" />{" "}
                    <p className="-py-1 text-lg">My Profile</p>
                  </div>
                </div>
              </Link>
              <hr className="text-gray/10" />
            </div>
            <div>
              <Link href="/dashboard/my-wallet">
                <div className="px-5 hover:bg-gray/10">
                  <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer">
                    <MdOutlinePersonOutline className="text-2xl" />{" "}
                    <p className="-py-1 text-lg">Wallet</p>{" "}
                  </div>
                </div>
              </Link>
              <hr className="text-gray/10" />
            </div>
            <div>
              <Link href="/dashboard/review" >
                <div className="px-5 hover:bg-gray/10">
                  <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer">
                    <BiLike className="text-2xl" />
                    <p className="-py-1 text-lg">Review</p>
                  </div>
                </div>
              </Link>
              <hr className="text-gray/10" />
            </div>
            {/* <div>
              <div className="px-5 hover:bg-gray/10">
                <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer">
                  <MdPayment className="text-2xl" />
                  <p className="-py-1 text-lg">Payment</p>
                </div>
              </div>
              <hr className="text-gray/10" />
            </div> */}
            {/* <div>
              <Link href="/dashboard/change-password">
                <div className="px-5 hover:bg-gray/10">
                  <div className="flex flex-row gap-3 px-4 py-4 cursor-pointer">
                    <AiOutlineLock className="text-2xl" />
                    <p className="-py-1 text-lg">Change Password</p>
                  </div>
                </div>
              </Link>
              <hr className="text-gray/10" />
            </div> */}

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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
