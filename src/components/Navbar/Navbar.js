import React ,{useRef} from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../Images/logo001.png';


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Services', href: '/Service', current: false },
  { name: 'About Us', href: '/AboutUs', current: false },
  { name: 'Contact Us', href: '/ContactUs', current: false },
//   { name: 'Projects', href: '/Projects', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();
  const disclosurePanelRef = useRef(null); // Ref for the Disclosure.Panel

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

 
  const handleLinkClick = () => {
      // Close mobile menu on link click
    if (disclosurePanelRef.current) {
      disclosurePanelRef.current.close(); // Close the Disclosure.Panel
    }
  };
  return (
      <div className="flex flex-col md:flex-row items-center ">
      
      <div className="relative">
        

      <a href= '/' aria-label="web site" className="block">
        <img
          className="hidden max-h-16 w-auto lg:block"
          src= {logo}
          alt="Your Company"
        />
      </a>
      </div>
        <Disclosure as="nav" className="bg-neutral-200  top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-10">
          {({ open }) => (
              <>
                <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-14 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                       <a href='' aria-label="web site" className="block">
                        <img
                            className="block h-14 w-auto lg:hidden"
                            src = {logo}
                            alt="Your Company"
                        />
                        </a>

                      </div>
                      <div className="hidden sm:ml-6 max-h-14 sm:block">
                        <div className="flex justify-center space-x-2">
                          {updatedNavigation.map((item) => (
                              <NavLink
                                  key={item.name}
                                  to={item.href}
                                  className={classNames(
                                      item.current
                                          ? 'bg-green-500 text-white'
                                          : 'text-white hover:bg-green-500 hover:text-white',
                                      'rounded-md px-3 py-1  text-1xl font-bold'
                                  )}

                                  aria-current={item.current ? 'page' : undefined}
                                  
                              >
                                {item.name}
                              </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* Add any other components or icons you want here */}
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden" ref={disclosurePanelRef}>
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {updatedNavigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={classNames(
                                item.current
                                    ? 'bg-green-500 text-white'
                                    : 'text-black hover:bg-green-400 hover:text-white',
                                'block rounded-md px-3 py-2 text-1xl font-bold'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            onClick={handleLinkClick}
                       >
                          {item.name}

                        </NavLink>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
          )}
          
        </Disclosure>
      </div>

  );
}