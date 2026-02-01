import { motion } from "framer-motion";

type Props = {
  density: number;
  wind: number;
  size: number;
  bgColor?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  colorStop1?: number;
  colorStop2?: number;
  colorStop3?: number;
};

export const SnowScene = ({ 
  density, 
  wind, 
  size, 
  bgColor,
  bgColor1,
  bgColor2,
  bgColor3,
  colorStop1 = 0,
  colorStop2 = 50,
  colorStop3 = 100,
}: Props) => {
  let backgroundColor = bgColor;
  
  // Nếu có 3 màu, tạo radial gradient tự động
  if (!backgroundColor && bgColor1 && bgColor2 && bgColor3) {
    backgroundColor = `radial-gradient(circle at top, ${bgColor1} ${colorStop1}%, ${bgColor2} ${colorStop2}%, ${bgColor3} ${colorStop3}%)`;
  }
  
  // Fallback về gradient mặc định
  if (!backgroundColor) {
    backgroundColor = 'radial-gradient(circle at top, #2c3e50, #0b132b)';
  }
  
  return (
    <div className="scene" style={{ background: backgroundColor }}>
      {/* <div className="moon">
        <div className="crater crater1" />
        <div className="crater crater2" />
        <div className="crater crater3" />
        <div className="crater crater4" />
        <div className="crater crater5" />
      </div> */}

      {Array.from({ length: density }).map((_, i) => {
        const s = Math.random() * size + 2;
        // Tốc độ rơi giảm khi gió tăng (gió mạnh = rơi nhanh hơn)
        const baseDuration = 8;
        const windSpeedFactor = wind / 100; // 0 to 1
        const duration = baseDuration - (windSpeedFactor * 4) + Math.random() * 3;
        
        return (
          <motion.span
            key={i}
            className="snow"
            style={{
              left: `${Math.random() * 100}%`,
              width: s,
              height: s,
              opacity: Math.random(),
            }}
            initial={{ y: -20 }}
            animate={{
              y: "110vh",
              // Tuyết bay theo một hướng gió (từ trái sang phải)
              x: wind ? wind * 2 : 0,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      <style>{`
        .scene {
          height: 100vh;
          overflow: hidden;
          position: relative;
        }

        .moon {
          position: absolute;
          top: 80px;
          right: 120px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, #fff5e1, #ffd18a, #daa06d);
          box-shadow: 0 0 60px rgba(255,200,120,.6);
        }

        .crater {
          position: absolute;
          border-radius: 90%;
          background: radial-gradient(circle, rgba(0,0,0,.15), rgba(0,0,0,.05));
          box-shadow: inset 2px 2px 4px rgba(0,0,0,.2);
        }

        .crater1 {
          width: 20px;
          height: 20px;
          top: 25px;
          left: 30px;
        }

        .crater2 {
          width: 15px;
          height: 15px;
          top: 50px;
          left: 60px;
        }

        .crater3 {
          width: 12px;
          height: 12px;
          top: 70px;
          left: 35px;
        }

        .crater4 {
          width: 18px;
          height: 18px;
          top: 35px;
          left: 75px;
        }

        .crater5 {
          width: 10px;
          height: 10px;
          top: 60px;
          left: 15px;
        }

        .snow {
          position: absolute;
          top: -10px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
