import { createContext, useEffect } from "react";
import { useContext, useState } from 'react'

import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert("Algo deu errado!")
      }
    }
  }

  async function signUp() {
    const signOut = confirm("Deseja realmente deslogar agora?")
    if (signOut === false) {
      return
    }

    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")

    setData({})
  }

  async function updatedProfile({ user, avatarFile }) {
    try {

      //Verifica se já existe um avatar
      if (avatarFile) {
        //Cria um formulário
        const fileUploadForm = new FormData()
        //Criaum campo avatar com o avatarFIle dentro
        fileUploadForm.append("avatar", avatarFile)
        //Manda uma atualização para o users/avatar contendo o formulário com o campo avatar e com o arquivo file do avatar lá dentro
        const response = await api.patch("/users/avatar", fileUploadForm)
        // Atualiza a propriedade "avatar" do objeto user com o valor retornado pela API
        user.avatar = response.data.avatar
      }

      api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado!")
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert("Algo deu errado!")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user")
    const token = localStorage.getItem("@rocketmovies:token")

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signUp,
      updatedProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth } 