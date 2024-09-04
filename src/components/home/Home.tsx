import { Link } from "react-router-dom"


function Home() {
    return (
        <div className="bg-[#ffffff] flex justify-center">
            <div className="container grid grid-cols-2">
                <section className="flex flex-col gap-4 justify-center text-center text-xl">
                    <h1> Seja bem vinde à farmácia<p className="font-bold">Remedy Now</p></h1>
                    <div className="flex justify-around gap-4">
                        <Link to='/categorias' className='hover:underline'><button className="hover:bg-[#AAFFDD] rounded border-[#000055] border-solid border-2 py-2 px-4">Explore</button></Link>
                    </div>
                </section>

                <section className="flex justify-between ">
                    <img src="./src/assets/undraw_medicine_b-1-ol.svg" alt="Medicine" className="w-2/3 p-10">
                    </img>

                </section>
            </div>
        </div>
    )
}

export default Home