
import "./App.css";

import MenuContainer from "./Components/MenuContainer";
import { useEffect } from "react";
import Pin from "./Components/Pin";

import "./styles.css";
import { connect } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Data from "./Components/Data";

function App() {
  
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  const dispatch = useDispatch();
	const navigate = useNavigate();
	const deso = useSelector((state) => state.deso);
	console.log(deso);
	useEffect(() => {
		if (deso.publicKey === "" || deso.publicKey === null) {
			dispatch(connect());
		}
	}, []);
	const handlePageChange = () => {
		navigate("/user");
	};
  return (
    <div className="App">
        <nav id="nav">
    <div id="nav-links">AppName</div>
    <div id="nav-links-deso">{deso.publicKey}</div>
    <button id="buttons" onClick={handlePageChange}>
      Profile
    </button>
  </nav>
      <div className="menuContainer">
       

        <div className="subMenu">
          <div>
            {/* <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} /> */}
          </div>

          <div>
            {/* <MenuContainer icon={<FavoriteRounded />} /> */}
          </div>

          <div>
            {/* <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} /> */}
          </div>
        </div>
      </div>

      <main>
        {/* <div className="searchBox">
          <input type="text" placeholder="Search" />
          <div className="search">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt=""
            />
          </div>
        </div> */}

        <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
    </div>
  );
}


export default App;
