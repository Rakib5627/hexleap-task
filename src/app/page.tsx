import Collection from "./collection/page";
import Sports from "./sports/page";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F7F7F8' }}>
      <div  className=" max-w-screen-xl mx-auto" >
      <Sports></Sports>
      <Collection></Collection>
      </div>
    </main>
  );
}
