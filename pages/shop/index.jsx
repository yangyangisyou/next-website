import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import PageContainer from "../../shared/containers/Page";
import CardList from "../../shared/containers/CardList";
import { loadExamList } from "../../redux/actions/firebase";
import GoogleLogin from "../../shared/components/oauth/GoogleLogin";

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProductWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  border: solid black 1px;
  padding: 10px;
  width: 200px;

  p {
    margin: 10px;
  }
  .preview {
    height: 140px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-weight: 400;
      font-size: 16px;
    }
  }
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    .coin {
      width: 34px;
    }
    .money {
      width: 20px;
    }
    .remove {
      text-decoration: line-through;
      text-decoration-color: red;
      text-decoration-thickness: 2px;
    }
    .highlight {
      font-weight: 500;
      color: red;
    }
    span {
      margin: 0 10px;
    }
  }
  .footer {
  }

  @media (max-width: 767px) {
    width: 80%;
  }
`;

const donateProductList = [
  {
    id: 1,
    image: "/catCan.png",
    title: "給喵罐罐",
    desc: "給喵喵好吃的罐頭",
    price: 300,
  },
  {
    id: 2,
    image: "/feedCat.png",
    title: "餵食喵喵",
    desc: "你的贊助將會變成毛小孩的伙食",
    price: 500,
  },
  {
    id: 3,
    image: "/catMug.png",
    title: "贊助咖啡",
    desc: "你的贊助將成為我日後維護網站的動力",
    price: 1000,
  },
  {
    id: 4,
    image: "/shineCat.png",
    title: "VIP 試用 5 天",
    desc: "成為閃亮喵喵，搶先體驗時限內無限暢用本站功能",
    price: 600,
    salePrice: 100,
  },
  {
    id: 5,
    image: "/superCat.png",
    title: "VIP 暢用 30天",
    desc: "成為超級喵喵，時限內無限暢用本站功能",
    price: 3999,
  },
];

const chargeProductList = [
  {
    id: 1,
    image: "/coin.png",
    title: "1000個 喵喵幣",
    desc: "喵～買多少用多少",
    price: 100,
  },
];

const ProductTypeWrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const SubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  .icon {
    width: 32px;
  }
  h2 {
    margin: 20px;
    font-size: 20px;
  }
`;

const ShopPage = ({ router }) => {
  const dispatch = useDispatch();
  // const categoryState = useSelector((state) => state.firebase);
  return (
    <PageContainer>
      <h1>喵喵商店</h1>
      <p>
        用你的學習力量來贊助喵喵！透過學習賺取的喵喵幣可以讓你得到幫助喵喵的機會哦！
      </p>
      <ProductTypeWrapper>
        <SubHeaderWrapper>
          <img className="icon" src="/catIcon.png" alt="cat-icon" />
          <h2>支持喵喵</h2>
        </SubHeaderWrapper>
        <ProductListWrapper>
          {donateProductList.map((product) => (
            <ProductWrapper key={product.id}>
              <img
                className="preview"
                src={product.image}
                alt={product.title}
              />
              <div className="content">
                <p className="title">{product.title}</p>
                <p className="desc">{product.desc}</p>
                <div className="price">
                  <img className="coin" src="/coin.png" alt="cat-coin" />
                  {product.salePrice ? (
                    <span>
                      <span className="remove">{product.price}</span>
                      <span className="highlight">{product.salePrice}</span>
                    </span>
                  ) : (
                    <span>{product.price}</span>
                  )}
                </div>
              </div>
              <div className="footer">
                <button type="button" disabled>
                  coming soon
                </button>
              </div>
            </ProductWrapper>
          ))}
        </ProductListWrapper>
      </ProductTypeWrapper>
      <ProductTypeWrapper>
        <SubHeaderWrapper>
          <img className="icon" src="/catIcon.png" alt="cat-icon" />
          <h2>喵喵幣</h2>
        </SubHeaderWrapper>
        <ProductListWrapper>
          {chargeProductList.map((product) => (
            <ProductWrapper key={product.id}>
              <img
                className="preview"
                src={product.image}
                alt={product.title}
              />
              <div className="content">
                <p className="title">{product.title}</p>
                <p className="desc">{product.desc}</p>
                <div className="price">
                  <img className="money" src="/money.png" alt="money" />
                  <span>{product.price}</span>
                </div>
              </div>
              <div className="footer">
                <button type="button" disabled>
                  coming soon
                </button>
              </div>
            </ProductWrapper>
          ))}
        </ProductListWrapper>
      </ProductTypeWrapper>
    </PageContainer>
  );
};

export default ShopPage;
