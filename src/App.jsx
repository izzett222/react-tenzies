import Board from "./components/Board";

function App() {
  return (
    <div className="h-screen flex justify-center items-center sm:p-2 md:p-10">
      <div className="w-full px-5 py-[30px] max-w-[360px] h-full max-h-[379px] bg-[#0B2434]">
        <div className="w-full h-full bg-[#F5F5F5] rounded-[10px] flex flex-col items-center p-9">
          <div className="max-w-[232px]">
            <h1 className="text-[#2B283A] font-bold text-[25px] leading-[30px] text-center">
              Tenzies
            </h1>
            <p className="text-[#4A4E74] text-sm text-center">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
