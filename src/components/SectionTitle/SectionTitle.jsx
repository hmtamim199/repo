import React from 'react';

const SectionTitle = ({subeading, heading}) => {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
      <p className='text-yellow-600 '>---{subeading}---</p>
      <h3 className='text-3xl uppercase border-y-4 py-8 border-opacity-30  '>{heading}</h3>
    </div>
  );
};

export default SectionTitle;