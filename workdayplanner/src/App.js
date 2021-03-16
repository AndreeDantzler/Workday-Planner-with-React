import Header from "./components/Header";
import TimeBlock from "./components/TimeBlock";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <TimeBlock time="9AM" />
        <TimeBlock time="10AM"/>
        <TimeBlock time="11AM"/>
        <TimeBlock time="12PM"/>
        <TimeBlock time="1PM"/>
        <TimeBlock time="2PM"/>
        <TimeBlock time="3PM"/>
        <TimeBlock time="4PM"/>
        <TimeBlock time="5PM"/>
      </div>
    </div>
  );
}

export default App;
