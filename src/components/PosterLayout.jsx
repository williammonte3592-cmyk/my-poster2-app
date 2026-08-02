 function PosterLayout({ children }){
return(
    <div className="bg-black flex  justify-center h-full">
      <div className="bg-black w-[900px]  rounded-xl flex">{children}
      </div>
    </div>
  );
}
export default PosterLayout;