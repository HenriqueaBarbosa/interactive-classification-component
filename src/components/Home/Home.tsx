import Star from "@/images/Star";
import Card from "../Elements/Card";
import Circle from "../Elements/Circle";
import Details from "../Elements/Details";
import Button from "../Elements/Button";
import { useState } from "react";


interface ExchangeCard {
  handle: (grade: string) => void;
};

export default function Home(props: ExchangeCard) {
  const [grade, setGrade] = useState<string>("")
  const [circleClicked, setCircleClicked] = useState(false);
  
  const handleGrade = (args: string) => {
    setGrade(args);
    setCircleClicked(true);
  };

  const handleSubmit = () => {
    if (circleClicked) {
      props.handle(grade);
    } else {
      alert("Could you please select a rating?");
    }   
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#141519]">
      <Card>
        <div className=" flex">
          <Circle classification={() => console.log("Star")}>
            <Star />
          </Circle>
        </div>

        <Details
          question={"How did we do?"}
          content={
            "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          }
        />

        <div className="flex justify-between">
          <Circle classification={() => handleGrade("1")} content="1" />
          <Circle classification={() => handleGrade("2")} content="2" />
          <Circle classification={() => handleGrade("3")} content="3" />
          <Circle classification={() => handleGrade("4")} content="4" />
          <Circle classification={() => handleGrade("5")} content="5" />
        </div>

        <div className="flex w-full">
          <Button onClick={handleSubmit} content="SUBMIT" />
        </div>
      </Card>
    </div>
  );
}