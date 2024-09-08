import { useParams } from "react-router-dom"

const Edit = () => {

  const parmas = useParams()

  return (
    <>
      {parmas.id}번 일기 수정페이지 입니다.
    </>
  )
}

export default Edit