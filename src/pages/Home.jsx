import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero section Start */}
      <section className="hero-section">
        <nav className="nav-bar">
          <div className="logo-div">
            <img src="/logo.jpg" alt="" />
          </div>
          <div className="nav-link-div">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Destination</a>
              </li>
              <li>
                <a href="">Flight</a>
              </li>
              <li>
                <a href="">Booking</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="nav-btns">
            <button>Log in</button>
            <button>Sign in</button>
          </div>
        </nav>
        <div className="hero-main-div">
          <div className="hero-left-div">
            <h1>Travel Memories You'll Never Forget</h1>
            <p>
              Two proximetely switches detect when the value has reached the end
              of is travel
            </p>
            <div className="hero-btns">
              <button>Find Out More</button>
              <button>Play Demo</button>
            </div>
          </div>
          <div className="hero-right-div">
            <div>
              <img src="/hero-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Book now section */}
      <section className="book-now-section">
        <div className="book-now-div">
          <div className="book-left-div">
            <div>
              <img src="https://vimanamdmc.com/wp-content/uploads/2025/03/Untitled-design-86.webp" alt="" />
            </div>
          </div>
          <div className="book-right-div">
            <div>
              <form action="" className="booking-form">
                <div className="form-cont">
                  <div className="book-form-label">
                    <img
                      src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000"
                      alt=""
                    />
                    <h2>Location</h2>
                  </div>
                  <input type="text" placeholder="Rome,Italy" />
                </div>
                <div className="form-row">
                  <div className="form-cont">
                    <div className="book-form-label">
                      <img
                        src="https://img.icons8.com/?size=100&id=15BVldRxijS1&format=png&color=000000"
                        alt=""
                      />
                      <h2>Date</h2>
                    </div>
                    <input type="date" placeholder="MM/DD/YYYY"/>
                  </div>
                  <div className="form-cont">
                    <div className="book-form-label">
                      <img
                        src="https://img.icons8.com/?size=100&id=8412&format=png&color=000000"
                        alt=""
                      />
                      <h2>Price</h2>
                    </div>
                    <input type="text"  placeholder="$"/>
                  </div>
                </div>
                <div className="book-now-btns">
                  <button>Preview Hotel</button>
                  <button>Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Destination section */}

      <section className="destination-section">
        <div className="destination-div">
          <div className="book-now-title">
            <h1>
              <b>Find Your Best</b> Destination
            </h1>
            <p>We have more than 2000 destination you can choose</p>
            <div className="search-bar">
              <div className="search-input">
                <img
                  src="https://img.icons8.com/?size=100&id=7880&format=png&color=ffffff"
                  alt=""
                  className="search-bar-icon"
                />
                <input type="text" placeholder="Search Destination" />
              </div>
              <img
                src="https://img.icons8.com/?size=100&id=132&format=png&color=ffffff"
                alt=""
                className="search-bar-icon"
              />
            </div>
          </div>
          <div className="destination-row">
            <div className="destination-cont cont-1"> <img src="https://i1-e.pinimg.com/1200x/2d/3e/34/2d3e34da5d8dd5a408a9a223d13735d2.jpg" alt="" />
            </div>
            <div className="destination-cont cont-2"> <img src="https://i1-e.pinimg.com/736x/57/a1/d2/57a1d2d07b52ae7b79376eaf3b8d7370.jpg" alt="" />
            </div>
            <div className="destination-cont cont-3"> <img src="https://i1-e.pinimg.com/1200x/e6/f6/13/e6f613d4370c37b33e714843fab63e1a.jpg" alt="" />
            </div>
            <div className="destination-cont cont-4"> <img src="https://i1-e.pinimg.com/1200x/69/07/48/690748daa59128aeb5ed2024cca1f9e7.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Vaccation plan section */}

      <section className="vacation-section">
        <div className="vacation-div">
          <div className="vacation-title">
            <h1>
              <b>Best</b> Vacation Plan
            </h1>
            <p>
              Plan your perfect vacation with our travel agency. Choose among
              hundreds of all-inclusive offer!
            </p>
          </div>

          <div className="vacation-card-row">
            {/* Card 1 */}
            <div className="vacation-card">
              <div className="vacation-img-div">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/71507783.webp?k=bc2c3bdeb5922815b34c4011d7d4475312636cc8a05ff1bbdb4c21d56de23c7e&o="
                  alt=""
                />
              </div>
              <div className="vacation-details">
                <div>
                  <p>Rome,Italy</p>
                  <p>$765k</p>
                </div>
                <div>
                  <p>7 Day Trip</p>
                  <p>4.5</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="vacation-card">
              <div className="vacation-img-div">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/71507783.webp?k=bc2c3bdeb5922815b34c4011d7d4475312636cc8a05ff1bbdb4c21d56de23c7e&o="
                  alt=""
                />
              </div>
              <div className="vacation-details">
                <div>
                  <p>Rome,Italy</p>
                  <p>$765k</p>
                </div>
                <div>
                  <p>7 Day Trip</p>
                  <p>4.5</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="vacation-card">
              <div className="vacation-img-div">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/71507783.webp?k=bc2c3bdeb5922815b34c4011d7d4475312636cc8a05ff1bbdb4c21d56de23c7e&o="
                  alt=""
                />
              </div>
              <div className="vacation-details">
                <div>
                  <p>Rome,Italy</p>
                  <p>$765k</p>
                </div>
                <div>
                  <p>7 Day Trip</p>
                  <p>4.5</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="vacation-card">
              <div className="vacation-img-div">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/71507783.webp?k=bc2c3bdeb5922815b34c4011d7d4475312636cc8a05ff1bbdb4c21d56de23c7e&o="
                  alt=""
                />
              </div>
              <div className="vacation-details">
                <div>
                  <p>Rome,Italy</p>
                  <p>$765k</p>
                </div>
                <div>
                  <p>7 Day Trip</p>
                  <p>4.5</p>
                </div>
              </div>
            </div>
          </div>
          <p>
            <a href="See more"></a>
          </p>
        </div>
      </section>

      {/* Blog Section */}

      <section className="blog-section">
        <div className="blog-div">
          <div className="blog-title">
            <h1>
              <b>Our</b> Blog
            </h1>
            <p>An insight the incridible expereience in the world</p>
          </div>
          <div className="blog-row-div">
            <div className="blog-left-div">
              <div>
                <img src="https://amblehimalaya.com/wp-content/uploads/2023/08/10-best-treks-in-Nepal.png.webp" alt="" />
              </div>
            </div>
            <div className="blog-right-div">
              <h1>Beautiful Kashmir Let's Travel</h1>
              <p>
                We are ready to help you build and also realize the room design
                that you dream of , with our experts and also the best category
                recommendation from us
              </p>
              <p>Read more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final banner section */}

      <section className="banner-section">
        <div className="banner-div">
          <div className="banner-left-div">
            <h1>We Make World Travel Easy</h1>
            <p>
              Navigating the globe effortlessly, we transform wanderlust dreams
              into seamless adventures. With us,the world becomes your
              accessible playground,travel simplified.
            </p>
            <p>Explore Our Tour</p>
          </div>
          <div className="banner-right-div">
            <div>
              <img src="https://twistytrails.blog/wp-content/uploads/2026/04/travel-apps-e1775471310792-1079x550.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <footer className="footer-section">
        <div className="footer-div">
          <div className="footer-upper-div">
            <div className="footer-cont">
              <h1>
                <b>Powered By</b>
              </h1>
              <p>USA Tourister</p>
            </div>
            <div className="footer-cont">
              <h1>
                <b>Call center</b>
              </h1>
              <p>International call center </p>
            </div>
            <div className="footer-cont">
              <h1>
                <b>Subscribe to our news letter</b>
              </h1>
              <div className="subscribe-btn">
                <p>Email address</p>
                <p>Join now</p>
              </div>
            </div>
            <div className="footer-cont">
              <h1>Download our mobile app</h1>
            </div>
          </div>
          <div className="footer-lower-div">
            <div>
              <p>Privacy Policy</p>
              <p> Cookies</p>
            </div>
            <p>2026|All Rights Reserved </p>
            <div>
              <p>Connect with us</p>
              <div className="f-icons">
                <img src="https://img.icons8.com/?size=100&id=rHBHb9TRpKaI&format=png&color=ffffff" alt="" />
                <img src="https://img.icons8.com/?size=100&id=xmBM0gQ596LO&format=png&color=ffffff" alt="" />
                <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
