import SlickSlider from "react-slick";
import { Image, Heading, Card } from "rebass";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const LeftArrow = ({ className, style, onClick }) => (
  <AiFillLeftCircle
    className={className}
    style={{
      ...style,
      cursor: "pointer",
      width: "3rem",
      height: "3rem",
      left: "-50px",
    }}
    onClick={onClick}
    color="#fff"
  />
);
const RightArrow = ({ className, style, onClick }) => (
  <AiFillRightCircle
    className={className}
    style={{
      ...style,
      cursor: "pointer",
      width: "3rem",
      height: "3rem",
      right: "-50px",
    }}
    onClick={onClick}
    color="#fff"
  />
);

const settings = {
  slidesToShow: 2,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
};

const Slider = () => {
  return (
    <SlickSlider {...settings}>
      <div>
        <Card
          width={[400]}
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: 16,
          }}
        >
          <Image
            src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/12testinghmmm7-1024x1024.png"
            sx={{
              borderRadius: "16px 16px 0 0",
            }}
          />
          <Heading p={3} fontFamily="inherit">
            Nids – The art house, fashionista, bad skater, brilliant scientist,
            loves ice creams, has an eye for colors & another for details
          </Heading>
        </Card>
      </div>
      <div>
        <Card
          width={[400]}
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: 16,
          }}
        >
          <Image
            src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/12testing3-1024x1024.png"
            sx={{
              borderRadius: "16px 16px 0 0",
            }}
          />
          <Heading p={3} fontFamily="inherit">
            ww – loves football, movies, surfing web n water & making shitty
            graffitis that he likes
          </Heading>
        </Card>
      </div>
      <div>
        <Card
          width={[400]}
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: 16,
          }}
        >
          <Image
            src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/vib-1024x1024.png"
            sx={{
              borderRadius: "16px 16px 0 0",
            }}
          />
          <Heading p={3} fontFamily="inherit">
            MrMagger – loves getting into all things, Violet Indigo Blue lover,
            gets things done, the bureaucrat
          </Heading>
        </Card>
      </div>
      <div>
        <Card
          width={[400]}
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: 16,
          }}
        >
          <Image
            src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/amoghnmonu25-1024x1024.png"
            sx={{
              borderRadius: "16px 16px 0 0",
            }}
          />
          <Heading p={3} fontFamily="inherit">
            Yeeger – all things action n adventure, the medic & the morgue in 1,
            kicks your ass whilst promoting good drinks, 25hr energy
          </Heading>
        </Card>
      </div>
      <div>
        <Card
          width={[400]}
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: 16,
          }}
        >
          <Image
            src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/amoghnmonu6-1024x1024.png"
            sx={{
              borderRadius: "16px 16px 0 0",
            }}
          />
          <Heading p={3} fontFamily="inherit">
            MD-frontend backend deadends bow for the coder king who’s got a
            knack for dapps & snacks
            <ul style={{ fontSize: "1rem" }}>
              <li>
                great friend, will bring you out of a for loop – just saiyan
              </li>
              <li>bringer of lots & lots of worldwideweb dubs</li>
              <li>Dark mode user, Colorful personality</li>
            </ul>
          </Heading>
        </Card>
      </div>
    </SlickSlider>
  );
};

export default Slider;
