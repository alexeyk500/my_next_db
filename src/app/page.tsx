const users = [
  {id: '1', email: 'alexeyk500@yandex.ru'},
  {id: '2', email: 'stepanov77lesha@gmail.com'},
  {id: '3', email: 'alexeyk500@icloud.ru'},
]

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
      {
        users.map(user=><div key={user.id}>{user.email}</div>)
      }
    </div>
  )
}
