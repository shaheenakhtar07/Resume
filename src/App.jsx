import Navbar from "./Resume/Navbar/navbar"
import Header from "./Resume/Header/head"
import About from "./Resume/Main/about"
import Skills from "./Resume/Section/skill"
import Footer from "./Resume/Footer/footer"

function app (){
  return(
    <article>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Footer/>
    </article>
  )
}
export default app
