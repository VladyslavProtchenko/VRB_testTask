import React, { useEffect, useState } from 'react';
import { useGetSwapDataQuery } from '../../redux/swapApi';
import NewsCard from './NewsCard';
import AddModal from './AddModal';

const Home = () => {
    const [news, setNews] = useState(null)
    const [pinedNews, setPinedNews] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [titleFilter, setTitleFilter] = useState('')
    const [descriptionFilter, setDescriptionFilter] = useState('')

    const {data} = useGetSwapDataQuery(5)

    useEffect(() => {
        setNews(data?.articles)
    }, [data])
    
    return (
        <div className={box}>

            {!data && <div className='mt-[200px]'>Loading...</div>}
            {isModalOpen&& <AddModal news={news} setNews={setNews} closeModal={setIsModalOpen} /> }

            {data &&
            <section className={newsContainer}>
                <div className={header}>
                    <h1 className='w-full text-center'>NEWS</h1>
                    <div className='text-xs'>изменять, удалять посты можно только созданные автором(самостоятельно), первые 5 без функционала, а так все можно потрогать, поклацать</div> 
                    <span className={add} onClick={()=>setIsModalOpen(true)}>add</span>
                </div>

                <nav className={filters}>
                    <h1 className='w-full mb-3'>filters: here you can search by parameters</h1>
                    <input type="text" value={titleFilter} onChange={(e)=>setTitleFilter(e.target.value.toLowerCase())} placeholder='searching by title' className={input} />
                    <input type="text" value={descriptionFilter} onChange={(e)=>setDescriptionFilter(e.target.value.toLowerCase())} placeholder='searching by description'  className={input} />
                </nav>

                <div className={newsSection}>
                    {pinedNews && <NewsCard pinedNews={pinedNews} setPinedNews={setPinedNews} item={pinedNews} news={news} setNews={setNews}/>}
                    {news && news.filter(item=> item !== pinedNews)
                                    .filter(item => item.title.toLowerCase().includes(titleFilter))
                                    .filter(item => item.description.toLowerCase().includes(descriptionFilter))
                                    .map((item) => (
                            <NewsCard 
                                key={item.title} 
                                item={item}
                                news={news}
                                setNews={setNews}
                                pinedNews={pinedNews}
                                setPinedNews={setPinedNews}
                            />
                        ))
                    } 
                </div>
            </section>
            }
        </div>
    );
};

export default Home;


const filters = 'flex items-center justify-start flex-wrap w-full'
const input = 'outline-none border px-2 mr-2 mb-2'
const header = 'flex space-x-2 bg-white items-center justify-between px-10 max-w-[940px] w-full'
const newsSection = 'flex flex-wrap p-10 bg-white w-full'
const add = 'material-symbols-outlined cursor-pointer'
const newsContainer = 'flex flex-col justify-center items-center sm:w-full  max-w-[940px] px-10'
const box = 'flex flex-col flex-auto '

