
import NavBar from "@/components/NavBar";
import VideoHero from "@/components/VideoHero";
import FeatureCards from "@/components/FeatureCards";
import SpecsGrid from "@/components/SpecsGrid";
import HUDStrip from "@/components/HUDStrip";
import Gallery from "@/components/Gallery";
import Comparison from "@/components/Comparison";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import VideoReels from "@/components/VideoReels";

export default function Page(){
  return (
    <>
      <NavBar />
      <main>
        <VideoHero/>
        <FeatureCards/>
        <SpecsGrid/>
        <HUDStrip images={[
          {src:"/images/hud-1.png", alt:"HUD — top view"},
          {src:"/images/hud-2.png", alt:"HUD — perspective"}
        ]}/>
        <VideoReels/>
        <Gallery items={[
          {src:"/images/hero-drone-new.jpg", label:"Demo box", ratio:"video"},
          {src:"/images/lidar-1.jpg", label:"Point cloud Potash mine", ratio:"video"},
          {src:"/images/lidar-3.jpg", label:"Point cloud Potash mine", ratio:"video"},
          {src:"/images/lidar-2.jpg", label:"Point cloud Potash mine", ratio:"video"},
          {src:"/images/corridor-1.jpg", label:"LiDar + mobile laser scan", ratio:"video"},
          {src:"/images/wall.png", label:"AI defect detection", ratio:"video"},
          {src:"/images/corridor-3.jpg", label:"LiDar + mobile laser scan", ratio:"video"},
          {src:"/images/ui-1.png", label:"Warehouse 3D Model", ratio:"video"},
          {src:"/images/ui-2.png", label:"Warehouse 3D Model", ratio:"video"}
        ]}/>
        <Comparison/>
        <Partners/>
        <CTA/>
      </main>
    </>
  );
}
