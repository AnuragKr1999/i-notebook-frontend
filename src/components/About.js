export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>What is i-Notebook</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              i-Notebook is an application which is used to store your personal notes. You can see you notes whenever you want after creating an account
                on the platform.
              You can create, update and delete your notes with ease.
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Made by</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
        
                This application is made by Anurag Kumar.<br/>
                <i class="fa-brands fa-github fa-lg"></i> <a href="https://github.com/AnuragKr1999/" target="_blank" rel="noopener noreferrer">Github</a><br/>
                <i class="fa-brands fa-linkedin" style={{color: "#1080d5"}}></i> <a href="https://www.linkedin.com/in/anurag-kumar-751315243/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <br/>Application is made using: <i class="fa-brands fa-react fa-spin fa-lg" style={{color: "#1ba8ee"}}></i> <a href="https://react.dev/blog/2023/03/16/introducing-react-dev" target="_blank" rel="noopener noreferrer">MERN Stack</a> + <i class="fa-brands fa-bootstrap" style={{color: "#9113be"}}></i> <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer">Bootstrap</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Is it safe to use i-Notebook</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              
                It is safe to use i-Notebook. You email will not be shared with anyone without your consent. Only you will be able to see your notes and no one else.
                Your password is safe and encrypted, no one can see what password you have set.
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
