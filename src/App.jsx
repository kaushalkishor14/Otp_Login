import './App.css'
import OtpFrom from './component/otp_from'

function App() {
 

  return (
    <>
      <div className='text-red-200 font-bold text-4xl'>
        Login With Your Phone-Number
        <div className='mt-8'>
          <OtpFrom/>
        </div>
       </div>
    </>
  )
}

export default App
