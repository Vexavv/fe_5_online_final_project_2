// import React, {useState, useEffect} from 'react';
// import styles from './FilterBestSeller.module.scss'
// import BestSellerItem from "./BestSellerItem";

// function FilterBestSeller(props) {
//     const [state, setState] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:3001/api/products')
//             .then(res => res.json())
//             .then(list => {
//                 setState(list)
//             })
//     }, [])
//     return (
//         <ul className={styles.List}>
//             {state.map((item,) => <BestSellerItem key={item._id} item={item} {...item}/>)}
//         </ul>
//     );
// }

// export default FilterBestSeller;
