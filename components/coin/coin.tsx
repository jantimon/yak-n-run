
export const Coin = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <div
      className={`w-[38px] h-[38px] bg-[url('./images/coin.avif')] bg-no-repeat bg-center pointer-events-none z-[1] animate-coin-spin ${className || ""}`}
      style={style}
    />
  );
  

  export const CoinGroup = ({ count }: { count: number }) => (
    <div
      className="absolute top-[50px] left-[-180px] flex gap-[5px] animate-coin-fly [--fly-start:100cqw] [--fly-end:-100%]"
    >
      {Array.from({ length: count }, (_, i) => (
        <Coin
          key={i}
          style={{ animationDelay: `${(i * -5) / 100}s` }}
        />
      ))}
    </div>
  );
