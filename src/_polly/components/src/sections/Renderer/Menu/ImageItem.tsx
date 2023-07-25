import { motion } from 'framer-motion'

export default function MENUTextItem({ image }: { image: string }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full h-full mx-auto"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center justify-center text-center duration-300 hover:bg-opacity-60 hover:bg-black h-full text-neutral-content">
          <div className="max-w-md">
            <div className="duration-200 bg-opacity-0 border-none hover:bg-opacity-0 hover:border-none hover:rotate-45">
              <div className="w-full">
                <div className="w-[50px] bg-white h-[1px]"></div>
                <div className="w-[50px] rotate-90 bg-white h-[1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
