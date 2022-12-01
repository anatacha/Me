import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import WorkPage from './components/WorkPage';
import { AnimatePresence } from "framer-motion";
// import SoundBar from "./subComponents/SoundBar";
import BlogPage from "./components/BlogPage";

function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

   

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
    <Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>

    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App

