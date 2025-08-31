import { useState } from 'react'

const Header = () => {
  const [input, setInput] = useState("")
  return (
    <div className='h-20 bg-black flex justify-center py-4'>
      <input type="text" className='bg-white w-1/3 outline-none p-2' value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Search Products...'/>
    </div>
  )
}

export default Header