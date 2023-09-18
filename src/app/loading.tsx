import Image from 'next/image'
import LoadingImg from "public/loading.png";


export default function Loading() {
    return (
        <main className='loading' >
        <div>  
            <Image src={LoadingImg} alt='loading' className='loading_img' />
            <h2>Loading</h2>
        </div>
    </main>
    )
  }

  