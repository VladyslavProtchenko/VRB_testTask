import React, { useEffect, useState } from 'react';
import { useGetSwapDataTopicQuery } from '../../redux/swapApi';
import NewsCardSimple from './NewsCardSimple';
import { useDebounce } from '../../hooks/debounce';



const News = () => {
    const [news, setNews] = useState(null)
    const [titleFilter, setTitleFilter] = useState('')
    const [descriptionFilter, setDescriptionFilter] = useState('')
    const [topic, setTopic] = useState('')
    const [newsCount, setNewsCount] = useState(2)

    const debounce = useDebounce(topic)
    const debounceCount = useDebounce(newsCount)
    const {data} = useGetSwapDataTopicQuery({debounce, debounceCount})
    useEffect(() => {
        setNewsCount(5);
    },[topic])
    


    useEffect(() => {
        setNews(data?.articles)
    }, [newsCount])


    return (
        <div className={box}>

            {!data && <div className='mt-[200px]'>Loading...</div>}

            {data &&
            <section className={newsContainer}>
                <div className={header}>
                    <h1 className='text-center w-full'>INTERNET NEWS</h1>

                </div>
                <nav className={filters}>
                    <h1 className=' mb-3'>filters: here you can search by parameters</h1>
                    <div className='flex '>
                        <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value.toLowerCase())} placeholder='what you want know?' className={input} />
                        <input type="text" value={titleFilter} onChange={(e)=>setTitleFilter(e.target.value.toLowerCase())} placeholder='searching by title' className={input} />
                        <input type="text" value={descriptionFilter} onChange={(e)=>setDescriptionFilter(e.target.value.toLowerCase())} placeholder='searching by description'  className={input} />
                    </div>
                </nav>
                <div className={newsSection}>

                    {news && news.filter(item => item.title.toLowerCase().includes(titleFilter))
                                    .filter(item => item.description.toLowerCase().includes(descriptionFilter))
                                    .map((item) => (
                            <NewsCardSimple 
                                key={item.title} 
                                item={item}
                            />
                        ))
                    } 
                <h1 onClick={()=>setNewsCount(prev => prev += 5)} className={more}>show more</h1>
                </div>
            </section>
            }
        </div>
    );
};

export default News;

//styles
const filters = 'flex flex-col w-full items-start justify-start flex-wrap'
const input = 'outline-none border px-2 mb-2 mr-2' 
const header = 'flex bg-white items-center justify-between px-10 max-w-[940px] w-full'
const newsSection = 'flex flex-wrap p-10 bg-white w-full'
const newsContainer = 'flex flex-col justify-center items-center sm:max-w-[576px] sm:w-full w-[940px] '
const box = 'flex flex-col flex-auto '


const more = 'text-center w-full mt-10 hover:text-gray-300 cursor-pointer'

