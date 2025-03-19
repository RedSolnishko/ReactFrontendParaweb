import { useState } from "react";
import FaRegFile from "../../assets/svg/file/regular.svg?react";
import FaDownload from "../../assets/svg/file/download.svg?react";


const File = ({ name, size, format }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="file"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="file__icon">
        {isHovered ? <FaDownload /> : <FaRegFile />}
      </div>
      <div className="file__info">
        <a href="#" className={`file__name ${isHovered ? "hovered" : ""}`}>
          {name}    Программа мероприятия VII Открытый отборочный чемпионат ФГАОУ ВО ГУАП по стандартам Агентства развития профессий и навыков
        </a>
        <p className="file__details">
          {format} {size}  PDF, 99.9 КВ
        </p>
      </div>
    </div>
  );
};

export default File;
