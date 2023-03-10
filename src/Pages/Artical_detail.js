import React from "react";
import Articles_image from "../Images/artical-image3.jpg";
import autor_image from "../Images/artical-image1.jpg";

function Articles() {
  return (
    <>
      <div className="Articles-section">
        <div className="Articles-wrapper">
          <div className="Articles-folder">
            <div className="Articles-blog-section">
              <div className="artical-author-folder">
                <div className="artical-author-image">
                  <img src={autor_image} />
                </div>
                <div className="artical-author-text-folder">
                  <h2>TA: An Elegant Theory</h2>
                  <p className="Articles-date">
                    Posted on December 28, 2013 by Saata Editorial
                  </p>
                </div>
              </div>
              <div className="Articles-image">
                <img src={Articles_image} alt={Articles_image} />
              </div>
              <p className="Articles-Author">
                <span>Author : Claude Steiner</span> is a psychotherapist who
                has written extensively about transactional analysis. His
                writings have focused especially on life scripts, alcoholism,
                emotional literacy, and Interpersonal power plays. (Source:
                www.itaaworld.org) Transactional analysis can serve as a
                sophisticated, elegant, and effective system on which to base
                the practical activities of professionals in psychotherapy,
                counseling, education, and organizational consultation. It was
                founded in the 1950s by San Francisco psychiatrist Eric Berne,
                MD. Transactional analysis has become a worldwide movement with
                upwards of 10,000 adherents. It is a sophisticated theory of
                personality, motivation, and problem solving that can be of
                great use to psychotherapists, counselors, educators, and
                business consultants. Transactional analysis can be divided into
                five theoretical and practical conceptual clusters. These five
                clusters enjoy varying degrees of recognition within the
                behavioral sciences. They are listed below along with (between
                quotes) concepts that parallel them in the behavioral sciences.
              </p>
              <div className="Articles-des-folder">
                <p className="Articles-des">
                  1. The Strokes Cluster. This cluster finds correlates in
                  existing theories of “attachment,” “intimacy,” “warmth,”
                  “tender loving care,” “need to belong,” “contact,”
                  “closeness,” “relationships,” “social support,” and “love.”
                </p>
                <p className="Articles-des">
                  2. The OK Cluster. This cluster finds correlates in existing
                  theories of “positive psychology,” “flow,” “human potential,”
                  “resiliency,” “excellence,” “optimism,” “subjective
                  well-being,” “positive self-concept,” “spontaneous healing,”
                  “nature’s helping hand,” “vis medicatrix naturae” (the healing
                  power of nature), and “the healing power of the mind.”
                </p>
                <p className="Articles-des">
                  3. The Script and Games Cluster. This cluster finds correlates
                  in existing theories of “narratives,” “maladaptive schemas,”
                  “self-narratives,” “story schemas,” “story grammars,”
                  “personal myths,” “personal event memories,” “self-defining
                  memories,” “nuclear scenes,” “gendered narratives,” “narrative
                  coherence,” “narrative complexity,” “core self-beliefs,” and
                  “self-concept.”
                </p>
                <p className="Articles-des">
                  4. The Ego States and Transactions Cluster. The idea of three
                  egos states and the transactional interactions between them
                  are the most distinctive feature of transactional analysis and
                  yet have the least amount of resonance in the literature.
                  However, the utility of this concept is the principal reason
                  why people become interested and maintain their interest in
                  transactional analysis.
                </p>
                <p className="Articles-des">
                  5. The Transactional Analysis Theory of Change Cluster.
                  Transactional analysis is essentially a cognitive-behavioral
                  theory of personality and change that nevertheless retains an
                  interest in the psychodynamic aspect of the personality.
                </p>
                <p className="Articles-des">
                  Echoes of each of these clusters of concepts can be found in
                  writings in the fields of psychology, social psychology, and
                  psychotherapy, where they exist independent of any awareness
                  of their possible transactional analysis origins.
                  Transactional analysis includes all five in a sophisticated,
                  interconnected theory of personality and change. From the
                  social sciences literature, we have collected a portfolio of
                  method, theory, and research that corroborates each of the
                  five theoretical clusters. This portfolio is summarized in the
                  following sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
