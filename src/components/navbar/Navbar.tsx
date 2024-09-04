import { HouseSimple, List, Pill, PlusCircle } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function NavBar() {
    return (

        <div className="bg-[#5E8DA0] flex justify-center">
            <div className="flex justify-between gap-8 py-4">
                <p className="text-xl font-bold">Remedy Now</p>
                <div className="flex gap-4">
                    <Link to='/' className="hover:underline"><button className="flex justify-center"><HouseSimple size={32} weight="fill" />Início</button></Link>
                    <Link to='/produtos' className="hover:underline"><button className="flex justify-center"><Pill size={32} weight="fill" />Produtos</button></Link>
                    <Link to='/categorias' className='hover:underline'><button className="flex justify-center"><List size={32} weight="fill" />Categorias</button></Link>
                    <Link to='/cadastrarcategoria' className="hover:underline"><button className="flex justify-center"><PlusCircle size={32} weight="fill" />Cadastrar categoria</button></Link>
                   
                    
                </div>
            </div>

        </div>
    )
}

export default NavBar