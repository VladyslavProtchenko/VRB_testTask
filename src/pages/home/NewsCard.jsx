import React from 'react';
import { useState } from 'react';
import homeServices from '../../services/homeServices';

const NewsCard = ({item, news, setNews, pinedNews, setPinedNews}) => {
    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('') 
    const [isEdit, setIsEdit] = useState(false)
    
    return (
        <div className={box}>

            <span className={pinPostIcon} onClick={()=>homeServices.pinNews(item.title, news, pinedNews, setPinedNews)}>push_pin</span>

            <div className={functions}>
                <span className={edit} onClick={()=>{
                    if(item.author !== 'me') return;
                    setIsEdit(true)
                }}>more_vert</span>
                <span className={deleteItem} onClick={()=>{
                            if(item.author !== 'me') return;
                            homeServices.deleteCard(item.title, news, setNews)
                        }
                }>delete_forever</span>
            </div>


            <div className={img} style={{backgroundImage: `url(${item.urlToImage})`}}/>
            <div className='flex-col flex h-1/2 self-end justify-between '>
                <h1 className={header}>{item.title}</h1>
                <p className={descStyle}>{item.description}</p>
                <h2 className={auth}>{item.author}</h2>
            </div>


            <div className={isEdit? editWindow: 'hidden'}>
                <h1 className='mb-2'>Change what you want to change</h1>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className={input}/>
                <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className={input}/>
                <button className={editBtn} onClick={()=>{ homeServices.editNews(item.title, title, desc,item.urlToImage, news, setNews); setIsEdit(false)}}>submit</button>
            </div>

        </div>
    );
};

export default NewsCard;

//styles 
const editBtn = 'bg-rose-500 rounded self-start px-3 text-white'
const editWindow = "p-4 flex flex-col absolute top-0 left-0 right-0 bottom-0 bg-white"
const input = 'outline-none border px-2 mb-2'
const pinPostIcon = 'material-symbols-outlined cursor-pointer absolute text-gray-200 text-xl rotate-45 left-1 bg-black bg-opacity-50 rounded-full px-1 top-1'
const functions = 'flex align-center justify-center absolute text-gray-200 bg-black text-xl bg-opacity-50 px-2  py-[1px] rounded-full top-1 right-1'
const deleteItem = 'material-symbols-outlined text-base cursor-pointer '
const edit = 'material-symbols-outlined text-base flex flex-col justify-center align-center  cursor-pointer'

const box = 'flex min-h-[300px] flex-col relative sm:w-full md:w-1/2 w-1/3 bg-white rounded-lg overflow-hidden shadow-lg mb-3';
const header = 'absolute top-10 left-0 right-5 text-white bg-black bg-opacity-50 p-2 rounded';
const descStyle = 'p-4 text-xs italic text-gray-500 ';
const auth = 'text-sm text-end mr-4 mb-4 mt-auto ';
const img = 'w-full h-1/2 bg-center bg-cover bg-no-repeat';

