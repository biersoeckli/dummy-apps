import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Home() {
  return <h1>This is a QuickStack Demo Application using React</h1>
}

function Hello() {
  return <h1>Hello 🧦🍺 React</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
