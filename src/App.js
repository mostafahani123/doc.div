
function App() {
  return (
    
    <>
    <header className="hide-when-mobile">
      <h1>engineer mustafa</h1>
      <ul className="flex">
        <li className="main-list">
          <a className="main-link" href="www">
            HOME
          </a>
          <ul className="sub-ul">
            <li>
              <a href="">php</a>
            </li>
            <li>
              <a href="">python</a>
            </li>
            <li>
              <a href="">c++</a>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <a className="main-link" href="www.google.com">
            ABOUT
          </a>
          <ul className="sub-ul">
            <li>
              <a href="">problem solving</a>
            </li>
            <li>
              <a href="">data structure</a>
            </li>
            <li className="mini-projects">
              <a href="">problem solving task &nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="">task 1</a>
                </li>
                <li>
                  <a href="">task 2</a>
                </li>
                <li>
                  <a href="">task 3</a>
                </li>
              </ul>
            </li>
            <li className="mini-projects">
              <a href="">data structure task &nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="">task 1</a>
                </li>
                <li>
                  <a href="">task 2</a>
                </li>
                <li>
                  <a href="">task 3</a>
                </li>
              </ul>
            </li>
            <li className="mini-projects">
              <a href="">php task &nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="">task 1</a>
                </li>
                <li>
                  <a href="">task 2</a>
                </li>
                <li>
                  <a href="">task 3</a>
                </li>
                <li>
                  <a href="">test </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <a className="main-link" href="www.google.com">
            CONTACT
          </a>
          <ul class="sub-ul sub-of-js">
            <li>
              <a href="">01145467021</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>



    <header style={{ backgroundColor: "blue" }} class="show-when-mobile">
      <h1>Courses 4 Arab</h1>
      <label className="absolute" htmlFor="burger">
        <i className="fas fa-bars" />
      </label>
      <input id="burger" type="checkbox" />
      <div className="show-on-click">
        <div className="main-div">
          <label htmlFor="html">
            HTML <i className="fas fa-plus" />
          </label>
          <input id="html" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">Crash Course</a>
            </li>
            <li>
              <a href="">learn in 1h</a>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="css">
            CSS <i className="fas fa-plus" />
          </label>
          <input id="css" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">CSS Examples</a>
            </li>
            <li>
              <label className="mini-projects" htmlFor="mini">
                mini projects <i className="fas fa-plus" />
              </label>
              <input id="mini" type="checkbox" />
              <ul className="sub-sub-div">
                <li>
                  <a href="">project 1</a>
                </li>
                <li>
                  <a href="">project 2</a>
                </li>
                <li>
                  <a href="">project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="js">
            JavaScript <i className="fas fa-plus" />
          </label>
          <input id="js" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">coming soon🔥</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
    Welcome to my humble design <br />
       <br />
     &amp; mostafa
    </main>
    <footer>
      Designed and developed by engineermostafa
      <span>🧡</span>
    </footer>
  </>
    
  );
};

export default App;
