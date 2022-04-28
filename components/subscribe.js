
const Subscribe = () => {
    return (
      <div className="border border-gray-200 rounded p-6 my-4 w-full bg-white backdrop-filter backdrop-blur-lg bg-opacity-75">
        <p className="text-gray-900 mb-6 text-lg md:text-xl">
        ONE STEP LEFT! :-)
        </p>
        <p className="text-gray-800 dark:text-gray-400 mb-10 text-base">
        To which e-mail address should we send the cookbook?
        </p>
        <form className="relative my-4">
          <input
            aria-label="Email for newsletter"
            placeholder="john@email.com"
            type="email"
            autoComplete="email"
            required
            className="py-4 px-0 text-md bg-transparent w-9/12 text-gray-900 border-b-2 border-gray-600 dark:border-gray-400 dark:text-white focus:border-brand focus-visible:outline-none"
          />
          <button
            className="flex justify-center px-5 py-4 mt-8 bg-green-600 text-white font-bold text-lg"
            type="submit"
          >
            SEND NOW
          </button>
        </form>
  
        <p className="text-xl text-gray-800 dark:text-gray-200">
          14 subscribers . 3 issues
        </p>
      </div>
    );
  };
  
  export default Subscribe;