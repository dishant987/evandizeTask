import React, { useState } from 'react';
import NavButton from './navButton';

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { text: 'Home', isActive: false },
        { text: 'Events', isActive: false },
        { text: 'Competitions', isActive: true },
        { text: 'Register', isActive: false },
        { text: 'Add an Event', isActive: false },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="relative">
            {/* Desktop View */}
            <div className="hidden md:flex flex-wrap gap-10 justify-end self-end text-2xl p-[47px]">
                <div className="flex flex-wrap gap-10 items-start my-auto text-white">
                    {navItems.map((item, index) => (
                        <div key={index} className={`gap-2.5 ${item.isActive ? 'font-bold text-orange-400' : 'text-white'}`}>
                            {item.text}
                        </div>
                    ))}
                </div>
                <div className="flex gap-6 items-center my-auto font-semibold">
                    <NavButton isOutlined>Login</NavButton>
                    <NavButton>Sign Up</NavButton>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f54a31e03bce99bad500352c97d87ca98a5719118931fd42cee529f40dba805f?placeholderIfAbsent=true&apiKey=1b800a32eafa4ceda4739330db92f3bd"
                        className="object-contain shrink-0 w-20 aspect-square"
                        alt="Logo"
                    />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 text-white">
                <div className="text-2xl font-bold">Logo</div>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}
            >
                <div className="p-4">
                    <button onClick={toggleSidebar} className="text-white mb-4 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="flex flex-col gap-6">
                        {navItems.map((item, index) => (
                            <div key={index} className={`text-lg ${item.isActive ? 'font-bold text-orange-400' : 'text-white'}`}>
                                {item.text}
                            </div>
                        ))}
                        <NavButton isOutlined>Login</NavButton>
                        <NavButton>Sign Up</NavButton>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
