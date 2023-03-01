import React from "react";
import styles from "./Bestsellers.module.scss";

function Bestsellers(props) {
    return(
        <div className={styles.container}>
            <h2>Best Sellers Products</h2>
            <p>Top sale in this week</p>
            <div className={styles.flexWrapper}>
                <div>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_2_360x.jpg?v=1598253084" alt="" />
                        <h3>Arctander Chair</h3>
                        <p>$39.00</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <span>Sale</span>
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/28_360x.jpg?v=1586316960" alt="" />
                        <h3>Stainless steel teapot</h3>
                        <p><s>$59.00</s> $39.00</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <span>Sale</span>
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/29_2_360x.jpg?v=1586316900" alt="" />
                        <h3>Beoplay A1</h3>
                        <p><s>$59.00</s> $39.00</p>
                    </a>
                </div>    
                <div>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/30_1_360x.jpg?v=1586316781" alt="" />
                        <h3>Turning Table</h3>
                        <p>$59.00</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/3_2_360x.jpg?v=1586316386" alt="" />
                        <h3>Side Table</h3>
                        <p>$59.00</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/20_2_360x.jpg?v=1586314636" alt="" />
                        <h3>Pia Chair</h3>
                        <p>$59.00</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/15_2_360x.jpg?v=1586245185" alt="" />
                        <h3>Iconic Rocking Horse</h3>
                        <p>$89.00</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/2_2_360x.jpg?v=1586245114" alt="" />
                        <h3>Outdoor Dining Table</h3>
                        <p>$59.00</p>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Bestsellers;