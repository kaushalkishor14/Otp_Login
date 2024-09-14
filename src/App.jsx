import './App.css'
import OtpFrom from './component/otp_from'

function App() {
 

  return (
    <>
      <div className='text-red-200 font-bold text-4xl items-center'>
        Login With Your Phone
        <div className='mt-8 flex justify-center'>
          <OtpFrom/>
        </div>
       </div>
    </>
  )
}

export default App
