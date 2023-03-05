import Board from './components/Board'

function App() {
  return (
    <div className="flex h-screen items-center justify-center sm:p-2 md:p-10">
      <div className="h-full max-h-[379px] w-full max-w-[360px] bg-[#0B2434] px-5 py-[30px]">
        <div className="flex h-full w-full flex-col items-center rounded-[10px] bg-[#F5F5F5] p-9">
          <div className="max-w-[232px]">
            <h1 className="text-center text-[25px] font-bold leading-[30px] text-[#2B283A]">
              Tenzies
            </h1>
            <p className="text-center text-sm text-[#4A4E74]">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>
          <Board />
        </div>
      </div>
    </div>
  )
}

export default App
