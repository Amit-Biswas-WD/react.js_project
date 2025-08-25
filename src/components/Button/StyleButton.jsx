const StyleButton = ({ props, className }) => {
  return (
    <div className={`text-[#FFFFFF] bg-[#73BFA1] rounded-4xl px-[24px] py-[12px] ${className}`}>
      {props}
    </div>
  );
};

export default StyleButton;
