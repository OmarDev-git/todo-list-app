
// My Components
import LogoX from "./LogoX";
import LogoGitHub from "./LogoGitHub";
import LogoLinkedIn from "./LogoLinkedIn";
import A from "./A";

// Styles
import "./DevSignatureStyle.css";

export default function DevSignature() {
  const linksStyles =
    "flex justify-center items-center  border-2 border-white rounded-md transition-all duration-150 ease-in-out   hover:bg-white text-white hover:text-black ";
  return (
    <>
      <div className=" flex flex-col gap-2 border-2 border-white text-white opacity-60  p-4 rounded-2xl ">
        <h1 className="text-sm flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
          Made by
          <div className="font-bold text-lg">Omar Dev <span className="animate-blink text-lg pb-2"> _</span>
          </div>
        </h1>
        <ul className="flex justify-center items-center gap-2 ">
          <li><span className=" text-2xl">{"{"}</span></li>
          
          <li className={linksStyles}>
            <A path={"https://x.com/Omardev_x"} description={"Go to my profile on X (Twitter)"}>
              <LogoX />
            </A>
          </li>
          <li><span className="font-bold">,</span></li>
          
          <li className={linksStyles}>
            <A path={"https://github.com/OmarDev-git"} description={"Go to my profile on GitHub"}>
              <LogoGitHub />
            </A>
          </li>
          <li><span className="font-bold">,</span></li>
          <li className={linksStyles}>
            <A path={"https://www.linkedin.com/in/omar-albaoodh-705a592a8"} description={"Go to my profile on LinkedIn"}>
              <LogoLinkedIn />
            </A>
          </li>
          <li><span className=" text-2xl">{"}"}</span></li>
        </ul>
      </div>
    </>
  );
}
