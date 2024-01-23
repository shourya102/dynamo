import React, { useEffect, useState } from "react";
import "./Profile.css";
import flower from "./flower2.jpg";
import TextBox from "../../components/TextBox/TextBox";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import useWindowSize from "../../hooks/useWindowSize";

const Profile = () => {
  const windowSize = useWindowSize();
  const [charLength, setCharLength] = useState(200);

  useEffect(() => {
    const width = windowSize.width;
    if (width > 1200) setCharLength(600);
    else if (width > 800) setCharLength(400);
    else if (width > 650) setCharLength(200);
    else if (width > 400) setCharLength(100);
  }, [charLength, windowSize.width]);

  return (
    <div className="flex w-full h-[53.5rem] justify-center items-center">
      <div className="flex flex-col rounded-2xl bg-skin-base-3 w-5/6 h-5/6 p-5 border-skin-border-1 shadow-sm">
        <div className="flex border-down pb-5 space-x-5 justify-center items-center">
          <img
            className="rounded-full w-44"
            src={flower}
            alt="profile-picture"
          />
          <div className="flex flex-col space-y-2">
            <div className="font-varela font-bold text-semi">Shourya Sahu</div>
            <TextBox length={charLength}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              cupiditate, eum ex explicabo impedit in iste itaque laborum
              possimus voluptate. Aliquid amet animi aperiam aut corporis
              delectus expedita in iste itaque laborum libero natus nisi nulla,
              odio quia tempora temporibus? Beatae commodi corporis dicta ex
              harum hic natus perspiciatis quas.
            </TextBox>
          </div>
          <div>
            <IconContext.Provider value={{ size: 30 }}>
              <BiLogoLinkedin />
              <AiFillFacebook />
              <AiFillInstagram />
            </IconContext.Provider>
          </div>
        </div>
        <div className="py-5"></div>
      </div>
    </div>
  );
};

export default Profile;
