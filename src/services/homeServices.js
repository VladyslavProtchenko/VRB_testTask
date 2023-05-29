const homeServices = {
    createNews(title, desc, news, setNews, setIsModalOpen){
        const oneNew = {
            title: title,
            description: desc,
            urlToImage: '',
            author:'me'
        }
        setNews([...news, oneNew]);
        setIsModalOpen(false);
    },

    editNews(id, title, desc, img, news, setNews){
        const oneNew = {
            title: title,
            description: desc,
            urlToImage: img,
            author:'me'
        }
        console.log(oneNew);
        setNews(news.map(item => (item.title === id? oneNew : item)))
    },

    deleteCard(id, news, setNews){
        const filteredNews = news.filter(item => item.title !== id)
        setNews(filteredNews)
    },

    pinNews(id, news, pinedNews, setPinedNews){
        const pinned = news.filter(item => item.title === id)
        if(pinedNews?.title == id ) {return setPinedNews(null)}
        setPinedNews(...pinned);
    },

    debounce(callback, delay) {
        let timeout;
        return function (...args) {
            const fn = () => { callback.apply(this, args) };
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay);
        }
    }

}

export default  homeServices;