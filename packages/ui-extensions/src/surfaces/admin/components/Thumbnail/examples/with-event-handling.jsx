const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
)