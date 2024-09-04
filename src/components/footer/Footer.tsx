import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"




function Footer() {
    return (

        <div className="bg-[#5E8DA0] flex justify-center py-8 text-center">
            <p className="text-xl-3">Acesse nossas redes sociais</p>

            <div className="flex justify-center gap-3">
                <a href="https://github.com/lidskey" aria-label="Github" rel="noopener">
                    <GithubLogo size={34} weight="bold" />
                </a>
                <a href="https://www.linkedin.com/in/liara-cristina-939313128/" aria-label="Linkedin" rel="noopener">
                    <LinkedinLogo size={34} weight="bold" />
                </a>
            </div>
        </div>

    )
}

export default Footer