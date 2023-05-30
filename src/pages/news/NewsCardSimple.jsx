import React from 'react';

const NewsCardSimple = ({item}) => {

    return (
        <div className={box}>
            <div className={img} style={{backgroundImage: `url(${item.urlToImage})`}}/>
            <div className='flex-col flex h-1/2 self-end justify-between '>
                <h1 className={header}>{item.title}</h1>
                <p className={descStyle}>{item.description}</p>
                <div className={auth}>{item.author}</div>
            </div>
        </div>
    );
};

export default NewsCardSimple;

const box = 'mb-4 mx-1 flex min-h-[500px] flex-col relative sm:w-full md:w-[48%] w-[32%]  bg-white rounded-lg overflow-hidden shadow-lg';
const header = 'absolute top-10 left-0 right-5 text-white bg-black bg-opacity-50 p-2 rounded';
const descStyle = 'p-10  italic text-gray-500 text-ellipsis overflow-hidden';
const auth = ' text-end mr-4 mb-4 mt-auto ';
const img = 'w-full h-1/2 bg-center bg-cover bg-no-repeat';