export function Footer(){
return(
    <footer className="bg-white dark:bg-gray-900 mt-10">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-8 lg:py-10 md:grid-cols-4" >
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Fatora<span className="text-teal-500">Hub</span></h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Servces</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">ContactUS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">AboutUS</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
        <div className="flex mx-auto px-4 py-6 bg-gray-100 dark:bg-gray-700 items-center justify-center ">
        <span className=" text-sm text-gray-500 dark:text-gray-300 text-center">© 2025 <a href="https://flowbite.com/">MoTaher</a>. All Rights Reserved.
        </span>
    </div>
</footer>

)
}