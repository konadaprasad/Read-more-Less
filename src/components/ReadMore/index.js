import {useState} from 'react'
import {
  MainCont,
  InnerCont,
  Heading,
  Para,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [BtnStatus, changeStatus] = useState(false)
  const {reactHooksDescription} = props

  const changeBtnStatus = () => {
    changeStatus(prevState => !prevState)
  }

  const Description = reactHooksDescription.slice(0, 170)

  return (
    <MainCont>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <InnerCont>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
          alt="react hooks"
        />
        {BtnStatus ? (
          <>
            <Para>{reactHooksDescription} </Para>
            <Button onClick={changeBtnStatus}>Read Less</Button>
          </>
        ) : (
          <>
            <Para>{Description}</Para>
            <Button onClick={changeBtnStatus}>Read More</Button>
          </>
        )}
      </InnerCont>
    </MainCont>
  )
}
export default ReadMore
