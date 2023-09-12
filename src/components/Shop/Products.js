import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS =[
    {
      id: 'p1',
      price: 20,
      title: 'My First Book',
      description: 'The first Book I ever wrote'
    },{
      id: 'p2',
      price: 45,
      title: 'My second Book',
      description: 'The second Book I ever wrote'
    },
    {
      id: 'p3',
      price: 40,
      title: 'My second Book',
      description: 'The second Book I ever wrote'
    },
  ]


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(((products)=>
        <ProductItem
          key={products.id}
          id={products.id}
          title={products.title}
          price={products.price}
          description={products.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
