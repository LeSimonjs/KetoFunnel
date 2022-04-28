import Image from "next/image";
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="flex flex-col items-start justify-center space-y-5 max-w-md">
        <p className="text-xl font-regular leading-relaxed mt-6 mb-4 text-gray-800"><strong>Free Cookbook</strong></p>
        <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-gray-800">
        21 Easy And Healthy 
        Keto Recipes You Need To Try!
        </h1>
        <Link href="subscribe">
          <a>
            <h2 className="p-4 font-bold bg-yellow-300 md:text-2xl mb-4 mt-4 hover:bg-yellow-400 text-gray-800">
              FREE DOWNLOAD 
            </h2>
          </a>
        </Link>
        <div className="border-t-4 pt-4">
          <p className="text-xl font-regular leading-relaxed mt-6 mb-4 text-gray-800"><strong>Losing weight may not seem easy right away—but it can be.</strong></p>

          <p className="text-xl font-regular leading-relaxed mt-6 mb-4 text-gray-800">With the perfect balance of ingredients, instruction, and 
            examples, this brand-new cookbook features three chapters, 
            over 10,000 words, and a mixture of breakfast, dinner and 
            lunch recipes.</p>

            <p className="text-xl font-regular leading-relaxed mt-6 mb-4 text-gray-800">And all of it is designed to deliver you an unparalleled 
              new way of losing weight.— <strong>completely free.</strong></p>
        </div>
    </div>
  );
}
