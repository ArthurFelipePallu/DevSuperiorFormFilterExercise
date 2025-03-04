import "./styles.css";
import { useNavigate } from "react-router-dom";
import { UserInfoDTO } from "../../Models/user-info";
import { useContext, useEffect, useState } from "react";
import { CompleteProductDTO } from "../../Models/product";
import { BASE_URL, GIT_NAME, SPRING_TOOL_NAME } from "../../Utils/system";
import * as ProductService from "../../Services/product-service";
import * as UserService from "../../Services/user-localStorage-service";
import * as FakeProductService from "../../Services/fake-product-service";
import ProductInfoDisplay from "../../Components/ProductInfoContainer/ProductInfoDisplay";
import {
  ProductCountProvider,
  ProductPriceRangeProvider,
} from "../../Utils/context-product";

export default function ProductInfoContainer() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState<CompleteProductDTO[]>([]);
  const [userInfo, setUserInfo] = useState(UserService.GetUserInfo());
  /// CONTEXTS
  const { contextPriceRange } = useContext(ProductPriceRangeProvider);
  const { setContextProductCount } = useContext(ProductCountProvider);

  useEffect(() => {
    const isDSCommerce = userInfo.repository === SPRING_TOOL_NAME;
    let isGit = userInfo.repository === GIT_NAME;

    if (isDSCommerce) {
      ProductService.getAllProducts()
        .then((response) => {
          const filteredData = response.data.content.filter(
            (item) =>
              (item.price >= contextPriceRange.minValue || 0) &&
              (item.price <= contextPriceRange.maxValue || 0)
          );
          setFilteredData(filteredData);
        })
        .catch(() => {
          isGit = true;
          redirectToGit();
        });
    } else if (isGit) {
      const filteredData = FakeProductService.findByPrice(
        contextPriceRange.minValue || 0,
        contextPriceRange.maxValue || 0
      );
      setFilteredData(filteredData);
    }
    function redirectToGit() {
      userInfo.repository = GIT_NAME;
      setUserInfo(userInfo);

      if (
        confirm(
          "No DSCommerce running at" + BASE_URL + ". You will be redirected to Git Repository" )) {
            navigate("/formfilter");
          }
          else{
            navigate("/");
          }
    }

    function setFilteredData(data: CompleteProductDTO[]) {
      setContextProductCount(data.length);
      setProductList(data);
      SendUserInfoToLocalStorage(data.length);
    }
    function SendUserInfoToLocalStorage(productCount: number) {
      const info: UserInfoDTO = {
        id: 1,
        lastSearchMin: contextPriceRange.minValue || Number.MIN_VALUE,
        lastSearchMax: contextPriceRange.maxValue || Number.MAX_VALUE,
        lastSearchResult: productCount,
        repository: userInfo.repository,
      };
      UserService.SaveUserInfo(info);
    }
  }, [
    contextPriceRange.maxValue,
    contextPriceRange.minValue,
    setContextProductCount,
    userInfo.repository,
  ]);

  if (!contextPriceRange.possible) return null;
  return (
    <div className="form-filter-container form-filter-container-area">
      {productList.map((item) => (
        <ProductInfoDisplay product={item} key={item.id} />
      ))}
    </div>
  );
}
