import MinMaxValueForm from "../../Components/MinMaxValueForm";
import ProductInfoDisplay from "../../Components/ProductInfoDisplay";
import "./styles.css";

const FakeProductList = {
    list:[
      {
        id:1,
        name:"PC Gamer Pro",
        price:1200
      },
      {
        id:2,
        name:"Livro Senhor Dos Anéis",
        price:300.50
      },
      {
        id:3,
        name:"Deck Estrutural Dragão Branco",
        price:120.30
      },
      {
        id:4,
        name:"PC Gamer Pro",
        price:1200
      },
      {
        id:5,
        name:"PC Gamer Pro",
        price:1200
      },
      {
        id:6,
        name:"Livro Senhor Dos Anéis",
        price:300.50
      },
      {
        id:7,
        name:"Deck Estrutural Dragão Branco",
        price:120.30
      },
      {
        id:8,
        name:"PC Gamer Pro",
        price:1200
      },
    ]
}

export default function FormFilter() {

  return (
    <>
      <MinMaxValueForm />

      <div className="form-filter-container form-filter-container-area">
        {
          FakeProductList.list.map(item =>(
               <ProductInfoDisplay  product={item} key={item.id}/>
           ) )
        }

      </div>

    </>
  );
}
