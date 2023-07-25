
import { ContactUsSection } from '../../types'

export default function VariantTwelve({ section }: { section: ContactUsSection }) {
  const title = section.variables.find(variable => variable.name === 'TITLE')?.data ?? 'Our leasing agents are available for virtual and in-person visits.'
  
  return (
    <div id="contact" className="bg-[#2E4239]">
      <div className="hero">
        <div className="text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 ">

            <div className="w-full flex flex-col my-6 py-6 lg:my-0 lg:pr-16 px-4 lg:mt-36 lg:mx-8 gap-4 lg:gap-10">
              <h1 className="lg:text-8xl text-5xl font-medium">BOOK A CALL</h1>
              <p className='lg:text-2xl'>
                {title}
              </p>

              <form>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="FIRST NAME " />

                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="LAST NAME" />

                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="EMAIL" />

                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="NUMBER" />

                  </div>
                </div>
                <button type="submit" className="bg-white w-full mt-8 text-neutral p-3 text-black hover:bg-opacity-0 hover:text-white hover:border border">Submit</button>
              </form>

            </div>
            <div className="lg:p-10 p-4 lg:pr-24">
              <img
                src="https://assets.website-files.com/62701b7ce52f4ac3cc48cf3d/629fbe5791ac2fbeb6a554e7_2_Lobby_Front%20mirror%20view-p-800.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

