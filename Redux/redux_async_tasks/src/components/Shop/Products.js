import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
  {
    id:'1',
    price:6,
    title:"My First Book",
    description:'The First Book i ever wrote'
  },
  {
    id:'2',
    price:5,
    title:"My Second Book",
    description:'The Second Book i ever wrote'
  },
  {
    id:'3',
    price:4,
    title:"My Third Book",
    description:'The Third Book i ever wrote'
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item=>(
          <ProductItem 
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
