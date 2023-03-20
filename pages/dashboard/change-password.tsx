import React from "react";
import Wrapper from "../../Components/Dashboard/Wrapper";
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
const ChangePassword = () => {
  return (
    <Wrapper>
      <div className="shadow-[0px_4px_10px_0px_#0000001A] rounded-md">
        <div className="px-10 py-4 border-b border-gray/30">
          <h5 className="text-primary font-semibold">Change Password</h5>
        </div>
        <div className="px-80 mt-5 grid md:grid-cols-1">
          <div>
            <label htmlFor="" className="mb-4 block">
              Current Password
            </label>
            <Input className="bg-gray/5 !rounded-md" />
          </div>
        </div>
        <div className="px-80 mt-5 grid md:grid-cols-1">
          <div>
            <label htmlFor="" className="mb-4 block">
              New Password
            </label>
            <Input className="bg-gray/5 !rounded-md" />
          </div>
        </div>
        <div className="px-80 mt-5 grid md:grid-cols-1">
          <div>
            <label htmlFor="" className="mb-4 block">
              Confirm Password
            </label>
            <Input className="bg-gray/5 !rounded-md" />
          </div>
        </div>

        <div className="px-80 mt-5 grid md:grid-cols-1">
          <div className="px-40">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ChangePassword;
