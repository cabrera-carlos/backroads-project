type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  );
};
export default Title;
