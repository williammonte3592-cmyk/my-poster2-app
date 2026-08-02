import PosterLayout from "./components/PosterLayout";
import PosterImage from "./components/PosterImage";
import PosterHeading from "./components/PosterHeading";
import PosterSubtext from "./components/PosterSubtext";
import PosterBadge from "./components/PosterBadge";

export default function App() {
  return (
    <PosterLayout>
      <div>
      <PosterImage src="/wachira.jpg" alt="Ken Wachira" />
    <PosterHeading title="Ken Wachira" subtitle="BASKETBALL COACH" />
    <PosterSubtext
    about="About Ken"
    ken="Meet Ken Wachira, a basketball strategist known for his quick decision-making and game-reading abilities. His coaching style emphasizes enhancing court vision and predicting opponents' moves. Gain exclusive insights into basketball tactics and honing your 3-point game with Ken Wachira, the maestro behind the arc."
        />
      <PosterBadge text="Read the game, own the court." />
      
    </div>
      <div style={{
          padding: "10px 150px",
          textAlign: "left",
          backgroundColor: "white",
          
        }}
      >
        <PosterSubtext
          label="DECISIVE MOVES SPECIALIST"/>
      <PosterSubtext
          sublabel="Strength"
          text2="Strategic Vision & Quick Decision-Making & 3-Point Shooting"
        />

        <PosterSubtext
        sublabel="Expertise"
          text2="Reading the game, making decisive moves, excellent 3-point shooting."
        />

      <PosterSubtext
      label="VISIONARY INSIGHTS"
        />
      <PosterSubtext
          sublabel="Coaching focus"
        text2="Improving court vision, anticipating opponent moves."
        />

        <PosterSubtext
          sublabel="Main focus"
        text2=" Tactical insights,
         Rapid decision-making drills"
        />

        <PosterSubtext
          label="TRAINING POSITIONS"
          sublabel="Main focus"
        text2="Point guards,Small forwards,Team strategists"
         />
         <posterSubtext 
          sublabel="Also"
        text2="trains all basketball positions."
        />

        <PosterSubtext
          label="ACCOLADES"
        text2="MVP 2022, renowned for exceptional 3-point shooting skills."
        />
      </div>
    </PosterLayout>
);
}
