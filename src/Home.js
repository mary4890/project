import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Mary Adeeko</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link active" to="/">Home</Link>
            </nav>
          </div>
        </header>

        <main className="px-3" id="home">
          <h1 className="display-5 fw-bold">Welcome To My Website</h1>
          <p className="lead">My first website.</p>

          <section className="mt-5">
            <h2 className="text-white">About Me</h2>
            <p className="text-white">
              Hi, my name is Mary Adeeko. I am 24 years old and currently starting my second semester at UNT, majoring in Information Technology.
              This is my first time creating a website.
            </p>
          </section>
        </main>

        <footer className="mt-auto text-white-50">
          <p>&copy; 2025 Mary Adeeko. Built with <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
