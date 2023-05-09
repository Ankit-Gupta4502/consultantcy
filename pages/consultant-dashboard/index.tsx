import React, { useState, useEffect, useCallback } from "react";
import Wrapper from "../../Components/Consultant-Dashboard/Wrapper";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getAgoraToken } from "../../redux/actions/AgoraAction";
import { getConsultantAppointments } from "../../redux/actions/ConsultantDashoboardAction";
import { useRouter } from "next/router";
import { IAppointments } from "../../redux/actionInterface/IConsultantDashboard";
import { FiVideo } from "react-icons/fi"
import { getConsultantRating } from "../../redux/actions/RatingAction"
function index() {
  const [activeNav, setActiveNav] = useState<string>("upcoming");
  const { AuthReducer: { auth, isAuthentiCated }, ConsultantDashBordRducer: { appointments }, RatingReducer: { consultantRatings } } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if (isAuthentiCated) {
      dispatch(getConsultantAppointments(auth.token)),
        dispatch(getConsultantRating(auth.token))
    }
  }, [auth, isAuthentiCated])
  const handleVideo = (channel: string, type: "audio" | "video") => {
    dispatch(getAgoraToken(channel, type))
  }

  useEffect(() => {
    if (!isAuthentiCated || auth.type !== "consultant") {
      router.back()
    }
  }, [isAuthentiCated, auth.type])

  const upcoming = appointments.filter((item) => item?.isUsed === false
  )
  const previous = appointments.filter((item) => item?.isUsed === true
  )

  const getRating = useCallback(() => {
    return consultantRatings.reduce((accu, item) => accu += item.rating, 0) / consultantRatings.length
  }, [consultantRatings])
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
                <h2 className="text-white"> {appointments.length} </h2>
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
                <h2 className="text-white">{getRating()}</h2>
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
              className={` uppercase font-medium px-10 py-5 text-md   ${activeNav === "upcoming"
                ? " text-primary border-primary border-b-2"
                : "text-black/70"
                }`}
              role="button"
              onClick={() => setActiveNav("upcoming")}
            >
              Upcoming{" "}
            </span>

            <span
              className={` uppercase font-medium px-10 py-5 text-md  ${activeNav === "previous"
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
                    upcoming.map((item: IAppointments) => {
                      return <tr className="border-t border-gray/5" key={item.id} >
                        <td className="py-8 pl-8 ">
                          <div>
                            <span className="block"> {item.user.name} </span>

                          </div>
                        </td>
                        <td className="text-center">
                          <small className="text-gray/50"> {item.amount} </small>
                        </td>
                        <td className="text-center">
                          <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary">
                            {item.consultant_slot.startTime} - {item.consultant_slot.endTime}
                          </span>
                        </td>

                        <td>
                          <div className="flex space-x-4 items-center justify-center">
                            <button onClick={() => handleVideo(item.channelName, item.consultancyType)} className="border-0 px-4 py-2 flex items-center bg-green-500 text-white rounded-md">
                              {
                                item.consultancyType === "audio" ?
                                  <MdOutlineLocalPhone size={20} className="mr-2" />
                                  : <FiVideo size={20} className="mr-2" />
                              }
                              {
                                item.consultancyType === "audio" ?
                                  " Audio Call" :
                                  "Video Call"
                              }
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
                  {
                    previous.map((item: IAppointments) => {
                      return <tr className="border-t border-gray/5" key={item.id} >
                        <td className="py-8 pl-8 ">
                          <div>
                            <span className="block"> {item.user.name} </span>

                          </div>
                        </td>
                        <td className="text-center">
                          <small className="text-gray/50"> {item.amount} </small>
                        </td>
                        <td className="text-center">
                          <span className="px-4 text-sm py-2 font-semibold rounded-full bg-[#2A79FF1A] text-primary">
                            {item.consultant_slot.startTime} - {item.consultant_slot.endTime}
                          </span>
                        </td>

                        <td>
                          <div className="flex space-x-4 items-center justify-center">
                            <button onClick={() => handleVideo(item.channelName, item.consultancyType)} className="border-0 px-4 py-2 flex items-center bg-green-500 text-white rounded-md">
                              {
                                item.consultancyType === "audio" ?
                                  <MdOutlineLocalPhone size={20} className="mr-2" />
                                  : <FiVideo size={20} className="mr-2" />
                              }
                              {
                                item.consultancyType === "audio" ?
                                  " Audio Call" :
                                  "Video Call"
                              }
                            </button>
                          </div>
                        </td>
                      </tr>
                    })
                  }

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
