export default function SpeedMonitor(props) {
  if (props.kmph <= 80) {
    return <p>You are within the speed limit.</p>;
  }

  return <p>You are exceeding the speed limit.</p>;
}