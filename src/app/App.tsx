import React, { ReactElement } from 'react';
import { TopBar } from './components/TopBar';
import { HomePage } from './pages/home';

interface IState {
  currentPage: "home" | "square" | "classification" | "search";
}

interface IPagerProps {
  name: "home" | "square" | "classification" | "search";
}

class App extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: "home"
    }
  }

  render() {
    return (
      <>
      <TopBar currentPage={this.state.currentPage} onTabClick={(str) => this.setState({ currentPage: str })} />
      <this.RenderPage name={this.state.currentPage} />
      </>
    );
  }

  private RenderPage(props: IPagerProps): ReactElement {
    switch (props.name) {
      case "home":
        return <HomePage />;
      case "square":
        return <div>square</div>;
      case "classification":
        return <div>classification</div>;
      case "search":
        return <div>search</div>;
    }
  }
}

export default App;
