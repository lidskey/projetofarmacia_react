

function Home() {
    return (
        <div className="bg-[#ffffff] flex justify-center">
            <div className="container grid grid-cols-2">
                <section className="flex flex-col gap-4 justify-center text-center text-xl">
                    <h1> Seja bem vinde à farmácia<p className="font-bold">Remedy Now</p></h1>
                    <div className="flex justify-around gap-4">
                        <button className="hover:bg-[#AAFFDD] rounded border-[#000055] border-solid border-2 py-2 px-4">Explore</button>
                    </div>
                </section>

                {/* <section className="flex justify-between ">
                    <img src="" alt="" className="w-2/3 p-2">
                    </img>

                </section> */}
            </div>
        </div>
    )
}

export default Home