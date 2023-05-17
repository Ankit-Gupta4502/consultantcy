import React, { useState, useEffect } from "react";
import Wrapper from "../../Components/Dashboard/Wrapper";
import { MdOutlineLocalPhone } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAgoraToken } from "../../redux/actions/AgoraAction";
import { getUserAppointments } from "../../redux/actions/UserDashboardActions";
import { useRouter } from "next/router";
import { Iappointments } from "../../redux/actionInterface/IUserDashboard";
import { FiVideo } from "react-icons/fi"
import { BiRupee } from "react-icons/bi"
const index = () => {
  const [activeNav, setActiveNav] = useState<string>('upcoming')
  const [rating, setRating] = useState(0)
  const [rated, setRated] = useState(false)
  const { AuthReducer: { auth, isAuthentiCated }, UserDashBoardReducer: { appointments } } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const [app, setApp] = useState<any[]>([])
  const router = useRouter()
  useEffect(() => {
    if (isAuthentiCated) {
      dispatch(getUserAppointments(auth.token || ''))
    }
  }, [isAuthentiCated, auth])

  const handleVideo = (channel: string, type: "audio" | "video", id: number) => {
    dispatch(getAgoraToken(channel, type))
    dispatch({ type: "SET_PEER_ID", payload: id })
  }

  useEffect(() => {
    if (!isAuthentiCated && auth.type !== "user") {
      router.back()
    }
  }, [auth, isAuthentiCated])
  return (
    <Wrapper>
      <div className="shadow-[0px_4px_10px_0px_#0000001A] rounded-md" >
        <div className="flex items-center border-b border-gray/10 ">
          <span className={` uppercase font-medium px-10 py-5 text-md   ${activeNav === "upcoming" ? " text-primary border-primary border-b-2" : "text-black/70"}`} role="button" onClick={() => setActiveNav('upcoming')} >Upcoming </span>

          <span className={` uppercase font-medium px-10 py-5 text-md  ${activeNav === "previous" ? " text-primary border-primary border-b-2" : "text-black/70"}`} role="button" onClick={() => setActiveNav('previous')} >previous </span>
        </div>

        <div className="px-10 mt-5 ">
          {activeNav === "upcoming" ? <table className=" border border-gray/5 shadow-[0px_4px_10px_rgba(0, 0, 0, 0.1)]  rounded-md overflow-hidden w-full">
            <thead className="bg-[#FCFCFC] " >
              <tr>
                <td className="py-5 pl-8" >
                  Consultant
                </td>

                <td className="py-5 text-center" >
                  Amount
                </td>

                <td className="py-5 text-center" >
                  Date
                </td>

                <td className="py-5 text-center" >
                  Time Slot
                </td>

                <td>

                </td>
              </tr>
            </thead>

            <tbody>
              {
                appointments.map((item: Iappointments) => {
                  return <tr className="border-t border-gray/5" key={item.id}>
                    <td className="py-8 pl-8 ">
                      <div>
                        <span className="block" > {item.consultant.name} </span>

                      </div>
                    </td>

                    <td className="text-center" >
                      <div className="flex  items-center justify-center">

                        <span className="mr-1 ">
                          <BiRupee />
                        </span>
                        <small className="text-gray/50  " >
                          {item.amount}
                        </small>
                      </div>

                    </td>
                    <td className="text-center" >
                      {item?.consultant_slote_date?.dateIndex}
                    </td>
                    <td className="text-center">
                      <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary" >
                        {item?.consultant_slot?.startTime} - {item?.consultant_slot?.endTime}
                      </span>
                    </td>

                    <td>
                      <div className="flex space-x-4 items-center justify-center">
                        <button onClick={() => handleVideo(item.channelName, item.consultancyType, item.id)} className="border-0 px-4 py-2 flex items-center bg-green-500 text-white rounded-md" >
                          {
                            item.consultancyType === "audio" ?
                              <MdOutlineLocalPhone size={20} className="mr-2" /> :
                              <FiVideo size={20} className="mr-2" />
                          }
                          Call Now
                        </button>

                        {/* <button className="border-0 px-9 py-2 flex items-center bg-[#FF0000] text-white rounded-md" >
                          Cancel
                        </button> */}
                      </div>
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table> :
            <table className=" border border-gray/5 shadow-[0px_4px_10px_rgba(0, 0, 0, 0.1)]  rounded-md overflow-hidden w-full">
              <thead className="bg-[#FCFCFC] " >
                <tr>
                  <td className="py-5 pl-8" >
                    Consultant
                  </td>

                  <td className="py-5 text-center" >
                    Review
                  </td>

                  <td className="py-5 text-center" >
                    Duration
                  </td>

                  <td>

                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray/5" >
                  <td className="py-8 pl-8 ">
                    <div>
                      <span className="block" >Raju Raman Singh</span>
                      <small className="text-gray/50">
                        Anurag Chaudhary
                      </small>
                    </div>
                  </td>

                  <td className="text-center" >
                    <div className="flex items-center  justify-center text-black/70 space-x-3" >

                      {[1, 2, 3, 4, 5].map?.((item, index) => {
                        return <AiFillStar key={index} onMouseLeave={() => !rated && setRating(0)} onClick={() => {
                          setRating(index + 1)
                          setRated(true)
                        }} onMouseOver={() => {
                          setRating(index + 1)
                          setRated(false)
                        }} size={24} className={`cursor-pointer ${index + 1 <= rating ? 'text-primary' : ""}`} />
                      })}


                    </div>

                  </td>
                  <td className="text-center">
                    <span className=" font-semibold rounded-full text-primary" >
                      Rs. 1200
                    </span>
                  </td>

                  <td>
                    <button className=" block mx-auto px-5 py-2  items-center bg-[#0ec15619] border border-[#0EC156] text-[#0EC156] rounded-md font-semibold" >
                      Completed
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
