import { Chat, HouseSimple, Users } from "@phosphor-icons/react"

function NavBar() {
    return (

        <div className="bg-[#5E8DA0] flex justify-center">
            <div className="flex justify-between gap-8 py-4">
                <p className="text-xl font-bold">Remedy Now</p>
                <div className="flex gap-4">
                    <button className=""><HouseSimple size={32} weight="fill" /></button>
                    <button className=""><Chat size={32} weight="fill" /></button>
                    <button className=""><Users size={32} weight="fill" /></button>
                </div>
            </div>

        </div>
    )
}

export default NavBar