// Khuôn mẫu chiến lược thành Rome đến Shopee

// 1. định nghĩa từng loại công việc khác nhau
const defaultPrice = (originalPrice) => {
  return originalPrice;
};
const preOrderPrice = (originalPrice) => {
  return originalPrice * 0.8;
};
const promotionPrice = (originalPrice) => {
  return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 30;
};

// ............
// 2. cho vào 1 kho quản lý
const getPriceStrategy = {
  default: defaultPrice,
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  // ...........
};

// 3. gọi ra và sử dụng
const getPrice = (originalPrice, typePromotion) => {
  return getPriceStrategy[typePromotion](originalPrice);
};

getPrice(200, "default"); // output: 200
getPrice(34, "preOrder"); // output: 27.200000000000003
