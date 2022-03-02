import Sidebar from '../components/Sidebar'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}
export default function Home() {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar />
          <h1>This is Justified Between</h1>
          <h1>This is the right hand side</h1>
        </div>  
    </div>
  )
}


