import { SectionSlate } from '../../../../../../components/editor'
import { AttentionGrabberSection } from '../../types'
import { motion } from "framer-motion";

export default function VariantEleven({ section }: { section: AttentionGrabberSection }) {

  const title = section.variables.find(variable => variable.name === 'TITLE')?.data
  const subTitle = section.variables.find(variable => variable.name === 'SUBTITLE')?.data
  //const paragraph = section.variables.find(variable => variable.name === 'PARAGRAPH')?.data
  //const media = section.variables.find(variable => variable.name === 'MEDIA')?.data


  return (
    <header className="h-[50vh] md:h-[90vh] xl:h-section lg:h-section">
      <div className=" relative z-0">
        <div className=" absolute z-3 top-0 left-0 right-0 " style={{ rotate: "360deg" }} >
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 600"
            xmlns="http://www.w3.org/2000/svg"
            className=" transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%">
                <stop offset="5%" stopColor="#9900ef"></stop>
                <stop offset="95%" stopColor="#8ed1fc"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,600 C 0,600 0,120 0,120 C 55.77190721649484,123.47256995581736 111.54381443298968,126.94513991163473 176,138 C 240.45618556701032,149.05486008836527 313.5966494845361,167.69201030927837 376,164 C 438.4033505154639,160.30798969072163 490.069587628866,134.28681885125184 544,112 C 597.930412371134,89.71318114874816 654.1249999999999,71.16071428571429 715,80 C 775.8750000000001,88.83928571428571 841.430412371134,125.07032400589102 894,138 C 946.569587628866,150.92967599410898 986.1533505154639,140.55798969072163 1046,126 C 1105.846649484536,111.44201030927836 1185.9561855670104,92.6977172312224 1255,91 C 1324.0438144329896,89.3022827687776 1382.0219072164948,104.65114138438881 1440,120 C 1440,120 1440,600 1440,600 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient)"
              fillOpacity="0.265"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 300)"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%">
                <stop offset="5%" stopColor="#9900ef"></stop>
                <stop offset="95%" stopColor="#8ed1fc"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,600 C 0,600 0,240 0,240 C 67.89930044182623,217.81608983799705 135.79860088365245,195.6321796759941 199,198 C 262.20139911634755,200.3678203240059 320.7048969072165,227.28737113402065 377,248 C 433.2951030927835,268.71262886597935 487.3818114874816,283.21833578792337 536,277 C 584.6181885125184,270.78166421207663 627.7678571428571,243.83928571428572 695,228 C 762.2321428571429,212.16071428571428 853.5467599410898,207.42452135493372 925,199 C 996.4532400589102,190.57547864506628 1048.0451030927836,178.46262886597938 1106,198 C 1163.9548969072164,217.53737113402062 1228.2728276877763,268.7249631811488 1285,281 C 1341.7271723122237,293.2750368188512 1390.863586156112,266.63751840942564 1440,240 C 1440,240 1440,600 1440,600 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient)"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
              transform="rotate(-180 720 300)"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%">
                <stop offset="15%" stopColor="#9900ef"></stop>
                <stop offset="95%" stopColor="#8ed1fc"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,600 C 0,600 0,360 0,360 C 69.0108615611193,374.37463181148746 138.0217231222386,388.749263622975 194,400 C 249.9782768777614,411.250736377025 292.92396907216494,419.3775773195876 347,401 C 401.07603092783506,382.6224226804124 466.2824005891017,337.7404270986745 528,338 C 589.7175994108983,338.2595729013255 647.9464285714286,383.66071428571433 715,394 C 782.0535714285714,404.33928571428567 857.9318851251842,379.6167157584683 922,377 C 986.0681148748158,374.3832842415317 1038.3260309278348,393.8724226804124 1089,390 C 1139.6739690721652,386.1275773195876 1188.7639911634758,358.8935935198822 1247,350 C 1305.2360088365242,341.1064064801178 1372.618004418262,350.5532032400589 1440,360 C 1440,360 1440,600 1440,600 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient)"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
              transform="rotate(-180 720 300)"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%">
                <stop offset="5%" stopColor="#9900ef"></stop>
                <stop offset="95%" stopColor="#8ed1fc"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,600 C 0,600 0,480 0,480 C 59.08449926362297,501.7382179675994 118.16899852724595,523.4764359351988 180,524 C 241.83100147275405,524.5235640648012 306.40850515463916,503.83247422680415 364,481 C 421.59149484536084,458.16752577319585 472.19698085419736,433.19366715758474 534,444 C 595.8030191458026,454.80633284241526 668.8035714285713,501.39285714285717 732,497 C 795.1964285714287,492.60714285714283 848.588733431517,437.2349042709868 909,439 C 969.411266568483,440.7650957290132 1036.8414948453606,499.66752577319585 1099,508 C 1161.1585051546394,516.3324742268042 1218.0452871870398,474.09499263622973 1274,461 C 1329.9547128129602,447.90500736377027 1384.97735640648,463.9525036818851 1440,480 C 1440,480 1440,600 1440,600 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient)"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-3"
              transform="rotate(-180 720 300)"
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute  z-20 left-0 right-0">
        <div
          className="mt-[130px] xl:mt-[150px] lg:mt-[150px] 
           md:mt-[150px] text-center
         text-white p-4"
        >
          <h1
            style={{ textShadow: "1px 3px 3px gray" }}
            className=" text-[2rem] xl:text-9xl xl:leading-2
            lg:text-[5rem]
            text-black lg:text-white md:text-white xl:text-white  
            font-bold capitalize  flex items-center justify-center font-title 
            tracking-wider md:tracking-widest lg:tracking-widest xl:tracking-widest"
          >
            {<SectionSlate initialValue={title} previewMode />}
          </h1>

          <p className="text-black lg:text-purple-900 text-sm xl:text-2xl lg:mt-4">
            {<SectionSlate initialValue={subTitle} previewMode />}
          </p>



          <motion.button
            initial={{
              boxShadow: "inset 0px 0px 1px 2px  white",
              background: "#7329ac",
            }}
            whileHover={{
              boxShadow: "inset 2px 4px 5px gray",
              background: "#eee",
              color: "black",
            }}
            exit={{
              boxShadow: "inset 0px 0px 1px 2px  white",
              background: "#7329ac",
            }}
            className="xl:text-[44px] rounded-[30px] hover:bg-lightpurple bg-purple mt-[10px] md:mt-[17px] xl:mt-16 
            px-[20px] xl:px-[75px] lg:px-[50px] p-2 font-semibold  transition-all duration-[0.6s]"
            style={{ boxShadow: "inset 0px 0px 1px 2px  white" }}
          >
            Let's Talk
          </motion.button>

        </div>
      </div>

      {/* <div
        className="absolute hidden lg:hidde n  xl:inline-block z-30 xl:left-[20px]  
       top-[218px] xl:top-[218px] lg:top-[91px] lg:left-[50px]"
      >
        <img src={images.gh1} className="w-[340px] lg:inline-block lg:w-[80%] xl:w-[270px]" />
      </div>
      <div
        className="absolute z-30  hidden sm:hidden  
        md:hidden xl:inline-block lg:hidden top-[260px] xl:top-[160px] w-[60%] 
        xl:right-[19px]
         xl:w-[15%] 
         lg:w-[200px]
         lg:top-[100px]
         lg:right-[120px]         
         ">
        <img
          src={images.gh2}
          className="w-[340px] lg:rotate-[7deg]  "
        />
      </div> */}
    </header>
  );
};

