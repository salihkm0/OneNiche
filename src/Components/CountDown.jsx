import Countdown from "react-countdown";
import FlashSale from "./FlashSale";


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <></>;
  } else {
    return (
      <>
        <FlashSale
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        
      </>
    );
  }
};

export default function CountDown() {
  return (
    <div>
      <Countdown zeroPadTime={2} date={Date.now() + 10000*60*60} renderer={renderer} />
    </div>
  );
}
