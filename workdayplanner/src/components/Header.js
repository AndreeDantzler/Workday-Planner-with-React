import CurrentDay from "./CurrentDay";

function Header(props) {
  return (
    <header className="jumbotron">
      <h1 className="display-3">Work Day Scheduler</h1>
      <p className="lead">A simple calendar app for scheduling your work day</p>
      <CurrentDay />
    </header>
  );
}

export default Header;
