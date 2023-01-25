import React, { useState, useEffect } from 'react';


const PostWidget = () => {


    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Haello</h3>
            <div className="flex items-center w-full mb-4">
                <div className="w-16 flex-none">
                </div>
                <div className="flex-grow ml-4">
                    <p className="text-gray-500 font-xs">12/01/22</p>
      
                </div>
            </div>
        </div>
    );
};

export default PostWidget;