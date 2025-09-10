import React from 'react';

const Navbar = () => {
    return (
        <div className='w-[90%] mx-auto min-h-[100px] border '>
            <div className='text-right'>English</div>
            <div className="navbar bg-green-700  shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='flex flex-wrap'>
                    <li>
                        home
                    </li>     
                </ul>
            </div>
        </div>
    );
};

export default Navbar;