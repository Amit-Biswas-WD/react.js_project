import AllCard from "../../../../../components/allCard/AllCard"

const Category = ({value}) => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {value.map((props) => (
          <AllCard key={props.id} props={props} />
        ))}
      </section>
  )
}

export default Category