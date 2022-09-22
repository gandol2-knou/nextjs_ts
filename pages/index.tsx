import type { NextPage } from "next";

// export default function Home() {
//   return <div className="bg-red-200">hello world</div>;
// }

const Home: NextPage = (props) => {
  console.log(props);
  return <div className="bg-red-200">hello world</div>;
};

export default Home;
