import Image from 'next/image';
import easy from '../public/easy.gif'
import safe from '../public/safe.gif'
import bell from '../public/bell.gif'
import analytics from '../public/analytics.gif'
import { TextAnimate } from './ui/text-animate';
export function MiddleHeroSec(){
    return(
        <section className="py-16 px-6 text-center mb-20">

  <h1 className=" text-4xl sm:text-6xl md:font-semibold text-teal-500 mb-10"><TextAnimate animation="blurInUp" by="character" duration={3}>Why FatoraHub ?</TextAnimate></h1>
         

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
    {/* Feature 1 */}
    <div className="flex flex-col items-center gap-3">

      <Image src={easy} alt={"easy"} className="size-15 md:size-20"/>

      <h3 className="text-lg font-semibold">Fast & Easy</h3>
      <p className="text-sm text-gray-500">Create invoices in seconds—no hassle!</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center gap-3">
      <Image src={safe} alt={"safe"} className="size-15 md:size-18"/>
      <h3 className="text-lg font-semibold">Secure Payments</h3>
      <p className="text-sm text-gray-500">Keep your transactions safe and reliable.</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center gap-3">
      <Image src={bell} alt={"bell"} className="size-15 md:size-18"/>
      <h3 className="text-lg font-semibold">Smart Reminders</h3>
      <p className="text-sm text-gray-500">Never miss a payment deadline again.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center gap-3">
      <Image src={analytics} alt={"analytics"} className="size-15 md:size-18"/>
      <h3 className="text-lg font-semibold">Clear Insights</h3>
      <p className="text-sm text-gray-500">Track your invoices and cash flow easily.</p>
    </div>
  </div>
</section>
    )
}