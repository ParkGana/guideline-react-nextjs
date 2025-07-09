const TailwindPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="w-fit text-xl font-bold border-2 border-gray-900 px-2 py-1">COLOR</p>
        <div className="flex">
          <div className="w-10 h-10 bg-gray-100" />
          <div className="w-10 h-10 bg-gray-200" />
          <div className="w-10 h-10 bg-gray-300" />
          <div className="w-10 h-10 bg-gray-400" />
          <div className="w-10 h-10 bg-gray-500" />
          <div className="w-10 h-10 bg-gray-600" />
          <div className="w-10 h-10 bg-gray-700" />
          <div className="w-10 h-10 bg-gray-800" />
          <div className="w-10 h-10 bg-gray-900" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="w-fit text-xl font-bold border-2 border-gray-900 px-2 py-1">TYPOGRAPHY</p>
        <div>
          <p className="text-title">TEXT</p>
          <p className="text-label">TEXT</p>
          <p className="text-body">TEXT</p>
          <p className="text-caption">TEXT</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="w-fit text-xl font-bold border-2 border-gray-900 px-2 py-1">TYPOGRAPHY &#40;반응형&#41;</p>
        <div>
          <p className="text-responsive-title">TEXT</p>
          <p className="text-responsive-label">TEXT</p>
          <p className="text-responsive-body">TEXT</p>
          <p className="text-responsive-caption">TEXT</p>
        </div>
      </div>
    </div>
  );
};

export default TailwindPage;
