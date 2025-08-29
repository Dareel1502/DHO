import ProfileImg from "../assets/profile.jpg";

export default function Home({ darkMode }) {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 transition-colors duration-500
                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-4 sm:space-y-6 lg:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I’m <span className="text-yellow-500">Daryl Hans Ocao</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
          I’m a <span className="font-semibold">Full Stack Developer</span> specializing in building professional web applications.
          I love turning ideas into real-life digital products.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8">
          <a
            href="https://github.com/Dareel150"
            className="inline-block bg-yellow-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-medium 
                       hover:bg-yellow-600 transition"
          >
            Github
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center">
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-48 sm:w-56 md:w-64 lg:w-80 h-48 sm:h-56 md:h-64 lg:h-80 rounded-full object-cover shadow-lg 
                     border-4 border-yellow-500 dark:border-yellow-400 transition-colors duration-500"
        />
      </div>
    </section>
  );
}
