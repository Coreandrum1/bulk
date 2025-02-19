import { useEffect, useState } from "react";
import { Message } from "../types/globalTypes";

interface IProps {
  message: Message;
}

const TypeWriterContainer = ({ message }: IProps) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => prev + 5);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return <div className="bot">{message.message.slice(0, messageIndex)}</div>;
};

export default TypeWriterContainer;
