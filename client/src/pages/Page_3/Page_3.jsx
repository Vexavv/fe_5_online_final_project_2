import React,{useEffect, useState} from 'react';
import Card from './Card/Card'
function Page3(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(list => {
                setProducts(list)
            })
    }, [])
    console.log(products)
    return (
        <div>
            <h1>Welcome to Page #3</h1>
            {products.map(item => {
               return <Card {...item}  key={item._id}
                            item={item}/>
            })}
        </div>
    );
}

export default Page3;