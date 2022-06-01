import Navigation from '../components/Navigation';
import './Home.css';

export default function Home() {
  return (
    <section>
      <Navigation />
      <article>
        <h3>Welcome to your world of calculation</h3>
        <p>
          This Single Page Application have 3
          pages? Well that is the beauty of
          {' '}
          <span> React </span>
          {' '}
          using React router. Click the Navigations links to go to the
          {' '}
          <span> Calculator </span>
          {' '}
          page or click the
          {' '}
          <span> Quotes </span>
          {' '}
          link to checkout some lovely quotes that will inspire you in solving calculations.
        </p>
        <p>
          if you like the app, show your support by adding a star to the project
          on
          {' '}
          <a href="https://github.com/Mikelobi/Maths-Magician-Project">GitHub</a>
          {' '}
          .
        </p>
      </article>
    </section>
  );
}
