import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import HomeClient from "@/components/home-client";

export { generateMetadata };

export default function Home() {
  return <HomeClient />;
}
