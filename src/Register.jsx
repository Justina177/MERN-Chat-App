

export default function Register() {
  return (
    // <div>Register screen</div>
    <div className="bg-blue-50 h-screen flex items-center">
        <form className="w-64 mx-auto mb-12" action="">
            <input type="text" 
                placeholder="username" 
                className="block w-full rounded-sm p-2 mb-2 border" />
            <input type="password" 
                placeholder="password"
                className="block w-full rounded-sm p-2 mb-2 border" />  
            <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
        </form>
    </div>
  )
}
