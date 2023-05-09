import React from "react";
import Image from "next/image";
import Pic from "../../public/images/profilepic.png";
import Button from "../UI/Button";
import { useAppSelector } from "../../hooks";
import NoSSR from "../../utils/NoSSR";

const Header = () => {
  const { AuthReducer: { auth } } = useAppSelector(state => state)
  return (
    <div>
      <div className="bg-primary">
        <NoSSR>

          <div className=" container py-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-8">
                <div>
                  <Image src={Pic} alt="pic" />
                </div>
                <div>
                  <h4 className="text-white"> {auth?.name || ""} </h4>
                  <p className="text-white/70">Consultancy Expert</p>
                </div>
              </div>
              <div className="rounded-xl bg-[#055BEC]">
                <div className="flex items-center p-6 gap-28">
                  <div>
                    <h2 className="text-white">Rs 1200</h2>
                    <p className="text-white/75">Available Amount</p>
                  </div>
                  <div>
                    <Button
                      className="!bg-white !text-primary
                    "
                    >
                      Withdraw
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NoSSR>
      </div>
    </div>
  );
};

export default Header;
