import s from "./Total.module.scss";
import { Card, CardContent } from "@mui/material";

import { useSelector } from "react-redux";

import TotalProduct from "./TotalProduct";

const Total = () => {
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);

  const checkoutProduct = useSelector((state) => state.card.products);
  console.log(checkoutProduct);
  const subTotalPr = checkoutProduct.reduce(
    (acc, curr) => acc + curr.product.currentPrice * curr.cartQuantity,
    0
  );
  const subTotalPriceUSer = checkoutProduct.reduce(
    (acc, curr) => acc + curr.product.totalPrice * curr.product.amount,
    0
  );

  const totalPr = isLogged
    ? subTotalPr + subTotalPr * 0.1
    : subTotalPriceUSer + subTotalPriceUSer * 0.1;

  return (
    <Card
      className={s.cardPrice}
      sx={{ marginTop: 0, marginBottom: 2, bgcolor: "rgb(241,241,241)" }}
    >
      <CardContent sx={{ paddingY: 2, paddingX: 3 }}>
        {checkoutProduct.map((product) =>
          isLogged ? (
            <TotalProduct
              key={product.product._id}
              name={product.product.name}
              currentPrice={product.product.currentPrice}
              imageUrls={product.product.imageUrls}
              amount={product.cartQuantity}
            />
          ) : (
            <TotalProduct key={product._id} {...product.product} />
          )
        )}

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
            <div className={s.subtotalPrice}>
              ${isLogged ? subTotalPr : subTotalPriceUSer}.00
            </div>
          </div>
          <div className={s.shipping}>
            <div className={s.shippingTitle}>Estimated taxes</div>
            <div className={s.shippingPrice}>
              ${((isLogged ? subTotalPr : subTotalPriceUSer) * 0.1).toFixed(2)}
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
