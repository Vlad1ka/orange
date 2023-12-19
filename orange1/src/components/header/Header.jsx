import "./style.css";

const Header = () => {
    return ( 
        <header>
        <div className="container">
            <div className="nav-container">
            <div className="logo"></div>
          <nav>
              <p>Главная</p>
              <p>Напитки</p>
              <p>Контакты</p>
          </nav>
          </div>
          <div className="banner">
              <div className="banner_first">
                  <div className="block_text">
                      <p>Бодрящий апельсин</p>
                      <p>Вкус утреннего пробуждения</p>
                  </div>
                  <button className="btn1">Купить</button>
              </div>
              <div className="banner_second"></div>
          </div>
        </div>
      </header>
     );
}
 
export default Header;
