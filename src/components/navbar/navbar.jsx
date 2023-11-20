import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WestIcon from '@mui/icons-material/West';
import './navbar.css'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-amber-400 mt-0 m-2 rounded sticky top-1">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <img className="h-9 w-auto bg-white rounded" src="./images/logo.png" alt="" />
                        <span className="">بازرگانی غنودی</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        {/*<span className="sr-only"></span>*/}
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a className='no-underline text-black text-xl hover:underline' href="#home">خانه</a>
                    <a className='no-underline text-black text-xl hover:underline' href="#brands">برند ها</a>
                    <a className='no-underline text-black text-xl hover:underline' href="#callus">تماس با ما</a>
                    <a className='no-underline text-black text-xl hover:underline' href="#outAdress">آدرس های ما</a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="https://hgh-trading.ir" className="font-semibold leading-6 text-gray-900 flex items-center gap-2">
                        بیا بریم فروشگاه
                        <WestIcon className='lefter'/>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <img
                                className="h-8 w-auto"
                                src="./images/logo.png"
                                alt=""
                            />
                            <span className="">بازرگانی غنودی</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <CloseIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className=" mt-10 flex gap-5 items-center justify-between">
                                <a className='no-underline text-black text-xl hover:underline' href="#home">خانه</a>
                                <a className='no-underline text-black text-xl hover:underline' href="#brands">برند ها</a>
                                <a className='no-underline text-black text-xl hover:underline' href="#callus">تماس با ما</a>
                                <a className='no-underline text-black text-xl hover:underline' href="#ourAdress">آدرس های ما</a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="https://hgh-trading.ir"
                                    className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center justify-between gap-2 bg-amber-400"
                                >
                                    بیا بریم فروشگاه
                                    <WestIcon className='lefter'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}