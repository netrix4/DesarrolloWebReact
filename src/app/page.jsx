import Preguntas from "./components/Preguntas";

export default function Home () {
  return(
    <main className="text-[20] bg-[#1b1b1d]">
      <div className='flex flex-col items-center'>
        <Preguntas/>
        <button className='text-yellow-50 w-48'> Next </button>
        

      </div>
    </main>
  )
}