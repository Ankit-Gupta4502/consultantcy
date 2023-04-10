import React, { useState, useEffect } from "react";
import { MdOutlineCall, MdEmail } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import img from "../../public/images/iid-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppDispatch, RootState } from "../../redux/store";
import Button from "../UI/Button";
import { BiChevronDown } from "react-icons/bi"
import { getNavLinks } from "../../redux/actions/HomeAction";
import { logout } from "../../redux/actions/AuthAction";

interface navlinks {
  id: number,
  name?: string,
  slug?: string,
  subSubCategories: Array<{ id?: number, name?: string, slug?: string, }>
}
function TopHeader() {
  const {
    AuthReducer: { isAuthentiCated },
    IndexReducer: { navLinks }
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch()
  const [isAuth, setIsAuth] = useState(false);
  const [showDrop, setShowDrop] = useState(false)
  const [subCategories, setSubCategories] = useState<{ id: number, slug?: string, category: Array<{ name?: string, title?: string, slug?: string, id?: number }> }>({ id: 0, category: [], slug: '' })

  useEffect(() => {
    setIsAuth(isAuthentiCated);
  }, [isAuthentiCated]);

  useEffect(() => {
    dispatch(getNavLinks())
  }, [])

  useEffect(() => {
    if (Array.isArray(navLinks)) {
      setSubCategories(
        {
          id: navLinks?.[0]?.id,
          category: navLinks?.[0]?.subSubCategories,
          slug: navLinks?.[0]?.slug
        }
      )
    }
  }, [navLinks])


  return (
    <>
      <div>
        <div className="bg-[#262626]">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="flex gap-5 py-2">
                  <div>
                    <MdOutlineCall className="text-white" size={25} />
                  </div>
                  <div>
                    <a className="text-white">1800-123-1234</a>
                  </div>
                </div>

                <div className="py-2 pl-4">
                  <p className="text-white mb-0">|</p>
                </div>

                <div className="flex gap-5 py-2 px-4">
                  <div>
                    <MdEmail className="text-white" size={25} />
                  </div>
                  <div>
                    <a className="text-white">1800-123-1234</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex py-2 gap-5 items-center">
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                  <Link href="#" className="text-white">
                    About us
                  </Link>
                  {!isAuth ? <Link href="/login" className="text-white">
                    Login/Register
                  </Link> : <div className="group relative"   >
                    <span role="button" className="text-white">
                      My Account
                    </span>
                    <div className="px-10 py-3  rounded-md absolute group-hover:opacity-100 transition-all duration-500   opacity-0 shadow-2xl space-y-3 bg-white top-10 z-20 ">
                      <Link href="#" className="block " >Dashboard</Link>
                      <span className="block" role="button" onClick={() => dispatch(logout())} >Log Out</span>
                    </div>
                  </div>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative py-[25px]   ">
        <div className="flex justify-between ">
          <Link href="/">
            <Image src={img} alt="" />
          </Link>

          <div className="flex space-x-10 items-center ">
            <Link className=" cursor-pointer text-gray/70" href="#">
              Consultant
            </Link>

            <Link className=" cursor-pointer text-gray/70" href="#">
              Services
            </Link>

            <div className="flex    items-center space-x-2 " onMouseLeave={() => setShowDrop(false)} onMouseOver={() => setShowDrop(true)}>
              <span className=" cursor-pointer text-gray/70" >
                Shop
              </span>
              <span className={`cursor-pointer text-gray/70 duration-300 ${showDrop ? " rotate-180 " : "rotate-0"}`} >
                <BiChevronDown size={22} />
              </span>
              <div className={`  absolute w-32 top-[58px] h-10`}>

              </div>

              <div className={`absolute z-40 !mx-0 grid overflow-hidden  items-start grid-cols-[288px_auto]  w-full     top-24 left-0  duration-500 bg-white   ${showDrop ? "  opacity-1" : "opacity-0 h-0"}`} >
                <div className="bg-[#DFDFDF80]  h-full" >
                  {
                    navLinks?.map?.((item: navlinks, index) => {
                      return index < 8 && <div className={`flex items-center gap-4 justify-center py-4 ${subCategories?.id === item.id ? "bg-primary text-white" : "text-black"}  duration-300 transition-all border-b border-[#C8C8C8]`} key={item.id} >
                        <span className="block text-center cursor-pointer text-sm " onMouseMove={() => setSubCategories({
                          id: item.id,
                          category: item.subSubCategories,
                          slug: item.slug
                        })} >
                          {item?.name}
                        </span>
                      </div>
                    })
                  }

                  <Link href="/category/all" className="block py-4 w-full text-center cursor-pointer text-sm"  >
                    View All
                  </Link>
                </div>

                <div className="pt-10 p-16 px-[74px] grid gap-x-2 gap-y-3 items-start grid-cols-3" >
                  {
                    subCategories.category?.map((item, index) => {
                      return index < 24 && <Link key={item.id} onClick={() => setShowDrop(false)} href={`/category/${subCategories.slug}/${item.slug}`} className="text-black/70 transition-all duration-300 hover:text-primary hover:translate-x-1 text-sm "  >
                        {item?.title}
                      </Link>
                    })
                  }
                  <div className="col-start-3" >

                    <Link className=" text-primary font-semibold underline" onClick={() => setShowDrop(false)} href={`/category/${subCategories.slug}/all`} >
                      View All
                    </Link>
                  </div>

                </div>

              </div>
            </div>


            <Link className=" cursor-pointer text-gray/70" href="#">
              {" "}
              Courses
            </Link>
            <Button >Book Consultant</Button>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] h-[1px] border-[#DDDDDD]"></div>
    </>
  );
}

export default TopHeader;
