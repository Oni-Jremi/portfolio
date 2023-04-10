AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/resolytics.png",
    place: "Resolytics",
    time: "(May, 2021 - April, 2022)",
    desp: "<li>Collaborated with cross-functional teams; software engineers, product managers and data analysts, to develop new products and services and solve complex problems.</li> <li>Developed and XGBoost model of 2M+ rows of data, aiming to boost a client's user platform activeness</li> <li>Managed the databases and function updating for an audience measurement platform.</li>",
  },
  {
    title: "Machine Learning Engineer ",
    cardImage: "assets/images/experience-page/smartflow.png",
    place: "Smartflow",
    time: "(Oct, 2020 - April, 2021)",
    desp: "<li>Analyzed large datasets using TensorFlow to extract meaningful insights and identify opportunities for improvements.</li><li>Designed algorithms and implemented new machine learning algorithms to solve specific problems and improve performance.</li><li>Designed and implemented SVM and Decision Trees, from prototype to production-level code.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/bingbot.png",
    place: "BingBot",
    time: "(May, 2020 - Aug, 2020)",
    desp: "<li>Built and contributed cross-platform applications using react native.</li><li>Developed software applications, performed unit testing, communicated status and integrated software into a larger system.</li><li>Reviewed software designs and implementation to improve development process.</li>", 
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteershi