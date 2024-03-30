import Collection from "@/components/Collection/Collection";
import Sports from "@/components/Sports/Sports";


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
