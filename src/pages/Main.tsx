import { Header } from '../components/Header';
import { MainBlock } from '../components/MainBlock';
import style from './Main.module.css'

const Main = () => {
    
    return (
        <div className = {style.container}>

      <Header/>
      <MainBlock/>

        </div>
    )
}

export default Main;