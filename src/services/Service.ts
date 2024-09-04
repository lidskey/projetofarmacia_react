import axios from "axios";

const api = axios.create({
    baseURL: "https://farmacia-nest-t0o5.onrender.com/",
})

export const cadastrar = async (url: string, dados: Object, setDados: Function) => { //envia a requisição backend
    const resposta = await api.post(url, dados) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => { //envia a requisição backend
    const resposta = await api.put(url, dados) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const listar = async (url: string, setDados: Function) => { //envia a requisição backend
    const resposta = await api.get(url) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const deletar = async (url: string) => {
    await api.delete(url)
}