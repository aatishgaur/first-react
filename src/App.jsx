
import './App.css'

function App() {

  return (
    <>
    <div className="sub-header">
      <div className="logo">
        <h1>Markfury</h1>
      </div>
      <input type="text" placeholder='type' />
      <button className='btn'>Search</button>
      <div className="logos">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
      <button><i class="fa-regular fa-user"></i>Login Register</button>
    </div>
    <div className="header-head">
      <div className="ican">
        <h1>Shop by Depament</h1>
      </div>
      <div className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
           <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a></li>
             <li><a href="#">Blog</a></li>
               <li><a href="#">Sell on Markfury</a></li>
                 <li><a href="#">Tract your order</a></li>
                   <li><a href="#">USD</a></li>
                    <li><a href="#">English</a></li>
        </ul>
      </div>
    </div>
    <div className="hero-pages">
      <img src={`${import.meta.env.BASE_URL}images/a.jpg`} alt="" />
    </div>
    <div className="hero-card">
      <div className="card">
        <img src={`${import.meta.env.BASE_URL}images/a2.jpg`} alt="" />
        <h2>Product</h2>
        <p>price $ 2500</p>
      </div>
      <div className="card">
        <img src={`${import.meta.env.BASE_URL}images/aa.jpg`} alt="" />
        <h2>Product</h2>
        <p>Price $ 3000</p>
      </div>
      <div className="card">
        <img src={`${import.meta.env.BASE_URL}images/aaa.jpg`} alt="" />
          <h2>Product</h2>
        <p>Price $ 4000</p>
      </div>
      <div className="card">
        <img src={`${import.meta.env.BASE_URL}images/aaaaa.jpg`} alt="" />
          <h2>Product</h2>
        <p>Price $ 5000</p>
      </div>
    </div>
    <div className="Footer">
    <div className="box">
      <h1>Found E-Commerce</h1>
      <hr />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Similique maiores laboriosam eligendi perferendis animi et impedit quo, nostrum suscipit natus!</p>
    </div>
    <div className="box">
      <h1>Quick Link</h1>
      <hr />
       <p>Home</p>
       <p>Shop</p>
       <p>Page</p>
       <p>Blog</p>
       <p>Sell On Markfury</p>
       <p>Track Your Order</p>
       <p>USA</p>
       <p>English</p>
    </div>
    <div className="box">
       <h1>Show Now</h1>
      <hr />
      <p>Collection</p>
      <p>Trending Products</p>
      <p>New Arrival Product</p>
      <p>Featured Product</p>
      <p>Sitemaps</p>
    </div>
    <div className="box">
      <h1>Reach US</h1>
      <hr />
      <p>#444,Addres India</p>
      <p><i class="fa-solid fa-phone"></i>+912354678975</p>
      <p><i class="fa-regular fa-message"></i>Markfury12@gmail.com</p>
      <hr />
    </div>
    </div>
    </>
  )
}

export default App
