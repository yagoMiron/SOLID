import { ExpiringDiscount } from "./models/ExpiringDiscount";
import { Product } from "./models/Product";
import { PromoDiscount } from "./models/PromoDiscount";
import { VipDiscount } from "./models/VipDiscount";

const vipProduct = new Product("Arroz", 100, new VipDiscount());
console.log(`Preço final (VIP): R$ ${vipProduct.getFinalPrice()}`);

const promoProduct = new Product("Feijão", 100, new PromoDiscount());
console.log(`Preço final (Promoção): R$ ${promoProduct.getFinalPrice()}`);

const expiringProduct = new Product("Leite", 100, new ExpiringDiscount());
console.log(
  `Preço final (Perto do Vencimento): R$ ${expiringProduct.getFinalPrice()}`
);
