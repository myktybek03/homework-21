import { useCallback, useState } from "react"
import styled from "styled-components"
import Basket from "./components/basket/Basket"
import Header from "./components/header/Header"
import Meals from "./components/meals/Meals"
import Summary from "./components/summary/Summary"
import { useDispatch, useSelector } from "react-redux"
import Snackbar from "./components/UI/Snackbar"
import { uiActions } from "./store/ui/uiSlice"
import "./App.css"

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false)
  const snackbar = useSelector((state) => state.ui.snackbar)
  const dispatch = useDispatch()

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState)
  }, [])

  return (
    <div className="App">
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && (
          <Basket onClose={showBasketHandler} open={isBasketVisible} />
        )}
        <Snackbar
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          message={snackbar.message}
          onClose={() => dispatch(uiActions.closeSnackbar())}
        />
      </Content>
    </div>
  )
}

export default App

const Content = styled.div`
  margin-top: 101px;
`
