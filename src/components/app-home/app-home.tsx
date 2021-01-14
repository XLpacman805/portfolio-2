import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <section class="container">
          <div class="columns is-centered">
            <div class="column"></div>
            <div class="column">A</div>
            <div class="column is-three-quarters">B</div>
         </div>
        </section>

        <br />

        <section class="about-me container">
          <h2>About Me</h2>
          <p>
            Currently I'm a senior frontend developer working at LiveArea CX. We're a Salesforce implementation partner, and we develop for all of the major ecommerce platforms as well. I've built custom cartridges and custom business manager cartridges using Javascript, HTML, CSS, ES6, Web Components, CommonJS (similar to Express), SFRA, and B2C Commerce Script.
          </p>
          <p>
            Although my title is senior frontend developer, I spend almost 50% of my time writing server side Javascript HTTP routes for my frontend, in order to perform CRUD (Create, Read, Update, Delete) operations on business manager objects, whether it be custom objects or system objects.
          </p>
          <p>
            In total I have 3 years of Javascript experience (including Typescript). One of those years being Salesforce Commerce Cloud (SFRA) development. In my last role at MXS Solutions, an up and coming digital marketing company in the automotive space, I was doing full stack Javascript development mostly in NodeJS, React, Express, and MongoDB. Ocassionaly I'd get an odd project where the solutions required ADF XML, Google App Script, Facebook API, or achitecting Zapier flows.
          </p>
          <p>
            For cloud technologies I'm a huge Google Firebase fan! I used to use Google Cloud because at MXS we used GSuite, so it made sense to stick within that ecosystem. However, after using Firebase for the first time I told all my developer friends! It makes setting up a new project in the cloud so easy. I also like GitHub Acitons for CI/CD Pipelines.
          </p>
        </section>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
