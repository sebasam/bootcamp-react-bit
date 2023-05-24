import './App.css'
import Avatar from './components/Avatar'
import Card from './components/Card'
import Tanjiro from './assets/img/tanjiro.png'
import Inosuke from './assets/img/inosuke.png'
import Zenitsu from './assets/img/zenitsu.png'

const App = () => {


    return(
        <div className='container'>
            <Card>
                <Avatar 
                    imagen={Tanjiro}
                    tamaño={100}
                />
                <Avatar 
                    imagen={Inosuke}
                    tamaño={100}
                />
                <Avatar 
                    imagen={Zenitsu}
                    tamaño={100}
                />
            </Card>
        </div>
    )
}

export default App
