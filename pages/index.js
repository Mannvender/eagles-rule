import { Box, Image, Heading, Card, Text } from "rebass";
import Slider from "react-slick";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

import Header from "../components/Header";
import Timeline from "../components/Timeline";

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

const Index = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: 1024,
          mx: "auto",
          px: 0,
        }}
      >
        <Image
          height="600px"
          width="1024px"
          src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/minutae.gif"
          sx={{
            //   width: ["50%", "100%"],
            borderRadius: 0,
            objectFit: "cover",
            objectPosition: "50% 30%",
          }}
          mb={4}
        />
        <Heading
          textAlign="center"
          fontSize={[5, 6]}
          fontFamily="inherit"
          sx={{
            color: "primary",
          }}
          mb={7}
        >
          3600 adventurous hearts that strive for excellence in whatever fields
          they chose
        </Heading>
        <Box mb={7}>
          <Slider {...settings}>
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
                  Nids – The art house, fashionista, bad skater, brilliant
                  scientist, loves ice creams, has an eye for colors & another
                  for details
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
                  ww – loves football, movies, surfing web n water & making
                  shitty graffitis that he likes
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
                  MrMagger – loves getting into all things, Violet Indigo Blue
                  lover, gets things done, the bureaucrat
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
                  Yeeger – all things action n adventure, the medic & the morgue
                  in 1, kicks your ass whilst promoting good drinks, 25hr energy
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
                  MD-frontend backend deadends bow for the coder king who’s got
                  a knack for dapps & snacks
                  <ul style={{ fontSize: "1rem" }}>
                    <li>
                      great friend, will bring you out of a for loop – just
                      saiyan
                    </li>
                    <li>bringer of lots & lots of worldwideweb dubs</li>
                    <li>Dark mode user, Colorful personality</li>
                  </ul>
                </Heading>
              </Card>
            </div>
          </Slider>
        </Box>
        <Box mb={7}>
          <Heading
            fontSize={[7]}
            textAlign="center"
            fontFamily="inherit"
            mb={4}
          >
            Roadmap
          </Heading>
          <Timeline />
        </Box>
      </Box>
    </>
  );
};

export default Index;
