const TitleAndSubtitle = ({
  title,
  subtitle,
  subtitleColor = "#8F8DA0",
}: {
  title: string;
  subtitle: string;
  subtitleColor?: string;
}) => {
  return (
    <div className="text-center font-bold mb-[2rem]">
      <p className="tracking-[-0.03px] uppercase mb-6 text-[50px] leading-[100%]">
        {title}
      </p>
      <p className={`text-[${subtitleColor}] text-[18px]`}>{subtitle}</p>
    </div>
  );
};

export default TitleAndSubtitle;
