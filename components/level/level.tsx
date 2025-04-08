export const Level = ({ children }: { children: React.ReactNode }) => (
  <div className="level container-[inline-size] w-full overflow-clip bg-level-bg relative">
    <div className="absolute -top-[30px] block bg-[url('./images/clouds.avif')] h-[150px] w-[max(200%,1504px)] animate-x-scroll [animation-duration:30s] bg-[size:auto_100%] [--moveX:var(--clouds-moveX)]"></div>
    <div className="relative">
      <div className="absolute top-[60px] block bg-[url('./images/trees-back.avif')] w-[max(200%,2866px)] h-[150px] animate-x-scroll [animation-duration:20s] bg-[size:auto_100%] [--moveX:var(--trees-moveX)]"></div>
      <div className="absolute top-[150px] block bg-[url('./images/trees-back.avif')] w-[max(200%,2866px)] h-[150px] animate-x-scroll [animation-duration:15s] bg-[size:auto_100%] [animation-delay:-0.5s] [--moveX:var(--trees-moveX)]"></div>
      <div className="relative">
        {children}
        <div className="trees-front absolute z-[1] top-[160px] block bg-[url('./images/trees-front.avif')] w-[max(200%,4518px)] h-[150px] animate-x-scroll [animation-duration:5s_] bg-[size:auto_100%] [--moveX:var(--trees-front-moveX)]"></div>
      </div>
    </div>
    <div className="ground -mt-[230px] block bg-[url('./images/bottom.avif')] h-[50px] w-[max(200%,3066px)] animate-x-scroll [--moveX:var(--ground-moveX)] bg-[size:auto_100%]"></div>
  </div>
);

