import React, { useState, useEffect } from "react";
import Wrapper from "../../../Components/Dashboard/Wrapper";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getRating } from "../../../redux/actions/RatingAction"
const index = () => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const {
    RatingReducer: { ratings }
  } = useSelector((state: RootState) => state);
  const { AuthReducer: { auth, isAuthentiCated } } = useSelector((state: RootState) => state)
  useEffect(() => {
    if (isAuthentiCated) {
      dispatch(getRating(auth.token));
    }
  }, [isAuthentiCated]);


  return (
    <Wrapper>
      <table className=" border border-gray/5 shadow-[0px_4px_10px_rgba(0, 0, 0, 0.1)]  rounded-md overflow-hidden w-full">
        <thead className="bg-[#FCFCFC] ">
          <tr>
            <td className="py-5 pl-8">Consultant</td>

            <td className="py-5 text-center">Review</td>
            <td className="py-5 text-center">Status</td>



            <td></td>
          </tr>
        </thead>

        <tbody>
          {ratings?.map?.((item) => {
            return (
              <tr className="border-t border-gray/5 " key={item?.id}>

                <td className="py-2 pl-8 ">
                  <div>
                    <span className="block">{item?.consultant
                      ?.name}</span>
                    <small className="text-gray/50 line-clamp-2">{item?.comment}</small>
                  </div>
                </td>

                <td className="text-center py-2">
                  <div className="flex items-center  justify-center text-black/70 space-x-3">
                    {[1, 2, 3, 4, 5].map?.((_, index) => {
                      return (
                        <AiFillStar
                          key={index}
                          // onMouseLeave={() => !rated && setRating(0)}
                          // onClick={() => {
                          //   setRating(index + 1);
                          //   setRated(true);
                          // }}
                          // onMouseOver={() => {
                          //   setRating(index + 1);
                          //   setRated(false);
                          // }}
                          size={24}
                          className={`cursor-pointer ${index + 1 <= item?.rating ? "text-primary" : ""
                            }`}
                        />
                      );
                    })}
                  </div>
                </td>


                <td className="py-2" >
                  <button className=" block mx-auto px-5 py-2  items-center bg-[#0ec15619] border border-[#0EC156] text-[#0EC156] rounded-md font-semibold">
                    Completed
                  </button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </Wrapper>
  );
};

export default index;
