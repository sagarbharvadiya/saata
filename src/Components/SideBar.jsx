import React from "react";
import ContentList from "./ContentList";

const SideBar = ({ monthAndYear }) => {

  return (
    <>
      <div className="news-letter-folder2">
        <div className="news-latter-right-field-folder">
          <ul>
            <ContentList monthAndYear={monthAndYear} type={"newslettter"} title={'From the Editorial Desk'} />
            <ContentList monthAndYear={monthAndYear} type={"News"} title={'Ta News'} />
            <ContentList monthAndYear={monthAndYear} type={"article"} title={'ARTICLES'} />
            <ContentList monthAndYear={monthAndYear} type={"Experiences"} title={'Experiences'} />
            <ContentList monthAndYear={monthAndYear} type={"creativeCorner"} title={'Creative Corner'} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
