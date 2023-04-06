import s from './Total.module.scss';
import { Card, CardContent } from '@mui/material';

import { useSelector } from 'react-redux';

import TotalProduct from './TotalProduct';

const Total = () => {
  const checkoutProduct = useSelector((state) => state.card.products);

  const subTotalPr = checkoutProduct.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0
  );

  const totalPr = subTotalPr + subTotalPr * 0.1;

  return (
    <Card
      className={s.cardPrice}
      sx={{ marginTop: 0, marginBottom: 2, bgcolor: 'rgb(241,241,241)' }}
    >
      <CardContent sx={{ paddingY: 2, paddingX: 3 }}>
        {checkoutProduct.map((product) => (
          <TotalProduct key={product._id} {...product} />
        ))}

        <hr />
        {/* <div className={s.discaunt}>
          <div className={s.discauntInpt}>
            <input type="text" name="Discaunt" placeholder="Discaunt code" />
          </div>
          <div className={s.discauntBtn}>
            <button name="button" type="button">
              Applay
            </button>
          </div>
        </div>
        <hr /> */}
        <div className={s.sub}>
          <div className={s.subtotal}>
            <div className={s.subtotalTitle}>Subtotal</div>
            <div className={s.subtotalPrice}>${subTotalPr}.00</div>
          </div>
          <div className={s.shipping}>
            <div className={s.shippingTitle}>Estimated taxes</div>
            <div className={s.shippingPrice}>
              ${(subTotalPr * 0.1).toFixed(2)}
            </div>
          </div>
        </div>
        <hr />
        <div className={s.total}>
          <div className={s.totalTitle}>Total</div>
          <div className={s.totalPrice}>${totalPr}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Total;
