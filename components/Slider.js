import SlickSlider from "react-slick";
import { Image, Text, Card } from "rebass";
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

export const settings = {
  slidesToShow: 2,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Slider = () => {
  return (
    <SlickSlider {...settings}>
      <div>
        <Card
          width={[260, 400]}
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
          <Text p={[3]} fontFamily="inherit" fontSize={[4, 5]}>
            Nids – The art house, fashionista, bad skater, brilliant scientist,
            loves ice creams, has an eye for colors & another for details
          </Text>
        </Card>
      </div>
      <div>
        <Card
          width={[260, 400]}
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
          <Text p={[3]} fontFamily="inherit" fontSize={[4, 5]}>
            ww – loves football, movies, surfing web n water & making shitty
            graffitis that he likes
          </Text>
        </Card>
      </div>
      <div>
        <Card
          width={[260, 400]}
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
          <Text p={[3]} fontFamily="inherit" fontSize={[4, 5]}>
            MrMagger – loves getting into all things, Violet Indigo Blue lover,
            gets things done, the bureaucrat
          </Text>
        </Card>
      </div>
      <div>
        <Card
          width={[260, 400]}
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
          <Text p={[3]} fontSize={[4, 5]} fontFamily="inherit">
            Yeeger – all things action n adventure, the medic & the morgue in 1,
            kicks your ass whilst promoting good drinks, 25hr energy
          </Text>
        </Card>
      </div>
      <div>
        <Card
          width={[260, 400]}
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
          <Text p={[3]} fontFamily="inherit" fontSize={[4, 5]}>
            MD-frontend backend deadends bow for the coder king who’s got a
            knack for dapps & snacks
            <ul style={{ fontSize: "1rem" }}>
              <li>
                great friend, will bring you out of a for loop – just saiyan
              </li>
              <li>bringer of lots & lots of worldwideweb dubs</li>
              <li>Dark mode user, Colorful personality</li>
            </ul>
          </Text>
        </Card>
      </div>
    </SlickSlider>
  );
};

export default Slider;
