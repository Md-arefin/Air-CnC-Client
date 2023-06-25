import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading
                title='No Rooms Available In This Category!'
                subtitle='Please Select Other Categories'
            ></Heading>
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src="https://i.ibb.co/kH2W7wk/maxresdefault-2.webp"
                    alt="" />
            </div>
        </>
    );
};

export default Header;