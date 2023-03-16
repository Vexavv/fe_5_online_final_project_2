import s from './Total.module.scss';
import { Card, CardContent } from '@mui/material';

const Total = () => {
  return (
    <Card
      className={s.cardPrice}
      sx={{ marginTop: 0, bgcolor: 'rgb(241,241,241)' }}
    >
      <CardContent sx={{ paddingY: 10, paddingX: 3 }}>
        <div className={s.products}>
          <div className={s.product}>
            <div className={s.productName}>
              <div className={s.productImg}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/14_64x64.jpg"
                  alt="rubix"
                />
              </div>
              <div className={s.productTitle}>
                <p>Victo pedant lamp</p>
              </div>
            </div>
            <div className={s.productPrice}>$79.00</div>
          </div>
        </div>
        <hr />
        <div className={s.discaunt}>
          <div className={s.discauntInpt}>
            <input type="text" name="Discaunt" placeholder="Discaunt code" />
          </div>
          <div className={s.discauntBtn}>
            <button name="button" type="button">
              Applay
            </button>
          </div>
        </div>
        <hr />
        <div className={s.sub}>
          <div className={s.subtotal}>
            <div className={s.subtotalTitle}>Subtotal</div>
            <div className={s.subtotalPrice}>$138.00</div>
          </div>
          <div className={s.shipping}>
            <div className={s.shippingTitle}>Shipping</div>
            <div className={s.shippingPrice}>$19.77</div>
          </div>
        </div>
        <hr />
        <div className={s.total}>
          <div className={s.totalTitle}>Total</div>
          <div className={s.totalPrice}>$157.77</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Total;
