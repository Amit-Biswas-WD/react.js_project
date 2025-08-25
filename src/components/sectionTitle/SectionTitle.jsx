
const SectionTitle = ({title,className }) => {
  return (
      <h2 className={`text-[#5C9981] bg-[#E4F0E8] font-bold text-[12px] px-3 py-2 w-auto rounded-2xl inline-block ${className}`}>
        {title}
      </h2>  )
}

export default SectionTitle