
import './App.css';

function App() {
  return (
    <>
    <div className="flex flex-row ... ">
    <div className="p-4 text-white bg-red-500 rounded">1</div>
    <div className="p-4 text-white bg-red-500 rounded">2</div>
    <div className="p-4 text-white bg-red-500 rounded">3</div>
    <div className="p-4 text-white bg-red-500 rounded">4</div>
    </div>

    <div className='flex flex-col'>
    <div className='p-3 text-fuchsia-300 bg-blue-300 rounded'>flex-col-1</div>
    <div className='p-3 text-fuchsia-400 bg-blue-400 rounded'>flex-col-2</div>
    <div className='p-3 text-fuchsia-500 bg-blue-500 rounded'>flex-col-3</div>  
    </div>

    <div className='flex flex-row'>
    <button className='p-5 text-gray-100  bg-slate-500 rounded-lg'>flex flex-row-1</button>
    <input className='p-7  text-green-300 bg-slate-900 rounded-full'  type="text" placeholder='enter email '/>
    </div>
     
     <div className='container mx-auto bg-gray-200 rounded-xl shadow border p-3 m-10'>
      <p className='text-3xl text-gray-700 font-bold mb-5' > Study !</p>
      <p className='text-blue-700 text-lg'> React and Tailwind CSS in action </p>
     </div>

     <div className='flex flex-wrap bg-pink-300 rounded-t-sm p-3 md:flex-wrap-reverse'>
      <div>01</div>
      <div>02</div>
      <div>03</div>
      </div>
  
      <div class="flex gap-5 ...">
  <div className="flex-none  bg-pink-400 w-14 h-14 ...">
    01
  </div>
  <div className="grow   bg-pink-500 h-14 ...">
    02
  </div>
  <div className="flex-none  bg-pink-600 w-14 h-14 ...">
    03
  </div>
</div>
    </>
  );
}

export default App;
