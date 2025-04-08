import React from 'react'

const Service = () => {
  return (
    <div className="w-full font-medium">
      {/* Hero Section */}
        {/* === HERO SECTION === */}
        <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] bg-gradient-to-br from-pink-500 via-blue-400 to-yellow-400 flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-48 gap-y-8 sm:gap-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
         Service
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            At PCB Technology, we offer a wide range of vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-12 sm:h-16 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>
    </div>
  )
}

export default Service
