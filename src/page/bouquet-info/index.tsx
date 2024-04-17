import { useParams } from "react-router-dom"

export const BouquetInfo = () => {
  const { id } = useParams();

  return (
    <div>
      Информация о продукте c ID: {id}
    </div>
  )
}
