import React from 'react';
import { useState } from 'react';
import homeServices from '../../services/homeServices';

const AddModal = ({ closeModal, news, setNews}) => {
    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('')

    return (
        <div className={box}>
            <div className={modal}>
                title
                <input className={input} value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="title" />
                description
                <input className={input} value={desc} onChange={(e)=>{setDesc(e.target.value)}} type="text" placeholder="description" />
                <button  className={input} onClick={()=>homeServices.createNews(title, desc, news, setNews, closeModal)}>create</button>
                <button  className={input} onClick={()=>closeModal(false)}>undo</button>
                
            </div>
        </div>
    );
};

export default AddModal;

const modal = "flex flex-col relative bg-white rounded p-10 h-min"
const box = 'z-10 flex flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 '
const input = 'border outline-none rounded px-2 mb-2'