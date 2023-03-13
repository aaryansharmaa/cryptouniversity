import "./css/section-faq.css";

import { Accordion } from "react-bootstrap";

const SectionFAQ = () => {
  return (
    <section className="section-faq" id="faq">
      <div className="heading-container">
        <h2 className="heading-secondary text-gradient">FAQ</h2>
      </div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="gradient-btn">A </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
              quos esse, alias quae recusandae officiis perspiciatis aspernatur
              officia? Facere praesentium molestiae eligendi porro sunt totam
              illo, et error tempore?
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="gradient-btn">B </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              totam temporibus repellendus blanditiis, accusamus quisquam? Est,
              quasi mollitia. Vitae enim omnis saepe, nam debitis deserunt
              doloribus molestiae quam voluptatum ut?{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="gradient-btn">C </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              animi non, dolor vero cum quam quia minus ut perspiciatis fugit
              unde. Et ad iusto odit consequatur quisquam omnis incidunt magnam.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="gradient-btn">D </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
              maiores laborum, natus laudantium perspiciatis saepe dolores
              accusamus temporibus reiciendis ut accusantium enim ratione
              perferendis, velit ea vero modi vitae ipsum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="gradient-btn">E </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem reiciendis molestias dolorum earum distinctio sed
              excepturi mollitia asperiores ipsam commodi natus placeat quisquam
              a nesciunt, explicabo at corrupti blanditiis dignissimos.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default SectionFAQ;
