import Features from "./components/features"

const App = () => {
  return (
    <div className="App">
        <header>
          <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
              <img
                className="main-nav-logo-image"
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
              <a className="main-nav-item" href="./sign-in.html">
                <i className="fa fa-user-circle"></i>
                Sign In
              </a>
            </div>
          </nav>
        </header>
        <main>
          <div className="hero">
            <section className="hero-content">
              <h2 className="sr-only">Promoted Content</h2>
              <p className="subtitle">No fees.</p>
              <p className="subtitle">No minimum deposit.</p>
              <p className="subtitle">High interest rates.</p>
              <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
          </div>
          <Features />
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    </div>
  )
}

export default App
