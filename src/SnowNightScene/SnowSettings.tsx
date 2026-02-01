type Props = {
  density: number;
  wind: number;
  size: number;
  setDensity: (v: number) => void;
  setWind: (v: number) => void;
  setSize: (v: number) => void;
};

export const SnowSettings = ({
  density,
  wind,
  size,
  setDensity,
  setWind,
  setSize,
}: Props) => {
  return (
    <div className="panel">
      <label>
        ❄️ Độ dày tuyết: {density}
        <input
          type="range"
          min={20}
          max={2000}
          value={density}
          onChange={(e) => setDensity(+e.target.value)}
        />
      </label>

      <label>
        🌬️ Gió: {wind}
        <input
          type="range"
          min={0}
          max={1000}
          value={wind}
          onChange={(e) => setWind(+e.target.value)}
        />
      </label>

      <label>
        ⚪ Kích thước hạt: {size}
        <input
          type="range"
          min={2}
          max={100}
          value={size}
          onChange={(e) => setSize(+e.target.value)}
        />
      </label>

      <style>{`
        .panel {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(0,0,0,.5);
          padding: 16px;
          border-radius: 12px;
          color: white;
          backdrop-filter: blur(8px);
        }

        label {
          display: block;
          font-size: 14px;
          margin-bottom: 10px;
        }

        input {
          width: 180px;
        }
      `}</style>
    </div>
  );
};
