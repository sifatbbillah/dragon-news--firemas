import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoriesNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
const [CategoriesNews, setCategoriesNews] = useState([]);


    // console.log(id,data);

    useEffect(() =>{
        if(id=="0"){
            setCategoriesNews(data);
            return;

        }else if (id=="1"){
    const filterednews = data .filter(news =>news .others.is_today_pick == true);
    setCategoriesNews(filterednews);
        }
        else {
const filterednews = data .filter(news =>news .category_id == id);

setCategoriesNews(filterednews)

};
    },[data,id])
    return (
        <div><h2 className='font-bold mb-5'>
            Total <span> {CategoriesNews.length} News 
                </span>
                Found
            </h2>

            <div className='grid grid-cols-1 gap-5'>
{
    CategoriesNews.map(news => <NewsCard key={news.id} news= {news}>

    </NewsCard>)
}
            </div>
        </div>
    );
};

export default CategoriesNews;