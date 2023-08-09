import './App.css'
import { Header } from './component/Header'
import { Content } from './component/Content'


function App() {
  const livretterArray = 
  [
    {livretter: "Korean BBQ"},
    {livretter: "Sushi"},
    {livretter: "Pandekager"},
    {livretter: "Lasagne"},
    {livretter: "Snacks"}
  ]

  return (
    <>
      <Header />
      {livretterArray.map((item, index) => {
        return <Content key={index} livretter={item.livretter} />;
      })}
    </>
  )
}

export default App
