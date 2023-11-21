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

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
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