import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://www.instagram.com/keto4life34/" className="flex items-center mb-4 sm:mb-0" rel="nofollow noopener noreferrer" target="_blank">
              <img src="/instagram.svg" className="mr-3 h-8" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Keto Life</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          
              <li>
                <Link href="/privacy-policy">
                  <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </Link>
              </li>
              
          </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/"><a className="hover:underline">Keto Life</a></Link>. All Rights Reserved.
      </span>
    </footer>
  );
}
