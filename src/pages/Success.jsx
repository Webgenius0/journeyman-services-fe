import Done from '@/assets/Icons/Done';
import React from 'react';

const Success = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white rounded-lg  w-full text-center">
               <div className='flex justify-center'>
               <Done  />
               </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Your payment was successfully completed!
                </h3>
                <p className="text-lg text-gray-600">
                    Your transaction is being processed.
                </p>
            </div>
        </div>
    );
};

export default Success;
