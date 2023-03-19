import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.css'

const NotFound:FC = () => { 
    const navigate = useNavigate();
    useEffect(() =>{
        setTimeout(()=>{
            navigate('/');
        }, 3000)
    },[]);

    return (
        <main className='message-error'>
            Щось пішло не так або ви перейшли на сторінку якої не існує
        </main>
    );
};

export default NotFound;