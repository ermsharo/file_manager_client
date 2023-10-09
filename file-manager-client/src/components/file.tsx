import { useState } from 'react'


function File({name} : {name: string }) {
  const [count, setCount] = useState(0)

  return (
    <div className='file-box'>
        <img src = "https://www.shareicon.net/data/2016/07/03/636103_file_512x512.png" className='file-image'/>
{name}
    </div>
  )
}

export default File
