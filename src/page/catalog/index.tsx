import { Button, Checkbox, Input } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

function Catalog() {
  const [todos, setTodos] = useState<{ id: number, text: string, completed: boolean }[]>([]);
  const [text, setText] = useState('')

  const addGood = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false,
        }
      ])
    }
  }

  return (
    <>
      <h3>Каталог</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '100px' }}>
        <div>
          <label htmlFor="" style={{ display: 'flex', gap: '20px' }}>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={addGood}>Add good</Button>
          </label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link to='/'>
            <Button>Назад</Button>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '200px' }}>
        <ul style={{ display: 'flex', gap: '20px' }}>
          {
            todos.map((item) =>
              <div key={item.id}
                style={{ display: 'flex', alignItems: 'centre', justifyContent: 'center', gap: '20px' }}
              >
                <Checkbox />
                <span>{item.text}</span>
                <span>&times;</span>
                <Link to={`/catalog/:${item.id}`}>
                  <Button>Выбрать</Button>
                </Link>
              </div>
            )
          }
        </ul >
      </div >
    </>
  )
}

export default Catalog
