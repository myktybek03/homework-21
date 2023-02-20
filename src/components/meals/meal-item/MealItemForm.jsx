import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToBasket } from "../../../store/basket/basketSlice"
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg"
import Button from "../../UI/Button"
import styled from "styled-components"

const MealItemForm = ({ id, title, price }) => {
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const basketItem = {
      id,
      price,
      title,
      amount,
    }

    dispatch(addToBasket(basketItem))
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledInput
          value={amount}
          onChange={amountChangeHandler}
          max={5}
          min={0}
          type="number"
          id={id}
        />
      </Container>
      <Button>
        <PlusIcon />
        Add
      </Button>
    </StyledForm>
  )
}

export default MealItemForm

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Container = styled.div`
  margin-bottom: 15px;
`

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  margin: 0 1.25rem 0 0;
`

const StyledInput = styled.input`
  width: 3.75rem;
  height: 2rem;
  outline: none;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
  font-weight: 500;
  font-size: 16px;
`
