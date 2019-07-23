/** @jsx h */
import { h, Component } from "preact";
import { Link } from 'preact-router/match';
import Helmet from "preact-helmet";
import lozad from "lozad";




export default class Contact extends Component {
  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const observer = lozad(".lazy", {
      loaded: function (el) {
        // Custom implementation on a loaded element
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px", // syntax similar to that of CSS Margin
      threshold: 0.4 // ratio of element convergence
    });
    observer.observe();
    document.querySelector("#branding__logo").classList.remove("branding__logo-alt");
  }

  componentWillUnmount() {
    document.querySelector("#branding__logo").classList.add("branding__logo-alt");
  }


 

  render() {
    return (
      <main class="container">
        <Helmet title="My Title Hay James Yet Another Page" />
        <h2>Hello Contact Page</h2>

      </main>
    );
  }
}
