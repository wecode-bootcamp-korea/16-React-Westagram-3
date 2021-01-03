import React from "react";
import "./StoryFeed.scss";

const STORYFEEDINFO = [
  {
    userId: "kendalljenner",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/110054169_631618667480471_8395309931424378448_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=APx1rWNWYaEAX98bol-&tp=1&oh=3b2ebfd3eeb40ba096e24fc8460adfd8&oe=600B7BE1",
  },
  {
    userId: "justinbieber",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118803455_120863839516646_4281183625374452390_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=vv_HPTQckqUAX_f8opF&tp=1&oh=c1035e34f64ace8190c0a90e23770678&oe=60090684",
  },
  {
    userId: "katyperry",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118550039_182034303327791_6144105614706839563_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=og4Syra4QF8AX9A8CYh&tp=1&oh=4f0374067a6480d8b670ba1426fe9510&oe=600AF2F4",
  },
  {
    userId: "kyliejenner",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123885563_855075811697113_8647373123046258603_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=q-beqDUMLUAAX9MQ5Lp&tp=1&oh=12a89c666ae0088df7c8984d0b529b7d&oe=600ACF52",
  },
  {
    userId: "kimkardashi...",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/109136688_610125179899980_1868015297406610141_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=z_ukZiTl20IAX-Y6DRI&tp=1&oh=85e566ac5a9f138758214123fd849dea&oe=600BFC22",
  },
];

class StoryFeed extends React.Component {
  render() {
    return (
      <section className="storyFeeds">
        <ul className="storyLists">
          {STORYFEEDINFO.map((el, idx) => {
            //map 메소드내에서 return 안에서 써줘야한다
            return (
              //각 리스트에는 unique key값을 가져야한다
              <li key={idx} className="storyItems">
                <a href="#">
                  <div className="activeStory">
                    <img src={el.imgUrl} alt={el.userId} />
                  </div>
                  <p>{el.userId}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default StoryFeed;
