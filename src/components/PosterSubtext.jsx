export default function PosterSubtext({label, text2,sublabel, ken,about, }){
return (
    <div className="flow-vertical gap-40px w-hug(272px) h-hug(1038px) t-44px l-474px ">
      <h3 className="text-black font-bold  underline decoration-orange-500 bg-white">{label}</h3>
      <h4 className="text-black bg-white  font-semibold">{sublabel}</h4>
      <p1 className="text-black  bg-white">{text2}</p1>
      <p2 className="text-white bg-black">{about}</p2>
      <p3 className="text-white flow-vertical t-760px l-46px gap-20px w-Hug(387px) h-Hug(238px)">{ken}</p3>
      
    </div>
  );
}
