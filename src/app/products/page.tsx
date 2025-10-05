import ProductList from "../components/ProductList"

const Page = async ({
    searchParams
}: {
    searchParams: Promise<{ category: string }>
}) => {
    const category  = ( await searchParams).category 
  return (
    <div>
        <ProductList category={category} params="products" />
    </div>
  )
}

export default Page
