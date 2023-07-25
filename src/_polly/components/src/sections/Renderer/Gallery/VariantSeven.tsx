import { GallerySection } from '../../types';
import '../../../css/custom.css'
const Fade = require("react-reveal/Fade")

const VariantSeven = ({ section }: { section: GallerySection }) => {
      return (
            <div className="text-[40px] mb-[30px] mt-[20px]">
                  <div className="container mx-auto px-8 text-center">
                  <h3 className="col px-3 mr-[80px] px-sm-2 px-md-0 lg:text-[2.5em] text-right">HIGHLIGHTS</h3>
                        <div className=" container w-[1300px]  max-w-full grid-cols-6 space-y-2 lg:space-y-0 md:grid-col-3 lg:grid lg:gap-3 lg:grid-rows-3 mx-auto">
        {section.variables.map(({ data: { url, alt } }, idx) => {
          if (idx % 9 == 0) {
            return (
                <Fade top delay={300}>
              <div className="w-full col-span-3 bg-violet-800">
              <Fade top delay={500}>
                <img className="tmp-highlight-inner object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
                </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 1) {
            return (
                <Fade top delay={300}>
              <div className="w-full col-span-3 bg-violet-800">
              <Fade top delay={500}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 2) {
            return (
                <Fade top delay={400}>
              <div className="w-full col-span-2 bg-violet-800">
              <Fade top delay={600}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 3) {
            return (
                <Fade top delay={500}>
              <div className="w-full col-span-4 bg-violet-800">
              <Fade top delay={700}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
                </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 4) {
            return (
                <Fade top delay={600}>
              <div className="w-full col-span-3 bg-violet-800">
                <Fade top delay={800}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 5) {
            return (
                <Fade top delay={700}>
              <div className="w-full col-span-2 bg-violet-800">
                <Fade top delay={900}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 6) {
            return (
                <Fade top delay={800}>
              <div className="w-full col-span-1 bg-violet-800">
                <Fade top delay={1000}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 7) {
            return (
                <Fade top delay={800}>
              <div className="w-full col-span-4 bg-violet-800">
                <Fade top delay={1000}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
             </Fade>
              </div>
              </Fade>
            )
          } else if (idx % 9 === 8) {
            return (
                <Fade top delay={800}>
              <div className="w-full col-span-2 bg-violet-800">
                <Fade top delay={1000}>
                <img className="object-cover object-center bg-black w-full h-full" src={url} alt={alt} />
              </Fade>
              </div>
              </Fade>
            )
          }
        })}
      </div>
                  </div>
            </div>
      );
};

export default VariantSeven;


// <div className="tmp-highlight tmp-highlight-top">
// <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
  
//       <Fade top delay={1}>
//             <div style={{backgroundColor: "#FF906F", marginBottom: "30px"}}>
//                   <Fade top delay={50}>
//                         <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[0].img})`}}></div>
//                   </Fade>
//             </div>
//       </Fade>
//       <Fade top delay={200}>
//             <div style={{backgroundColor: "#FF906F"}}>
//                   <Fade top delay={300}>
//                         <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[1].img})`}}></div>
//                   </Fade>
//             </div>
//       </Fade>
// </div>
// <div>
//       <Fade top delay={400}>
//             <div style={{backgroundColor: "#FF906F"}}>
//                   <Fade top delay={600}>
//                         <div className="tmp-highlight-inner" style={{height: '600px', backgroundImage: `url(${data[2].img})`}}></div>
//                   </Fade>
//             </div>
//       </Fade>
// </div>
// </div>
// <div className="tmp-highlight tmp-highlight-middle">
// <Fade top delay={600}>
//       <div style={{backgroundColor: "#FF906F"}}>
//             <Fade top delay={900}>
//                   <div className="tmp-highlight-inner" style={{height: '300px', backgroundImage: `url(${data[3].img})`}}></div>
//             </Fade>
//       </div>
// </Fade>
// <Fade top delay={700}>
//       <div style={{backgroundColor: "#FF906F"}}>
//             <Fade top delay={1000}>
//                   <div className="tmp-highlight-inner" style={{height: '300px', backgroundImage: `url(${data[4].img})`}}></div>
//             </Fade>
//       </div>
// </Fade>
// </div>
// <div className="tmp-highlight tmp-highlight-bottom">
// <div>
//       <Fade top delay={300}>
//             <div style={{backgroundColor: "#FF906F"}}>
//                   <Fade top delay={500}>
//                         <div className="tmp-highlight-inner" style={{height: '600px', backgroundImage: `url(${data[5].img})`}}></div>
//                   </Fade>
//             </div>
//       </Fade>
// </div>
// <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
//       <Fade top delay={500}>
//             <div style={{backgroundColor: "#FF906F", marginBottom: "30px"}}>
//                   <Fade top delay={700}>
//                         <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[6].img})`}}></div>
//                   </Fade>
//             </div>
//       </Fade>
//       <Fade top delay={700}>
//             <div className="tmp-highlight-inner" style={{height: '285px', backgroundColor: "#FF906F"}}>
//                   {/* <h1>LET'S CHAT!</h1> */}
//             </div>
//       </Fade>
// </div>

// </div>