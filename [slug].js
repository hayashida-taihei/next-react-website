export async function getServerSideProps(context) {
  console.log("params:", context.params);
  return {
    props: { message: "Dynamic Routes" },
  };
}
