import React, { useState,useEffect } from "react";
import Wrapper from "../../Components/Consultant-Dashboard/Wrapper";
import Sidebar from "../../Components/Consultant-Dashboard/Sidebar";
import Header from "../../Components/Consultant-Dashboard/Header";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { useAppSelector,useAppDispatch } from "../../hooks";
import { getAgoraToken } from "../../redux/actions/AgoraAction";

function index() {
  const [activeNav, setActiveNav] = useState<string>("previous");
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [users,setUsers] = useState<any[]>([])
  const {AuthReducer:{auth}} = useAppSelector(state=>state)
  const dispatch = useAppDispatch()
  useEffect(() => {
    axios("/api/mobile/v1/get-consultant-appointments-list",{
      headers:{
        Authorization:`Bearer ${auth.token}`
      }
    })
    .then((res)=>setUsers(res.data?.data))
    .catch(err=>console.log(err)
    )
  }, [auth])
  const handleVideo = (channel: string, uid: string) => {
    dispatch(getAgoraToken(channel, uid))
  }
  
  return (
    <Wrapper>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-md bg-primary">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h2 className="text-white">Rs 1271300</h2>
                <p className="text-white/70">Total Income</p>
              </div>
              <div>
                <BiWalletAlt className="text-white" size={50} />
              </div>
            </div>
          </div>
          <div className="rounded-md bg-gray/80">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h2 className="text-white">150</h2>
                <p className="text-white/70">Total Bookings</p>
              </div>
              <div>
                <BiWalletAlt className="text-white" size={50} />
              </div>
            </div>
          </div>
          <div className="rounded-md bg-primary">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h2 className="text-white">184</h2>
                <p className="text-white/70">Rating & Review</p>
              </div>
              <div>
                <AiOutlineStar className="text-white" size={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_4px_10px_0px_#0000001A] rounded-md mt-10">
          <div className="flex items-center border-b border-gray/10 ">
            <span
              className={` uppercase font-medium px-10 py-5 text-md   ${
                activeNav === "upcoming"
                  ? " text-primary border-primary border-b-2"
                  : "text-black/70"
              }`}
              role="button"
              onClick={() => setActiveNav("upcoming")}
            >
              Upcoming{" "}
            </span>

            <span
              className={` uppercase font-medium px-10 py-5 text-md  ${
                activeNav === "previous"
                  ? " text-primary border-primary border-b-2"
                  : "text-black/70"
              }`}
              role="button"
              onClick={() => setActiveNav("previous")}
            >
              previous{" "}
            </span>
          </div>

          <div className="px-10 mt-5 ">
            {activeNav === "upcoming" ? (
              <table className=" border border-gray/5 shadow-[0px_4px_10px_rgba(0, 0, 0, 0.1)]  rounded-md overflow-hidden w-full">
                <thead className="bg-[#FCFCFC] ">
                  <tr>
                    <td className="py-5 pl-8">Person</td>

                    <td className="py-5 text-center">Amount</td>

                    <td className="py-5 text-center">Time Slot</td>

                    <td></td>
                  </tr>
                </thead>

                <tbody>
                  {
                    users.map((item)=>{
                      return <tr className="border-t border-gray/5" key={item.id} >
                      <td className="py-8 pl-8 ">
                        <div>
                          <span className="block">Raju Raman Singh</span>
                          <small className="text-gray/50">
                            Software Developer
                          </small>
                        </div>
                      </td>
  
                      <td className="text-center">
                        <small className="text-gray/50">1200</small>
                      </td>
                      <td className="text-center">
                        <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary">
                          11:00AM - 12:00PM
                        </span>
                      </td>
  
                      <td>
                        <div className="flex space-x-4 items-center justify-center">
                          <button  onClick={() => handleVideo(item.channelName, item.uid)} className="border-0 px-4 py-2 flex items-center bg-green-500 text-white rounded-md">
                            <MdOutlineLocalPhone size={20} className="mr-2" />
                            Audio Call
                          </button>
                        </div>
                      </td>
                    </tr>
                    })
                  }
                  
                </tbody>
              </table>
            ) : (
              <table className=" border border-gray/5 shadow-[0px_4px_10px_rgba(0, 0, 0, 0.1)]  rounded-md overflow-hidden w-full">
                <thead className="bg-[#FCFCFC] ">
                  <tr>
                    <td className="py-5 pl-8">Person</td>

                    <td className="py-5 text-center">Amount</td>

                    <td className="py-5 text-center">Time Slot</td>

                    <td></td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-gray/5">
                    <td className="py-8 pl-8 ">
                      <div>
                        <span className="block">Raju Raman Singh</span>
                        <small className="text-gray/50">
                          Software Developer
                        </small>
                      </div>
                    </td>

                    <td className="text-center">
                      <small className="text-gray/50">1200</small>
                    </td>
                    <td className="text-center">
                      <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary">
                        11:00AM - 12:00PM
                      </span>
                    </td>

                    <td>
                      <div className="flex space-x-4 items-center justify-center">
                        <button className="border px-4 py-2 flex items-center bg-green-200 text-green-500 font-semibold rounded-md">
                          <MdOutlineLocalPhone size={20} className="mr-2" />
                          Completed
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
