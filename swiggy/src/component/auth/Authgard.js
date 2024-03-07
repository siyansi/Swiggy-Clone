import Header from "../protective/pages/Header";
import HomePage from "../protective/pages/HomePage";





const AuthGurad = ({ component }) => {
//     const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));
//     useEffect(() => {
//     // 👆 daisy UI themes initialization
//     themeChange(false);
//   }, []);

  return (
    <div className="main-container">

      <>
      <div className=" main-bg-container">
     <Header/>
     <HomePage/>
        </div>
      </>
    </div>
  );
};

export default AuthGurad;
