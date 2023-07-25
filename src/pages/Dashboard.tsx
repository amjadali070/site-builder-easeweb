import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import up1 from './up1.svg'

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Newest first')

  const options = ['Newest first', 'Middle', 'Oldest']

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-row justify-start lg:justify-between md:justify-between gap-4 mt-14 md:gap-16 mx-3">
        <div className="lg:w-[500px] md:w-[125px] lg:h-[32px] lg:top[4px] lg:ml-24 md:ml-10 font-sans font-bold leading-[42px] hover:border border-gray-300">
          Articles
        </div>
        <div className='flex gap-4'>
          <div className="relative border border-gray-400 w-2/3 lg:w-[288px] lg:h-[32px] md:w-[288px] md:h-[32px] lg:mr-[460px] md:mr-[460px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-black w-[19.46] h-[19.46] top-[2.25px] ml-[2.25px] hover:border-dashed" />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="lg:h-[24px] md:h-[22px] lg:w-[228px] ml-10 lg:ml-[36px] md:ml-[42px]  rounded-none lg:py-[8px] md:py-[8px] py-[3px] px-[16px] pl-[12px] lg:mt-1 md:mt-1 hover:border border-gray-200"
            />
          </div>
          <div className='w-1/3'>
            <div className="Relative">
              <div
                className="flex w-[130px] h-[32px] md:-ml-[450px] border border-gray-200 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="ml-2 mt-1 w-[94px] h-[29px]">{selectedOption}</span>
                <img src={up1} alt="up" className="mt-3 w-[12px] h-[7px] ml-[7px]" />
              </div>
              {isOpen && (
                <div className="absolute w-[130px] lg:right-[354px] md:right-[190px]  right-[6px]  z-10 bg-white border border-gray-400 rounded-b">
                  {options.map(option => (
                    <div
                      key={option}
                      className={`px-4 py-2  text-sm cursor-pointer ${option === selectedOption ? 'bg-gray-200' : ''}`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bar
