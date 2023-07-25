const TestimonialItem = () => {
  return <div></div>
}

export default TestimonialItem
// import { motion } from 'framer-motion'
// export default function TESTIMONIALTextItem({
//   image,
//   title,
//   subtitle,
//   description,
//   viewport,
// }: {
//   image: string
//   title: string
//   subtitle: string
//   description: string
//   viewport: object
// }) {

//   return (
//     <div className="grid lg:grid-cols-2 gap-6">
//       <div className="grid items-between order-last lg:order-none">
//         <div className="pt-12 lg:pt-0">
//           <div className="lg:flex lg:justify-between pb-4 lg:pb-6">
//             <button
//               className={`hidden lg:block text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}
//             >
//               {title}
//             </button>
//             <p className="text-[16px] text-[#e9e9e9]">{subtitle}</p>
//           </div>
//           <p className="text-[16px] md:text-[24px] lg:text-3xl text-white lg:leading-10">{description}</p>
//         </div>
//         <div className="flex justify-between lg:items-end pt-12 lg:pt-0">
//           <button className="text-white text-[16px] hover:underline custom-swiper-button-prev">Previous</button>
//           <button className="text-white text-[16px] hover:underline  lg:hidden custom-swiper-button-next">Next</button>
//           <div className="hidden lg:flex  space-x-48">
//             <h5 className="text-white ">111</h5>
//             <button className="text-white text-[16px] hover:underline z-50 custom-swiper-button-next">Next</button>
//           </div>
//         </div>
//       </div>
//       <motion.div initial="offscreen" whileInView="onscreen" viewport={viewport}>
//         <motion.div variants={viewImgVariants}>
//           <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] lg:pb-6">
//             <div className="flex justify-between pb-6">
//               <button className={`lg:hidden text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}>
//                 Testimonials
//               </button>
//               <h5 className="text-white lg:hidden">111</h5>
//             </div>

//             {image && <img className="w-full h-full rounded-xl" src={image} alt="" />}
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }
