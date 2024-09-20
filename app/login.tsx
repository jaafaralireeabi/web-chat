"use client"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Welcome from './components/welcome'
import EmailInput from './components/emailInput'
import PasswordInput from './components/passwordInput'
 
export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('http://localhost:3000/api/auth/route.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
            <Welcome></Welcome>
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
            <a className="forgot" href="/otp">
              نسيت كلمة المرور؟
            </a>
            <input type="submit" value="تسجيل الدخول"></input>
    </form>
  )
}